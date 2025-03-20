"use client";

import React, { useEffect, useRef, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE, GET_MESSAGES_ROUTE } from "@/utils/ApiRoutes";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constans";
import Chat from "./Chat/Chat";
import Empty from "./Empty";
import { io } from "socket.io-client";
import { HOST } from "@/utils/ApiRoutes";
import SearchMessage from "./Chat/SearchMessage";
import VideoCall from "./Call/VideoCall";
import VoiceCall from "./Call/VoiceCall";
import IncomingVideoCall from "./common/IncomingVideoCall";
import IncomingCall from "./common/IncomingCall";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
function Main() {
  const router = useRouter();
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
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [socketEvent, setSocketEvent] = useState(false);
  const socket = useRef();
  const roter = useRouter();
  // const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (redirectLogin) router.push("/login");
  }, [redirectLogin]);

  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) setRedirectLogin(true);
    if (!userInfo && currentUser?.email) {
      const { data } = await axios.post(CHECK_USER_ROUTE, {
        email: currentUser.email,
      });

      if (!data.status) {
        router.push("/login");
      }
      if (data?.data) {
        const {
          id,
          name,
          email,
          profilePicture: profileImage,
          status,
        } = data.data;
        dispatch({
          type: reducerCases.SET_USER_INFO,
          userInfo: {
            id,
            name,
            email,
            profileImage,
            status,
          },
        });
      }
    }
  });

  useEffect(() => {
    console.log("userInfo: ", userInfo); // current user info {email, id, name, profileImage, status}
    // console.log("userNotifications:---- ", userNotifications);

    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      socket.current = io(HOST);
      socket.current.on("connect", () => {
        console.log("SOCKET CONNECTED: ", socket.current.id); // ✅ Now logs the correct socket ID
        socket.current.emit("add-user", userInfo.id);
      });

      // Handle backend restart: If the server asks for userId again, send it-Added
      socket.current.on("request-userId", () => {
        console.log("Backend restarted, resending userId...");
        if (userInfo.id) {
          socket.current.emit("add-user", userInfo.id);
        }
      });

      dispatch({ type: reducerCases.SET_SOCKET, socket });
    }
  }, [userInfo]);

  useEffect(() => {
    if (socket.current && !socketEvent) {
      socket.current.on("msg-recieve", (data) => {
        dispatch({
          type: reducerCases.ADD_MESSAGE,
          newMessage: {
            ...data.message,
          },
        });
      });

      socket.current.on("incoming-voice-call", ({ from, roomId, callType }) => {
        //caller id in from
        dispatch({
          type: reducerCases.SET_INCOMING_VOICE_CALL,
          incomingVoiceCall: { ...from, roomId, callType },
        });
      });

      socket.current.on("user-busy", ({ to }) => {
        // added
        alert(`User ${to} is currently on another call.`);
      });

      socket.current.on("incoming-video-call", ({ from, roomId, callType }) => {
        dispatch({
          type: reducerCases.SET_INCOMING_VIDEO_CALL,
          incomingVideoCall: { ...from, roomId, callType },
        });
      });

      socket.current.on("voice-call-rejected", () => {
        dispatch({
          type: reducerCases.END_CALL,
        });
        router.push("/");
      });

      socket.current.on("video-call-rejected", () => {
        dispatch({
          type: reducerCases.END_CALL,
        });
      });
      socket.current.on("outgoing-voice-call", (data) => {
        console.log("from outgoing voice call");
        if (data?.call === "autoRejected") {
          console.log("We came in outgoing-voice-call reducer");
          dispatch({
            type: reducerCases.END_CALL,
          });
        }
      });

      socket.current.on("user-busy", ({ to }) => {
        // added
        // alert(`User ${to} is currently on another call.`);
        toast.error(`User ${to} is currently on another call.`);
        // Reject the incoming call immediately

        dispatch({ type: reducerCases.END_CALL });
        router.push("/");
      });

      // // Handle call-ended event - added
      // socket.current.on("call-ended", (data) => {
      //   dispatch({ type: reducerCases.END_CALL });
      // });
      socket.current.on("newNotification", (notification) => {
        console.log("notification:---- ", notification);
        // setNotifications((prev) => [notification, ...prev]);
        // dispatch({
        //   type: reducerCases.SET_USER_NOTIFICATIONS,
        //   notifications: [notification, ...userNotifications],
        // });
        // Show toast notification
        toast.info(notification.message);
      });

      socket.current.on("online-users", ({ onlineUsers }) => {
        console.log(onlineUsers);
        dispatch({
          type: reducerCases.SET_ONLINE_USERS,
          onlineUsers,
        });
      });

      setSocketEvent(true);
    }
  }, [socket.current]);

  useEffect(() => {
    const getMessages = async () => {
      const {
        data: { messages },
      } = await axios.get(
        `${GET_MESSAGES_ROUTE}/${userInfo.id}/${currentChatUser.id}`
      );
      dispatch({ type: reducerCases.SET_MESSAGES, messages });
    };
    if (currentChatUser?.id) {
      getMessages();
    }
  }, [currentChatUser]);

  return (
    <>
      {incomingVideoCall && <IncomingVideoCall />}
      {incomingVoiceCall && <IncomingCall />}
      {/* {videoCall && (
        <div className="h-screen w-screen max-h-full overflow-hidden">
          <VideoCall />
        </div>
      )}
      {voiceCall && (
        <div className="h-screen w-screen max-h-full overflow-hidden">
          <VoiceCall />
        </div>
      )} */}
      {!videoCall && !voiceCall && (
        <div className="grid sm:grid-cols-[50%_50%] lg:grid-cols-main h-screen w-screen max-h-screen max-w-full">
          <ChatList className="hidden sm:block sm:order-2" />
          {currentChatUser ? (
            <div
              className={`flex flex-col w-full h-full ${
                messagesSearch ? "sm:grid sm:grid-cols-[35%_65%]" : ""
              }`}
            >
              <Chat />
              {messagesSearch && <SearchMessage />}
            </div>
          ) : (
            <Empty className="flex items-center justify-center w-full" />
          )}
        </div>
      )}
    </>
  );
}

export default Main;
