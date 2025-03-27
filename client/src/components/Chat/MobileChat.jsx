import React from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";
import ContactsList from "../ChatList/ContactsList";
import { useStateProvider } from "@/context/StateContext";

const MobileChat = () => {
  const [{ currentChatUser }] = useStateProvider();

  return (
    <div className="border-10 border-yellow-400">
      {/* Show ContactsList when there's no active chat */}
      {!currentChatUser ? (
        <ContactsList />
      ) : (
        <div className="w-full h-full flex flex-col">
          <ChatHeader />
          <ChatContainer />
          <MessageBar />
        </div>
      )}
    </div>
  );
};

export default MobileChat;



// import React from "react";
// import ChatHeader from "./ChatHeader";
// import ChatContainer from "./ChatContainer";
// import MessageBar from "./MessageBar";
// import ContactsList from "../ChatList/ContactsList";
// import { useStateProvider } from "@/context/StateContext";

// const MobileChat = () => {
//   const [{ currentChatUser }] = useStateProvider();

//   return (
//     <div className="border-10 border-yellow-400">
//       {currentChatUser ? (
//         <>
//           <ChatHeader />
//           <ChatContainer />
//           <MessageBar />
//         </>
//       ) : (
//         <ContactsList />
//       )}
//     </div>
//   );
// };

// export default MobileChat;


// // import React from 'react'
// // import ChatHeader from './ChatHeader'
// // import ChatContainer from './ChatContainer'
// // import MessageBar from './MessageBar'

// // const MobileChat = () => {
// //   return (
// //     <div className="border-10 border-yellow-400">
// //       <ChatHeader />
// //       <ChatContainer />
// //       <MessageBar />
// //     </div>
// //   )
// // }

// // export default MobileChat

