import { reducerCases } from "@/context/constans";
import { useStateProvider } from "@/context/StateContext";
import axios from "axios";
import { GET_CALL_TOKEN } from "@/utils/ApiRoutes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineCallEnd } from "react-icons/md";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";

function Container({ data }) {
  const [{ socket, userInfo }, dispatch] = useStateProvider();
  const [callAccepted, setCallAccepted] = useState(false);
  const [token, setToken] = useState(undefined);
  const [zgVar, setZgVar] = useState(undefined);
  const [localStream, setLocalStream] = useState(undefined);
  const [publishStream, setPublishStream] = useState(undefined);
  const [roomId, setRoomId] = useState(undefined);

  console.log("data: ", data); // data:  {id: 1, name: "spengu", profilePicture: "/images/spengu.jpg", type: "out-going", callType: "video", roomID: 3437848}

  useEffect(() => {
    if (data.type === "out-going") {
      socket.current.on("accept-call", ({ roomId }) => {
        setCallAccepted(true);
        setRoomId(roomId);
      });
    } else {
      setTimeout(() => {
        setCallAccepted(true);
        setRoomId(roomId);
      }, 1000);
    }
  }, [data]);

  console.log("ROOM ID: ", roomId);

  //    useEffect(()=>{
  //         const getTOken = async() =>{
  //             try{
  //                 const {data : {token : returnedToken},
  //             } = await axios.get(`${GET_CALL_TOKEN}/${userInfo.id}`);
  //             setToken(returnedToken);
  //             }
  //             catch(err){
  //                 console.log(err);
  //             }
  //         };
  //         getTOken();
  //    }, [callAccepted])
  useEffect(() => {
    const getToken = async () => {
      if (!userInfo?.id) {
        console.error("User ID is missing");
        return;
      }
      try {
        const {
          data: { token: returnedToken },
        } = await axios.get(`${GET_CALL_TOKEN}/${userInfo.id}`);
        setToken(returnedToken);
      } catch (err) {
        console.error(
          "Error fetching token:",
          err.response?.data || err.message
        );
      }
    };

    getToken();
  }, [userInfo]); // Dependency added to ensure it's executed when userInfo changes

  useEffect(() => {
    const startCall = async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: data.callType === "video",
      });
      import("zego-express-engine-webrtc").then(
        async ({ ZegoExpressEngine }) => {
          const zg = new ZegoExpressEngine(
            process.env.NEXT_PUBLIC_ZEGO_APP_ID,
            process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET
          );
          setZgVar(zg);

          zg.on(
            "roomStreamUpdate",
            async (roomId, updateType, streamList, extendedData) => {
              if (updateType === "ADD") {
                const rmVideo = document.getElementById("remote-video");
                const vd = document.createElement(
                  data.callType === "video" ? "video" : "audio"
                );
                vd.id = streamList[0].streamID;
                vd.autoplay = true;
                vd.playsInline = true;
                vd.muted = false;
                if (rmVideo) {
                  rmVideo.appendChild(vd);
                }
                zg.startPlayingStream(streamList[0].streamID, {
                  audio: true,
                  video: true,
                }).then((stream) => (vd.srcObject = stream));
              } else if (
                updateType === "DELETE" &&
                zg &&
                localStream &&
                streamList[0].streamID
              ) {
                zg.destroyStream(localStream);
                zg.stopPublishingStream(streamList[0].streamID);
                zg.logoutRoom(data.roomId.toString());
                dispatch({ type: reducerCases.END_CALL });
              }
            }
          );
          await zg.loginRoom(
            data.roomId.toString(),
            token,
            { userID: userInfo.id.toString(), userName: userInfo.name },
            { userUpdate: true }
          );

          const localStream = await zg.createStream({
            camera: {
              audio: true,
              video: data.callType === "video" ? true : false,
            },
          });
          const localVideo = document.getElementById("local-audio");
          const videoElement = document.createElement(
            data.callType === "video" ? "video" : "audio"
          );
          videoElement.id = "video-local-zego";
          videoElement.className = "h-28 w-32";
          videoElement.autoplay = true;
          videoElement.muted = false;

          videoElement.playsInline = true;

          localVideo.appendChild(videoElement);
          const td = document.getElementById("video-local-zego");
          td.srcObject = localStream;
          const streamID = "123" + Date.now();
          setPublishStream(streamID);
          setLocalStream(localStream);
          zg.startPublishingStream(streamID, localStream);
        }
      );
    };
    if (token) {
      startCall();
    }
  }, [token]);

  const endCall = () => {
    const id = data.id;
    if (zgVar && localStream && publishStream) {
      zgVar.destroyStream(localStream);
      zgVar.stopPublishingStream(publishStream);
      zgVar.logoutRoom(data.roomId.toString());
    }
    // console.log("data", data);
    if (data.callType === "voice") {
      console.log("audio call rejected 1");
      socket.current.emit("reject-voice-call", {
        from: id, // callee id
        to: userInfo.id,
      });
    } else {
      socket.current.emit("reject-video-call", {
        from: id,
      });
    }
    dispatch({ type: reducerCases.END_CALL });
  };

  return (
    <div
      className="border-conversation-border border-l w-full bg-conversation-panel-background flex flex-col 
    h-[100vh] overflow-scroll items-center justify-center text-white"
    >
      <div className="flex flex-col gap-3 items-center">
        <span className="text-4xl">{data.name}</span>
        <span className="text-lg">
          {callAccepted && data.callType !== "video"
            ? "On going call"
            : "Calling"}
        </span>
      </div>
      {(!callAccepted || data.callType === "audio") && (
        <div className="my-3">
          <Image
            src={data.profilePicture}
            alt="calling_spengu"
            height={300}
            width={300}
            className="rounded-full"
          />
        </div>
      )}
      <div className="my-5 relative" id="remote-video">
        <div className="absolute bottom-5 right-5" id="local-audio"></div>
      </div>
      <div className="h-16 w-16 bg-red-600 flex items-center justify-center rounded-full">
        <MdOutlineCallEnd
          className="text-3xl cursor-pointer"
          onClick={endCall} // end call when call is being made and both user is in call
        />
      </div>
    </div>
  );
}

export default Container;
