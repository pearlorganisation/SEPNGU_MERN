import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import spengu from "../../public/avatars/spoken_english_guru.jpg";
import { useStateProvider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import Avtar from "@/components/common/Avtar";
import defaultAvtar from "../../public/avatars/default_avatar.png";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { reducerCases } from "@/context/constans";

function onboarding() {
  const router = useRouter();
  const [{ userInfo, newUser }, dispatch] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [image, setImage] = useState(defaultAvtar);
  console.log("user ingo", userInfo);
  useEffect(() => {
    if (!newUser && !userInfo?.email) router.push("/login");
    else if (!newUser && userInfo?.email) router.push("/");
  }, [newUser, userInfo, router]);

  const onboardUserHandler = async () => {
    if (validateDetails()) {
      const email = userInfo.email;
      try {
        const { data } = await axios.post(ONBOARD_USER_ROUTE, {
          email,
          name,
          about,
          image,
          mobileNumber,
        });
        if (data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id: data.user.id,
              name,
              email,
              mobileNumber,
              profileImage: image,
              status: about,
            },
          });
          router.push(newUser ? "/landingpage" : "/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const validateDetails = () => {
    if (name.length < 3 && mobileNumber.length < 10) {
      return false;
    }
    return true;
  };
  return (
    <div className="bg-panel-header-background h-full w-screen text-white flex flex-col items-center justify-center">
      {" "}
      <div className="flex items-center justify-center gap-2">
        <Image src={spengu} alt="spengu" width={200} height={200} />
        <span className="text-7xl">Spengu</span>
      </div>
      <h2 className="text-2xl">Create your profile</h2>
      <div className="flex gap-6 mt-6 mb-4">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          <Input name="Display name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />

          <Input
            name="Mobile Number"
            state={mobileNumber}
            setState={setMobileNumber}
            label
          />
          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center gap-7 bg-search-input-container-background p-3  rounded-lg"
              onClick={onboardUserHandler}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avtar type="xl" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
