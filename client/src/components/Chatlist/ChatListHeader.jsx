import React, { useState } from "react";
import Avtar from "../common/Avtar";
import { useStateProvider } from "@/context/StateContext";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { reducerCases } from "@/context/constans";
import ContextMenu from "../common/ContextMenu";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaFolder } from "react-icons/fa";
function ChatListHeader() {
  const [{ userInfo }, dispatch] = useStateProvider();
  const router = useRouter();
  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCordinates({ x: e.pageX, y: e.pageY });
    setIsContextMenuVisible(true);
  };

  const contextMenuOptions = [
    {
      name: "Logout",
      callback: async () => {
        setIsContextMenuVisible(false);
        router.push("/logout");
      },
    },
  ];

  const handleAllContactsPage = () => {
    dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE });
  };
  return (
    <div className="h-16 px-3 py-3 flex justify-between items-center">
      <div className="cursor-pointer">
        <Avtar type="sm" image={userInfo?.profileImage || null} />
      </div>
      <div className="flex gap-6">
        <Link
          href="/showpdf"
          className="w-full max-w-[190px] max-h-[50px] sm:w-[50px] md:w-[50px] lg:w-[108px] items-center rounded-md bg-orange-50 mt-1 mr-12 px-3 py-0.1 text-sm font-medium text-black-800 ring-1  ring-inset transition hover:bg-orange-100"
        >
          Our Course's
        </Link>
        <BsFillChatLeftTextFill
          className="text-panel-header-icon cursor-pointer text-xl"
          title="New Chat"
          onClick={handleAllContactsPage}
        />
        <>
          <BsThreeDotsVertical
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Menu"
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
        </>
      </div>
    </div>
  );
}

export default ChatListHeader;
