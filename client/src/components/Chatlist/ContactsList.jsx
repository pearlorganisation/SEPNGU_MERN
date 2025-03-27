// import { reducerCases } from '@/context/constans';
// import { useStateProvider } from '@/context/StateContext';
// import { GET_ALL_CONTACTS } from '@/utils/ApiRoutes';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { BiArrowBack } from 'react-icons/bi';
// import {BiSearchAlt2} from 'react-icons/bi';
// import ChatListItem from './ChatListItem';

// function ContactsList() {
//     const [allContacts, setAllContacts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchContacts, setSearchContacts] = useState([]);
//     const [{},dispatch] = useStateProvider();

//     useEffect(()=>{
//         if(searchTerm.length){
//             const filteredData = {};
//             Object.keys(allContacts).forEach((key)=>{
//                 filteredData[key] = allContacts[key].filter((obj)=>
//                     obj.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//             );
//         });
//         setSearchContacts(filteredData);
//         }else{
//             setSearchContacts(allContacts);
//         }
//     },[searchTerm]);

//     useEffect(()=>{
//         const getContacts = async () =>{
//             try{
//                 const {
//                 data:{users},
//                 } = await axios.get(GET_ALL_CONTACTS);
//                 setAllContacts(users);
//                 setSearchContacts(users);
//             } catch(err){
//                 console.log(err);
//             }
//         }
//         getContacts();
//     },[])

//   return (
//     <div className='h-full flex flex-col'>
//         <div className="h-24 flex items-end px-3 py-4">
//             <div className="flex items-center gap-12 text-white">
//                 <BiArrowBack className='cursor-pointer text-xl'
//                 onClick={()=>dispatch({type:reducerCases.SET_ALL_CONTACTS_PAGE})}
//                 />
//                 <span>New Chat</span>
//             </div>
//         </div>
//         <div className='bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar'>
//             <div className="flex items-center py-3 gap-3 h-14">
//             <div className='bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow mx-4'>
//             <div>
//                 <BiSearchAlt2 className='text-panel-header-icon cursor-pointer text-l'/>
//             </div>
//             <div>
//             <input type='text' placeholder='Search Contacts' className='bg-transparent text-sm focus:outline-none text-white w-full'
//             value={searchTerm}
//             onChange={(e)=>setSearchTerm(e.target.value)}
//             />
//             </div>
//             </div>
//             </div>
//             {Object.entries(searchContacts).map(([initialLetter,userList])=>{

//                 return(
//                     userList.length>0 && (
//                 <div key={Date.now()+initialLetter}>
//                         <div className='text-teal-light pl-10 py-5'>{initialLetter}</div>
//                         {
//                             userList.map(contact=>{
//                                 return(<ChatListItem
//                                 data={contact}
//                                 isContactsPage={true}
//                                 key={contact.id}
//                                 />)
//                             })
//                         }
//                 </div>))
//             })
//             }
//         </div>

//     </div>
//   )
// }

// export default ContactsList

import { reducerCases } from "@/context/constans";
import { useStateProvider } from "@/context/StateContext";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatListItem from "./ChatListItem";

function ContactsList() {
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchContacts, setSearchContacts] = useState([]);
  const [msgChatMob, setMsgChatMob] = useState(false);

  const [{}, dispatch] = useStateProvider();

  useEffect(() => {
    if (searchTerm.length) {
      const filteredData = {};
      Object.keys(allContacts).forEach((key) => {
        filteredData[key] = allContacts[key].filter((obj) =>
          obj.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSearchContacts(filteredData);
    } else {
      setSearchContacts(allContacts);
    }
  }, [searchTerm]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { users },
        } = await axios.get(GET_ALL_CONTACTS);
        setAllContacts(users);
        setSearchContacts(users);
      } catch (err) {
        console.log(err);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="h-20 sm:h-16 flex items-end px-3 py-4">
        <div className="flex items-center gap-6 text-white">
          <BiArrowBack
            className="cursor-pointer text-xl sm:text-lg"
            onClick={() =>
              dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE })
            }
          />
          <span className="text-lg sm:text-base">New Chat</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-search-input-container-background flex-auto overflow-auto custom-scrollbar">
        <div className="flex items-center py-3 gap-3 h-14 px-4">
          <div className="bg-panel-header-background flex items-center gap-3 px-3 py-1 rounded-lg w-full">
            <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-lg" />
            <input
              type="text"
              placeholder="Search Contacts"
              className="bg-transparent text-sm focus:outline-none text-white w-full placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
       gfjf
        {/* Contact List */}
        {Object.entries(searchContacts).map(
          ([initialLetter, userList]) =>
            userList.length > 0 && (
              <div key={Date.now() + initialLetter} className="px-4 sm:px-2">
                <div className="text-teal-light pl-2 py-3 text-sm sm:text-xs">
                  {initialLetter}
                </div>
                {userList.map((contact) => (
                  <ChatListItem
                    data={contact}
                    isContactsPage={true}
                    key={contact.id}
                  />
                ))}
              </div>
            )
        )}
      </div>


    </div>
  );
}

export default ContactsList;
