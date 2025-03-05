import React, { useState } from "react";
import Avtar from "../common/Avtar";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constans";
import ContextMenu from "../common/ContextMenu";
import Link from "next/link";
import { FaNewspaper, FaPhone, FaRobot } from "react-icons/fa";
function ChatHeader() {
  const [{ currentChatUser, onlineUsers }, dispatch] = useStateProvider();

  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCordinates({ x: e.pageX - 50, y: e.pageY + 20 });
    setIsContextMenuVisible(true);
  };

  const contextMenuOptions = [
    {
      name: "Exit",
      callback: async () => {
        dispatch({ type: reducerCases.SET_EXIT_CHAT });
      },
    },
  ];

  const handleVoiceCall = () => {
    dispatch({
      type: reducerCases.SET_VOICE_CALL,
      voiceCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "voice",
        roomID: Date.now(),
      },
    });
  };

  console.log("Online users: ", onlineUsers);
  const handleVideoCall = () => {
    dispatch({
      type: reducerCases.SET_VIDEO_CALL,
      videoCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "video",
        roomID: Date.now(),
      },
    });
  };

  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10">
      <div className="flex items-center justify-center gap-6">
        <Avtar type="sm" image={currentChatUser?.profilePicture} />
        <div className="flex flex-col">
          <span className="text-primary-strong">{currentChatUser?.name}</span>
          <span className="text-secondary text-sm">
            {onlineUsers.includes(currentChatUser.id) ? "online" : "offline"}
          </span>
        </div>
      </div>
      <div className="flex gap-6">
        <Link
          href="/englishnews"
          className="w-full max-w-[400px] hidden md:block max-h-[200px] sm:w-[200px] md:w-[200px] lg:w-[250px] items-center rounded-md bg-orange-50 mt-1 px-3 py-0.1 text-sm font-medium text-black-800 ring-1 ring-green-600/20 ring-inset transition hover:bg-orange-100"
        >
          English News & Games For Learner
        </Link>
        <MdCall
          className="text-panel-header-icon cursor-pointer text-2xl"
          onClick={handleVoiceCall}
        />
        {/* <IoVideocam className='text-panel-header-icon cursor-pointer text-xl' onClick={handleVideoCall}/> */}
        <BiSearchAlt2
          className="text-panel-header-icon cursor-pointer text-2xl"
          onClick={() => dispatch({ type: reducerCases.SET_MESSAGE_SEARCH })}
        />
        <BsThreeDotsVertical
          className="text-panel-header-icon cursor-pointer text-2xl"
          onClick={(e) => showContextMenu(e)}
          id="context-opener"
        />
        {isContextMenuVisible && (
          <ContextMenu
            options={contextMenuOptions}
            cordinates={contextMenuCordinates}
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
          />
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
