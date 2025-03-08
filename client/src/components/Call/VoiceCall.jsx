import { useStateProvider } from "@/context/StateContext";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
// const Container = dynamic(() => import("./Container"), { ssr: false });
const Room = dynamic(() => import("./Room"), { ssr: false });
function VoiceCall() {
  const [{ voiceCall, socket, userInfo }] = useStateProvider();
  console.log("voiceCall:", voiceCall);
  useEffect(() => {
    if (voiceCall.type === "out-going") {
      socket.current.emit("outgoing-voice-call", {
        // when click on voice call button this emit will be listned on server side
        to: voiceCall.id,
        from: {
          id: userInfo.id,
          profilePicture: userInfo.profileImage,
          name: userInfo.name,
        },
        callType: voiceCall.callType,
        roomId: voiceCall.roomID,
      });
    }
  }, [voiceCall]);

  return <Room data={voiceCall} />;
}

export default VoiceCall;
