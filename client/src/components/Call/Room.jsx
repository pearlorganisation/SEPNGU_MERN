"use client";
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/navigation";

const Room = ({ data }) => {
  const [{ userInfo, socket }] = useStateProvider();
  const router = useRouter();
  const zcRef = useRef(null); // Store `zc` reference here

  // 🔹 Stop local mic playback when the component mounts
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        stream.getAudioTracks().forEach((track) => (track.enabled = false)); // 🔇 Mute mic immediately
        console.log("Microphone access granted but muted.");
        setTimeout(
          () => stream.getTracks().forEach((track) => track.stop()),
          500
        ); // Stop stream after 500ms
      })
      .catch((err) => console.error("Error stopping mic playback:", err));
  }, []);

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
      onJoinRoom: () => console.log("Someone Joined"),
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
      turnOnCameraWhenJoining: false,
      turnOnMicrophoneWhenJoining: false, //By default enabled
      showMyCameraToggleButton: false,
    });

    console.log("zc", zc);
  };

  return <div ref={myMeet}></div>;
};

export default Room;
