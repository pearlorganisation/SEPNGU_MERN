import VoiceCall from "@/components/Call/VoiceCall";
import { useStateProvider } from "@/context/StateContext";
import React from "react";

const voiceCall = () => {
  const [
    {
      userInfo,
      currentChatUser,
      messagesSearch,
      videoCall,
      voiceCall,
      incomingVoiceCall,
      incomingVideoCall,
      userNotifications,
    },
    dispatch,
  ] = useStateProvider();
  return (
    <div>
      {voiceCall && (
        <div className="h-screen w-screen max-h-full overflow-hidden">
          <VoiceCall />
        </div>
      )}
    </div>
  );
};

export default voiceCall;
