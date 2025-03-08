import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
const Room = ({ data }) => {
  const [{ userInfo }] = useStateProvider();
  const myMeet = async (element) => {
    const appId = process.env.NEXT_PUBLIC_ZEGO_APP_ID;
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      data.roomID.toString(), // room id
      userInfo.id.toString(), // userid
      userInfo.name // user name
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
    <div ref={myMeet}>
      <button>Join Voice Call</button>
    </div>
  );
};

export default Room;
