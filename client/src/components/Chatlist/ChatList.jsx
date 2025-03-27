import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";
import { useStateProvider } from "@/context/StateContext";
import ContactsList from "./ContactsList";
import MobileChat from "../Chat/MobileChat";

function ChatList() {
  const [{ contactsPage, currentChatUser }] = useStateProvider();
  const [pageType, setPageType] = useState("default");

  useEffect(() => {
    if (contactsPage) {
      setPageType("all-contacts");
    } else {
      setPageType("default");
    }
  }, [contactsPage]);

  return (
    <div className="bg-panel-header-background flex flex-col min-h-screen max-h-screen z-20">
      {pageType === "default" && (
        <>
          {/* Mobile layout - Show contacts if no chat is open */}
          <div className="lg:hidden">
            {!currentChatUser ? <><ChatListHeader />
            <SearchBar />
            <List /></> : <MobileChat />}
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex flex-col">
            <ChatListHeader />
            <SearchBar />
            <List />
          </div>
        </>
      )}

      {pageType === "all-contacts" && <ContactsList />}
    </div>
  );
}

export default ChatList;


// import React, { useEffect, useState } from "react";
// import ChatListHeader from "./ChatListHeader";
// import SearchBar from "./SearchBar";
// import List from "./List";
// import { useStateProvider } from "@/context/StateContext";
// import ContactsList from "./ContactsList";
// import MobileChat from "../Chat/MobileChat";

// function ChatList() {
//   const [{ contactsPage }] = useStateProvider();
//   const [pageType, setPageType] = useState("default");

//   useEffect(() => {
//     if (contactsPage) {
//       setPageType("all-contacts");
//     } else {
//       setPageType("default");
//     }
//   }, [contactsPage]);

//   return (
//     <div className="bg-panel-header-background flex flex-col min-h-screen max-h-screen z-20">
//       {pageType === "default" && (
//         <>
//           {/* Mobile layout */}
//           <div className="lg:hidden">
//             <MobileChat />
//           </div>

//           {/* Desktop layout */}
//           <div className="hidden lg:flex flex-col">
//             <ChatListHeader />
//             <SearchBar />
//             <List />
//           </div>
//         </>
//       )}

//       {pageType === "all-contacts" && <ContactsList />}
//     </div>
//   );
// }

// export default ChatList;
