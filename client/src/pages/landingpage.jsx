import React, { useContext, useEffect, useState } from "react";
import {
  FaFacebook,
  FaGlobe,
  FaGooglePlay,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import phone from "../../public/avatars/pendrive.jpg";
import Image from "next/image";
import axios from "axios";
import { GET_ALL_PLANS } from "@/utils/ApiRoutes";
import { useStateProvider } from "@/context/StateContext";
import { reducer } from "@/context/StateReducers";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const products = [
  {
    id: 1,
    name: "Online Chatting",
    href: "",
    price: "",
    imageSrc: "/avatars/chat.jpg",
    imageAlt: "",
  },
  {
    id: 2,
    name: "Online One on One Calling",
    href: "",
    price: "",
    imageSrc: "/avatars/calling.avif",
    imageAlt: "",
  },
  {
    id: 3,
    name: "English Speaking & Novel Books PDF",
    href: "",
    price: "",
    imageSrc: "/avatars/novel.jpg",
    imageAlt: "",
  },
  {
    id: 4,
    name: "English News for up to date",
    href: "",
    price: "",
    imageSrc: "/avatars/news.jpg",
    imageAlt: "",
  },
  {
    id: 5,
    name: "Overall English Learning Games",
    href: "",
    price: "",
    imageSrc: "/avatars/games.jpg",
    imageAlt: "",
  },
  {
    id: 6,
    name: "English Learning Short Videos",
    href: "",
    price: "",
    imageSrc: "/avatars/videos1.jpg",
    imageAlt: "",
  },
  {
    id: 6,
    name: "Interview Practice Excersie Notes",
    href: "",
    price: "",
    imageSrc: "/avatars/interview.jpg",
    imageAlt: "",
  },
  {
    id: 7,
    name: "English Learning For Kids",
    href: "",
    price: "",
    imageSrc: "/avatars/kids1.jpg",
    imageAlt: "",
  },
];
const links = [
  { name: "Our Website", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
];
const stats = [
  { name: "Active Member", value: "1000+" },
  { name: "Rating", value: "4.2" },
  { name: "Happy Students", value: "800+" },
  { name: "Call and Chat Only in 199/-", value: "Unlimited" },
  { name: "Free Call", value: "10+ min" },
];
const posts = [
  {
    id: 1,
    title: "बहुत अच्छा है",
    href: "#",
    description:
      "अब मैं यहां से बहुत सारी रोज नई चीजें सीखता हूं, साथ ही ऐसे लोगों से भी सीखता हूं जो मेरी बहुत मदद करते हैं, धन्यवाद सर",
    date: "Jan 16, 2025",
    datetime: "",
    category: { title: "Learner", href: "#" },
    author: {
      name: "Deepak Singh",
      role: "Chef",
      href: "#",
      imageUrl: "/avatars/1.png",
    },
  },
  {
    id: 2,
    title: "Great platform",
    href: "#",
    description:
      "I am currently working as a site enginier i have to meet new client on daily basis and speak to english i use this app for english learning it is great experience Thank you",
    date: "Jan 19, 2025",
    datetime: "",
    category: { title: "Working proffesional", href: "#" },
    author: {
      name: "Arjun saini",
      role: "Job persone",
      href: "#",
      imageUrl: "/avatars/2.png",
    },
  },
  {
    id: 3,
    title: "English sikhne ke liye sbse best app h",
    href: "#",
    description:
      "Sir me avi graduation ke apne last year me hu interview ki prepiration kar rha hu muje english bolte time bhut jijak jesa feel hota tha lekin logo se call pr bat krke mujme bhut improvment ho rhi h.",
    date: "Jan 22, 2025",
    datetime: "",
    category: { title: "Learner", href: "#" },
    author: {
      name: "Kamlesh Kushwaha",
      role: "Graduation Student",
      href: "#",
      imageUrl: "/avatars/3.png",
    },
  },
  {
    id: 4,
    title: "Helpfull",
    href: "#",
    description:
      "Muje bhut help hui isse logo se english me bat krne ke liye bhut achchi h sir aap isme jldi se koi naye feture bhi add kr dena taki or achche se sikhu me",
    date: "Feb 3, 2025",
    datetime: "",
    category: { title: "Learner", href: "#" },
    author: {
      name: "Anjali Singh",
      role: "Nurse",
      href: "#",
      imageUrl: "/avatars/4.png",
    },
  },
  {
    id: 5,
    title: "Wah bhut axa laga sir",
    href: "#",
    description:
      "Me roj naye- naye logo se english me bat krta hu avi me khud se chat me english me senteces type kr leta hu bhut help hui meri isse sir mere dost bhi le rhe h ab membership plan",
    date: "Feb 6, 2025",
    datetime: "",
    category: { title: "Learner", href: "#" },
    author: {
      name: "Laxman Kumar",
      role: "12th Student",
      href: "#",
      imageUrl: "/avatars/5.png",
    },
  },
  {
    id: 6,
    title: "Nice for English Learning",
    href: "#",
    description:
      "I am a housewife i really like this app i learn lots of things from here now i can confidently talk in front of my household thank you so much for this platform.",
    date: "MFeb 8, 2020",
    datetime: "",
    category: { title: "Learner", href: "#" },
    author: {
      name: "Seema Devi",
      role: "House-wife",
      href: "#",
      imageUrl: "/avatars/6.png",
    },
  },
];

function landingpage() {
  const [{ userInfo }, dispatch] = useStateProvider();

  const [userData, setUserData] = useState(null);
  const router = useRouter();

  // const isUserLoggedIn = false;

  console.log(userInfo, "userInfo on landing page");

  useEffect(() => {
    const checkData = localStorage.getItem("userInfo");

    if (!checkData) {
      router.push("/login");
    } else {
      const data = JSON.parse(checkData);
      console.log(data);
      setUserData(data);
      console.log(data);
    }
  }, []);

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPlans = async () => {
      try {
        setLoading(true);
        const response = await axios.get(GET_ALL_PLANS);
        console.log("Response for Fetching plans", response?.data?.data);
        setPlans(response?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log("Error fetching plans", error);
      }
    };

    getPlans();
  }, []);

  const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  // console.log("key---- ", razorpayKey);
  const handleSubscription = async ({ planId }) => {
    console.log(userData);

    try {
      // Step 1: Create Subscription via API
      const response = await axios.post(
        "http://localhost:3005/api/subscriptions",
        {
          planId,
          email: userData?.email,
          userId: userData?.id,
        }
      );

      const { subscriptionId } = response?.data?.data; //

      // Step 2: Razorpay Landing Options for Subscription
      const options = {
        key: razorpayKey,
        subscription_id: subscriptionId,
        name: "SPENGU",
        description: "Subscription Landing",
        handler: async (response) => {
          console.log("Razorpay Response:", response);
          try {
            await axios.post("http://localhost:3005/api/verify-payment", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_subscription_id: response.razorpay_subscription_id,
              razorpay_signature: response.razorpay_signature,
            });
            toast.success("Subscription successful", {
              position: "top-center",
            });

            setTimeout(() => {
              router.push("/");
            }, 2000);
          } catch (error) {
            setError("Payment verification failed");
          }
        },
        prefill: {
          name: userData?.name,
          email: userData?.email,

          // contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Step 3: Open Razorpay Landing
      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        console.error("Payment Failed:", response.error);
        alert("Payment Failed");
      });
    } catch (error) {
      console.error("Error initiating subscription:", error);
    }
  };

  console.log(userData, "1223423");

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-emerald-800 to-red-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-1 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h4 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl">
            आओ, घर बैठे इंग्लिश बोलना सीखें!{" "}
          </h4>
          <br></br>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">
            अभी जॉइन करे Sale offer!
          </h2>
          <br></br>
          <span className="text-xl font-bold tracking-tight text-white sm:text-xl">
            Live Web Chat and Calling App
          </span>
          <p className="mt-1 text-lg font-medium text-pretty text-white sm:text-xl/8">
            यह एक लाइव वेब चैट और कॉलिंग ऐप है जहां हम दुनिया भर के उन लोगों से
            जुड़ने के लिए एक माहौल बनाते हैं जो बेहतर English Fluency के लिए
            अंग्रेजी सीखना, बात करना, झिझक मिटाना, चैट करना और अंग्रेजी में
            सुधार करना चाहते हैं। अध्ययनरत छात्र, कामकाजी पेशेवर, गृहिणी इस ऐप
            का उपयोग दुनिया में कहीं से भी, कभी भी कर सकते हैं। ये काम कुछ इस
            तरह करता है कि आप रियल टाइम में किसी को अंग्रेजी में मैसेज कर सकते
            हैं, कॉल कर सकते हैं, वॉयस नोट्स भेज सकते हैं।
          </p>
        </div>
        <div className="mx-auto mt-0 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-1 grid grid-cols-1 gap-8 sm:mt-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col-reverse gap-1">
                <dt className="text-md font-bold text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {!userData && (
          <button
            className="px-4 py-2 bg-blue-500 "
            onClick={() => router.push("/login")}
          >
            {" "}
            Log In{" "}
          </button>
        )}

        {Array.isArray(plans) &&
          plans.length > 0 &&
          plans.map((plan) => (
            // <div
            //   key={plan._id}
            //   className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 text-center"
            // >
            //   <h2 className="text-xl font-semibold text-gray-800">
            //     Subscription Plan
            //   </h2>
            //   <p className="text-3xl font-bold text-blue-600 mt-2">
            //     {plan?.currency} {plan?.basePrice}
            //   </p>
            //   <p className="text-gray-600 mt-1">
            //     for {Math.ceil(plan?.duration / 30)} months{" "}
            //   </p>
            //   <button
            //     onClick={() =>
            //       handleSubscription({
            //         planId: plan.planId,
            //       })
            //     }
            //     className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            //   >
            //     Join Now
            //   </button>
            // </div>

            <div
              key={plan._id}
              className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 text-center"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Subscription Plan
              </h2>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                {plan?.currency} {plan?.basePrice}
              </p>

              <p className="text-gray-600 mt-1">
                for {Math.ceil(plan?.duration / 30)} months
              </p>

              <p className="text-lg font-medium text-gray-800 mt-2">
                Final Price:{" "}
                <span className="text-green-600 font-bold">
                  {plan?.currency} {(plan?.basePrice * 1.18).toFixed(2)}
                </span>
              </p>

              <p className="text-sm text-gray-500">(Includes 18% GST)</p>

              <button
                onClick={() =>
                  handleSubscription({
                    planId: plan.planId,
                  })
                }
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Join Now
              </button>
            </div>
          ))}
        {/* <div className="flex justify-center mt-3">
          <button className="text-2xl rounded-md border border-transparent bg-indigo-600 px-7 py-2 font-medium text-white hover:bg-indigo-700 animate-popup">
            Join Now
          </button>
        </div> */}
      </div>
      <br></br>
      <div className="from-emerald-800 to-red-800  w-full min-h-screen text-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-6xl lg:px-1">
          <h2 className="text-center text-2xl font-semibold text-white">
            <span className="relative inline-block pb-1">
              FEATURES
              <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h2>
          <br></br>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  width={300}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />

                <h3 className="mt-2 text-md font-semibold text-white-700">
                  {product.name}
                </h3>
                <p className="mt-1 text-md font-bold text-white-900">
                  {product.price}
                </p>
                <p className="mt-1 text-sm font-semibold text-green-300">
                  {product.imageAlt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen items-center bg-gradient-to-r from-emerald-800 to-red-800 py-24 sm:py-10">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-white">
            <span className="relative inline-block pb-1">
              CHAT, TALK, LEARN, SPEAK & PRACTICE
              <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">
                    Will be I able to speak English fluent from this web app
                  </p>
                  <p className="mt-2 max-w-lg text-md text-black max-lg:text-center">
                    यदि आप तीन महीनों के बीच नई चीजें सीखने में 30 से 60 मिनट से
                    अधिक समय बिताते है तो आप आसानी से Fluent अंग्रेजी बोलने में
                    सक्षम हो जाएंगे, लेकिन याद रखें कि कड़ी मेहनत के बिना कुछ भी
                    हासिल करना असंभव है, आपको अपना 100% भी देना होगा।
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <Image
                    src={phone}
                    className="h-[min(152px,40cqw)] object-cover"
                    alt="cahtting_phone"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-5 pt-5 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-xl font-bold tracking-tight text-black max-lg:text-center">
                    How can I join this app?
                  </p>
                  <p className="mt-2 max-w-lg text-md text-black max-lg:text-center">
                    इस ऐप से जुड़ने के लिए आपको केवल <b>199/-</b> का मेंबरशिप
                    प्लान लेना होता है जो कि तीन महीने की वैधता के साथ आता है और
                    इस ऐप को लॉग इन करना होगा उसके बाद आप इस ऐप के प्रीमियम
                    सदस्य हैं और आप किसी से भी English चैट पर बात कर सकते हैं या
                    कॉल पर बात कर सकते हैं।
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">
                    Our upcoming features
                  </p>
                  <p className="mt-2 max-w-lg text-md text-black max-lg:text-center">
                    आने वाले महीनों में लाइव चैट और कॉल के साथ-साथ अंग्रेजी
                    सीखने का बेहतर माहौल बनाने के लिए हम नई सुविधाएँ लेकर आ रहे
                    हैं जैसे: - ENGLISH AI CHATBOT, ENGLISH NEWS, ENGLISH NOVEL
                    BOOK PDF, ENGLISH GAMES, ENGLISH MUSIC, ENGLISH SHORT VIDEO
                    और बहुत कुछ...
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-xl font-bold tracking-tight text-gray-950 max-lg:text-center">
                    Keep a few things in mind while talking
                  </p>
                  <p className="mt-2 max-w-lg text-md text-black max-lg:text-center">
                    आप किसी से भी चैट या मैसेज कर सकते हैं, आप किसी से भी कॉल पर
                    बात कर सकते हैं, सुनिश्चित करें और अंग्रेजी में बेहतर प्रवाह
                    के लिए हमेशा अंग्रेजी में ही बात करने का प्रयास करें। कृपया
                    बात करते समय अपनी निजी जानकारी किसी के साथ साझा न करें।
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="mt-1 flex items-center justify-center">
          <a
            href="https://wa.me/9760375308"
            className="rounded-md bg-green-600 px-3.5 py-2.5 text-1xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact support +91 9760375308
            <span aria-hidden="true">
              <FaWhatsapp />
            </span>
          </a>
        </div>

        <div className="bg-gradient-to-r from-emerald-800 to-red-800 py-24 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="text-2xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">
                Review
              </p>
              <p className="mt-2 text-lg/8 text-white">What our learner say</p>
            </div>
            <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-sm">
                    <time
                      dateTime={post.datetime}
                      className="text-white text-sm font-semibold"
                    >
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-indigo-400 px-3 py-1.5 font-medium text-black hover:bg-indigo"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-white">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-md font-medium text-white">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="size-10 rounded-full bg-white"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-white">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-white">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button class="text-2xl rounded-md border border-transparent bg-indigo-600 px-7 py-2 font-medium text-white hover:bg-indigo-700 animate-popup">
            Join Now
          </button>
        </div>
        <br></br>
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold text-center tracking-tight text-white sm:text-2xl">
            Important Links
          </h2>
        </div>
        <div className="relative top-[30px] sm:bottom-[30px] flex flex-col lg:flex-row justify-between items-center gap-5 w-full p-5">
          <a
            href="https://www.spokenenglish.guru/"
            target="_blank"
            className="inline-flex items-center rounded-md bg-yellow-50 px-3 py-1 text-sm font-bold text-green-800 ring-1 ring-inset transition hover:bg-yellow-100"
          >
            <FaGlobe className="mr-2" /> Website
          </a>
          <a
            href="https://www.youtube.com/@SpokenEnglishGuru"
            target="_blank"
            className="inline-flex items-center rounded-md bg-yellow-50 px-3 py-1 text-sm font-bold text-red-700 ring-1 ring-inset transition hover:bg-yellow-100"
          >
            <FaYoutube className="mr-2" /> YouTube
          </a>
          <a
            href="https://www.instagram.com/spokenenglishguruofficial"
            target="_blank"
            className="inline-flex items-center rounded-md bg-yellow-50 px-3 py-1 text-sm font-bold text-pink-700 ring-1 ring-inset transition hover:bg-yellow-100"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>
          <a
            href="https://www.facebook.com/spokenenglishguruofficialpage"
            target="_blank"
            className="inline-flex items-center rounded-md bg-yellow-50 px-3 py-1 text-sm font-bold text-blue-700 ring-1 ring-yellow-600/20 ring-inset transition hover:bg-yellow-100"
          >
            <FaFacebook className="mr-2" /> Facebook
          </a>
          <a
            href="https://wa.me/9760375308"
            target="_blank"
            className="inline-flex items-center rounded-md bg-yellow-50 px-3 py-1 text-sm font-bold text-green-700 ring-1 ring-inset transition hover:bg-yellow-100"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <a
            href="https://play.google.com/store/search?q=spoken%20english%20guru&c=apps&hl=en"
            target="_blank"
            className="inline-flex items-center rounded-md bg-yellow-50 px-3 py-1 text-sm font-bold text-purple-700 ring-1 ring-inset transition hover:bg-yellow-100"
          >
            <FaGooglePlay className="mr-2" /> App
          </a>
        </div>
      </div>
    </div>
  );
}

export default landingpage;
