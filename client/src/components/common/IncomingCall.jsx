import { reducerCases } from "@/context/constans";
import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";

function IncomingCall() {
  // This component is used to display incoming voice call for callee(who didn't start the call)
  const [{ incomingVoiceCall, userInfo, socket }, dispatch] =
    useStateProvider();
  console.log("incomingVoiceCall", incomingVoiceCall); //{calltype,id,name,profilePicture,roomId} of a person who is calling(started a call)
  console.log("userInfo", userInfo); //{id, name, email, profilePicture} of a person who is receiving the call
  const acceptCall = () => {
    dispatch({
      type: reducerCases.SET_VOICE_CALL,
      voiceCall: { ...incomingVoiceCall, type: "in-coming" }, //storing data of voice call in state
    });
    socket.current.emit("accept-incoming-call", { id: incomingVoiceCall.id }); //caller id
    dispatch({
      type: reducerCases.SET_INCOMING_VOICE_CALL,
      incomingVoiceCall: undefined,
    });
  };

  const rejectCall = () => {
    console.log("audio call rejected 2"); // on callee end
    socket.current.emit("reject-voice-call", {
      from: incomingVoiceCall.id,
      to: userInfo.id,
    }); // reject call of caller id
    dispatch({ type: reducerCases.END_CALL });
  };
  return (
    <div className="h-24 w-80 fixed bottom-8 mb-0 right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-4 bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14">
      <div>
        <Image
          src={incomingVoiceCall.profilePicture}
          alt="avatar"
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>
      <div>
        <div>{incomingVoiceCall.name}</div>
        <div className="text-xs">Incoming Voice Call</div>
        <div className="flex gap-2 mt-2">
          <button
            className="bg-red-500 p-1 px-3 text-sm rounded-full"
            onClick={rejectCall}
          >
            Reject
          </button>
          <button
            className="bg-green-500 p-1 px-3 text-sm rounded-full"
            onClick={acceptCall}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomingCall;
