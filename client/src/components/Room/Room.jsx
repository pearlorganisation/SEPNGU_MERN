import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const myMeet = async (element) => {
    const appId = process.env.NEXT_PUBLIC_ZEGO_APP_ID;
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      "12", // room id
      Date.now().toString(), // userid
      "Nayankunwar" // user name
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
    });
  };
  return (
    <div ref={myMeet}>
      <button>Join</button>
    </div>
  );
};

export default Room;
