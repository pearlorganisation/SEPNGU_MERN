import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
const Room = ({ data }) => {
  const [{ userInfo }] = useStateProvider();
  console.log("Room data: ", data);
  console.log("User info in room: ", userInfo);
  console.log("App id: ", process.env.NEXT_PUBLIC_ZEGO_APP_ID);
  let myMeet = async (element) => {
    const appId = process.env.NEXT_PUBLIC_ZEGO_APP_ID;
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      "893247", // room id data.roomID.toString()
      Date.now().toString(), // userid
      "Nayan" // user name
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
      // Disable Video & Enable Audio Only
      turnOnCameraWhenJoining: false, // Disable Camera
      turnOnMicrophoneWhenJoining: true, // Enable Microphone
      showScreenSharingButton: false, // Disable Screen Sharing
    });
  };
  return (
    <div>
      <div ref={myMeet}></div>
    </div>
  );
};

export default Room;
