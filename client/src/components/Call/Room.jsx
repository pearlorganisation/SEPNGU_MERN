import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
const Room = ({ data }) => {
  const [{ userInfo }] = useStateProvider();
  console.log("Room data: ", data);
  console.log("User info in room: ", userInfo);
  console.log("App id: ", process.env.NEXT_PUBLIC_ZEGO_APP_ID);
  let myMeet = async (element) => {
    console.log("Room data: ", element);

    const appId = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
    const roomID = data.roomID.toString();
    const userInfoId = userInfo.id.toString();
    const userName = userInfo.name;

    console.log("asdsadsadsadsadsadsadsadsadsa");
    console.log("serverSecret", typeof serverSecret);
    console.log("roomID", typeof roomID);
    console.log("appId", typeof appId);
    console.log("userInfo", typeof userInfoId);
    console.log("userName", typeof userName);
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomID, // room id other user{name, email, profilePic, id, type, callType, roomID}
      userInfoId, // userid
      userName // user name
    );

    console.log("kitToken: ", kitToken);
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    const stream = await window.navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    console.log(stream);
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
