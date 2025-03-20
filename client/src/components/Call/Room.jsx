"use client";
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/navigation";

const Room = ({ data }) => {
  const [{ userInfo, socket }] = useStateProvider();
  const router = useRouter();
  const zcRef = useRef(null); // Store `zc` reference here

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

  const myMeet = async (element) => {
    if (!element || zcRef.current) return; // Avoid reinitialization

    const appId = 370893850;
    const sersec = "2064a6f292e4e81b1678031feb99fb84";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      sersec,
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
        router.replace("/");
      },
      onUserLeave: (users) => {
        console.log("Users onUserLeave !!", users);
        socket.current.emit("hangup-user-call", users?.[0]);
        zc.hangUp();
        router.replace("/");
      },
      onCallInvitationEnded: () => {
        if (zcRef.current) {
          zcRef.current.destroy();
          zcRef.current = null;
        }
      },
      turnOnCameraWhenJoining: false,
      turnOnMicrophoneWhenJoining: true,
      showMyCameraToggleButton: false,
      showScreenSharingButton: false,
    });

    console.log("zc", zc);
  };

  return <div ref={myMeet}></div>;
};

export default Room;
