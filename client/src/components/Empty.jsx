import Image from "next/image";
import spengu from "../../public/avatars/whatsapp.gif";
import React from "react";

function Empty() {
  return (
    <div className="border-conversation-border border-l w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center overflow-visible">
      <h1 className="text-center text-2xl text-white md:flex flex-col">
        <b>Spoken English Guru (Web Live Call & Chat App)</b>
      </h1>
      <Image
        src={spengu}
        alt="Spoken English Guru"
        height={450}
        width={450}
        className="rounded-full object-cover"
      />
    </div>
  );
}

export default Empty;
