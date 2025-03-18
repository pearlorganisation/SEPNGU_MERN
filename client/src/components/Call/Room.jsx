"use client";
import React, { useEffect, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/navigation";

const Room = ({ data }) => {
  const [{ userInfo, socket }, dispatch] = useStateProvider();
  const [zegoState, setZegoState] = useState(null);
  // const history = useHistory();
  const router = useRouter();
  useEffect(() => {
    // if (zegoState) {
    //   zegoState.on("user");
    // }
  }, []);

  console.log(data, "data from room");

  console.log(userInfo, "user info rom room");
  const myMeet = async (element) => {
    const appId = 370893850;
    const sersec = "2064a6f292e4e81b1678031feb99fb84";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      sersec,
      data?.roomId?.toString(), // room id
      userInfo.id.toString(), // userid
      userInfo.name // user name
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    setZegoState(zc);
    // zc.on("roomEnd", () => {
    //   history.push("/");
    // });
    zc.joinRoom({
      container: element,
      scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
      onJoinRoom: (user) => {
        console.log("Someone Joined");
      },
      onLeaveRoom: () => {
        console.log("Users onLeaveRoom !!");

        zc.hangUp();
        window.location.replace("/");

        // router.push("/");
      },
      onUserLeave: (users) => {
        console.log("Users onUserLeave !!", users);
        socket.current.emit("hangup-user-call", users?.[0]);
        zc.hangUp();
        window.location.replace("/");
        // router.push("/");
      },
    });

    console.log("zc", zc);
  };

  return <div ref={myMeet}></div>;
};

export default Room;
