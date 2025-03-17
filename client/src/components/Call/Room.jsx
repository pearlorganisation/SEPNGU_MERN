import React, { useEffect, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
const Room = ({ data }) => {
  const [{ userInfo }, dispatch] = useStateProvider();

  console.log(data, "data from room");

  console.log(userInfo, "user info rom room");
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
    zc.joinRoom({
      container: element,
      scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },

      // // Disable Video & Enable Audio Only
      // turnOnCameraWhenJoining: false, // Disable Camera
      // turnOnMicrophoneWhenJoining: true, // Enable Microphone
      // showScreenSharingButton: false, // Disable Screen Sharing
    });
  };

  return <div ref={myMeet}></div>;
};

export default Room;
