"use client";
import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/navigation";

const Room = ({ data }) => {
  const [{ userInfo, socket }] = useStateProvider();
  // const [showMicButton, setShowMicButton] = useState(false); // Manage mic button state
  const router = useRouter();
  const zcRef = useRef(null); // Store `zc` reference here
  // console.log("showMicButton before join room: ", showMicButton);
  useEffect(() => {
    if (!socket.current) return;

    const handleOutgoingCall = (data) => {
      console.log("from outgoing voice call");
      if (data?.call === "autoRejected") {
        console.log("We came in outgoing-voice-call reducer in room section");
        if (zcRef.current) {
          zcRef.current.destroy(); // Destroy the Zego instance
        }
        router.replace("/");
      }
    };

    socket.current.on("outgoing-voice-call", handleOutgoingCall);

    return () => {
      socket.current.off("outgoing-voice-call", handleOutgoingCall);
      if (zcRef.current) {
        zcRef.current.destroy(); // Ensure cleanup on unmount
      }
    };
  }, [socket, router]);
  console.log("App ID:", process.env.NEXT_PUBLIC_ZEGO_APP_ID);
  console.log("Server Secret:", process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET);

  const myMeet = async (element) => {
    if (!element || zcRef.current) return; // Avoid reinitialization

    const appId = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
    const serSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serSecret,
      data?.roomId?.toString(),
      userInfo.id.toString(),
      userInfo.name
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zcRef.current = zc; // Store the instance

    zc.joinRoom({
      container: element,
      scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
      onJoinRoom: () => {
        console.log("Someone Joined");
        // 👇 Show microphone toggle when user joins
        // setShowMicButton(true); // Enable mic button when user joins
        // console.log("showMicButton after join room: ", showMicButton);
      },
      onLeaveRoom: () => {
        console.log("Users onLeaveRoom !!");
        zc.hangUp();
        window.location.replace("/");
      },
      onUserLeave: (users) => {
        console.log("Users onUserLeave !!", users);
        socket.current.emit("hangup-user-call", users?.[0]);
        zc.hangUp();
        window.location.replace("/");
      },
      onCallInvitationEnded: () => {
        if (zcRef.current) {
          zcRef.current.destroy();
          zcRef.current = null;
        }
      },
      // 🚫 Disable Mic & Camera
      turnOnCameraWhenJoining: false,
      turnOnMicrophoneWhenJoining: false, //By default enabled

      // 🚫 Hide UI Buttons
      showMyCameraToggleButton: false, // Hide camera toggle button
      showMyMicrophoneToggleButton: false, // Hide microphone toggle button
    });

    console.log("zc", zc);
  };

  return <div ref={myMeet}></div>;
};

export default Room;
