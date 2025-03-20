import Image from "next/image";
import spengu from "../../public/avatars/whatsapp.gif";
import React from "react";

function Empty() {
  return (
    <div className="hidden md:block">
      <div className="bg-panel-header-background flex border-conversation-border border-l w-full   flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center">
        <h1 className="text-center text-2xl text-white md:flex flex-col">
          <b>Spoken English Guru (Web Live Call & Chat App)</b>
        </h1>
        <Image
          src={spengu}
          alt="Spoken English Guru"
          height={250}
          width={250}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Empty;

//
