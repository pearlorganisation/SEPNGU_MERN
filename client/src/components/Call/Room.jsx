"use client";
import React, { useEffect, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/navigation";

const Room = ({ data }) => {
  const [{ userInfo, socket }, dispatch] = useStateProvider();
  const [zegoState, setZegoState] = useState(null);
  // const history = useHistory();
  const router = useRouter();

  console.log("data in room: ", data);
  console.log("user info in room: ", userInfo);
  const stopMicrophone = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        stream.getTracks().forEach((track) => track.stop()); // Stop mic
      })
      .catch((error) => console.log("Error stopping microphone: ", error));
  };
  const myMeet = async (element) => {
    const appId = 370893850;
    const sersec = "2064a6f292e4e81b1678031feb99fb84";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      sersec,
      data?.roomId?.toString(), // room id
      userInfo.id.toString(), // userid
      userInfo.name // user name
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    setZegoState(zc);
    // zc.on("roomEnd", () => {
    //   history.push("/");
    // });

    if (!zc.hasJoinedRoom) {
      zc.joinRoom({
        container: element,
        scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
        onJoinRoom: (user) => {
          console.log("Someone Joined");
        },
        onLeaveRoom: () => {
          console.log("Users onLeaveRoom !!");
          zc.hangUp();
          window.location.replace("/");
          stopMicrophone(); // Stop microphone
        },
        onUserLeave: (users) => {
          console.log("Users onUserLeave !!", users);
          socket.current.emit("hangup-user-call", users?.[0]);
          zc.hangUp();
          window.location.replace("/");
          stopMicrophone();
        },

        onSetRoomConfigBeforeJoining: (callType) => ({
          turnOnMicrophoneWhenJoining: false,
        }),
        // Disable Video & Enable Audio Only
        turnOnCameraWhenJoining: false, // Disable Camera
        // turnOnMicrophoneWhenJoining: true, // Enable Microphone
        showCameraToggleButton: false, // Hide camera toggle button
      });
      console.log(`User [ ${userInfo.name} ] has joined the room`);
    } else {
      console.log("Already in the room, no need to join again");
    }
    console.log("zc", zc);
    console.log("zegoState", zegoState);
  };

  return <div ref={myMeet}></div>;
};

export default Room;
