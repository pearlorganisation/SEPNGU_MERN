import { useRouter } from "next/router";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useRouter } from "next/router";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

function showpdf() {
  const router = useRouter();
  const products = [
    {
      id: 1,
      name: "90 Days Online English Speaking Course for 6 months with certificate",
      href: "",
      price: "Only in ₹ 499/-",
      imageSrc: "/avatars/onlinecourse.jpg",
      imageAlt:
        "COURSE CONTENT :- English Grammar, Daily Use Sentences, Practice Exerice, Translation Exercises, Conversation Exercises, Vocabulary Exercises, Story Listening Module, English Charts, 1000+ MCQs and more...",
      name: "90 Days Online English Speaking Course for 6 months with certificate",
      href: "https://www.course.spokenenglish.guru/?udref=59322",
      price: "Only in ₹ 499/-",
      imageSrc: "/avatars/onlinecourse.jpg",
      imageAlt:
        "COURSE CONTENT :- English Grammar, Daily Use Sentences, Practice Exercise, Translation Exercises, Conversation Exercises, Vocabulary Exercises, Story Listening Module, English Charts, 1000+ MCQs and more...",
    },
    {
      id: 2,
      name: "Basic To Advanced Computer Course for 6 months with certificate",
      href: "",
      price: "Only in ₹ 999/-",
      imageSrc: "/avatars/computercourse.jpg",
      imageAlt:
        "COURSE CONTENT :- Introduction of Computer, Microsoft Word, Microsoft Excel, Basic Knowledge Basic Formula,Data Entry Excel, All Tab Tutorial, Advanced Excel Microsoft Powerpoint, Browsing Graphic Designing, Video Editing and more...",
      name: "Basic To Advanced Computer Course for 6 months with certificate",
      href: "https://www.course.spokenenglish.guru/?udref=59322",
      price: "Only in ₹ 999/-",
      imageSrc: "/avatars/computercourse.jpg",
      imageAlt:
        "COURSE CONTENT :- Introduction of Computer, Microsoft Word, Microsoft Excel, Basic Knowledge Basic Formula, Data Entry Excel, All Tab Tutorial, Advanced Excel Microsoft PowerPoint, Browsing Graphic Designing, Video Editing and more...",
    },
    {
      id: 3,
      name: "Online Blogging Course for 6 months with certificate",
      href: "",
      price: "Only in ₹ 490/-",
      imageSrc: "/avatars/bloggingcourse.jpg",
      imageAlt:
        "COURSE CONTENT :- Choose a Blogging Niche,Get Domain,Get Server Hosting,Install theme,Install plugin,Add IMP Pages in Your Website,Add Category,Create Menus (With 6 Months of Free Technical Support Over the Call more...",
      name: "Online Blogging Course for 6 months with certificate",
      href: "https://www.course.spokenenglish.guru/?udref=59322",
      price: "Only in ₹ 490/-",
      imageSrc: "/avatars/bloggingcourse.jpg",
      imageAlt:
        "COURSE CONTENT :- Choose a Blogging Niche, Get Domain, Get Server Hosting, Install theme, Install plugin, Add IMP Pages in Your Website, Add Category, Create Menus (With 6 Months of Free Technical Support Over the Call more...",
    },
    {
      id: 4,
      name: "Audio Book of Daily Use Sentensec (17+ hours of Audio)",
      href: "",
      price: "Only in ₹ 999/-",
      imageSrc: "/avatars/dailyuseaudio.jpg",
      imageAlt:
        "COURSE CONTENT :- Daily Use English Sentences - Audio Book + English Vocabulary - Audio Book & Free PDF E-book, 15000+ sentences with life time access",
      name: "Audio Book of Daily Use Sentences (17+ hours of Audio)",
      href: "https://www.course.spokenenglish.guru/?udref=59322",
      price: "Only in ₹ 999/-",
      imageSrc: "/avatars/dailyuseaudio.jpg",
      imageAlt:
        "COURSE CONTENT :- Daily Use English Sentences - Audio Book + English Vocabulary - Audio Book & Free PDF E-book, 15000+ sentences with lifetime access",
    },
  ];

  

  return (
    <div className="bg-gray-900 w-full min-h-screen text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-6xl lg:px-1">
        <h2 className="text-center text-2xl font-semibold text-white">
          <span className="relative inline-block pb-1">
            Our Courses
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
          </span>
        </h2>
        <br></br>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-6xl lg:px-1">
        <h2 className="text-center text-2xl font-semibold text-white">
          <span className="relative inline-block pb-1">
            Our Courses
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
          </span>
        </h2>
        <br />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                width={300}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <span className="flex justify-center gap-2 mt-2">
                <FaStar className=" text-yellow-400" />
                <FaStar className=" text-yellow-400" />
                <FaStar className=" text-yellow-400" />
                <FaStar className=" text-yellow-400" />
                <FaStarHalf className=" text-yellow-400" />
                <span className="text-white-900 text-sm">(4.5)</span>
              </span>
              <h3 className="mt-2 text-md font-semibold text-white-700">
                {product.name}
              </h3>
              <p className="mt-1 text-md font-bold text-white-900">
                {product.price}
              </p>
              <p className="mt-1 text-sm font-semibold text-green-300">
                {product.imageAlt}
              </p>
              <button
                className="inline-block mt-2 rounded-md border border-transparent bg-indigo-600 px-7 py-2 text-center font-medium text-white hover:bg-indigo-700"
                onClick={() =>
                  (window.location.href = "https://www.spokenenglish.guru/")
                }
              >
                Buy Now
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              rel="noreferrer"
              target="_blank"
              className="group flex flex-col h-full bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <div className="flex justify-center gap-2 mt-2">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStarHalf className="text-yellow-400" />
                  <span className="text-white-900 text-sm">(4.5)</span>
                </div>
                <h3 className="mt-2 text-md font-semibold">{product.name}</h3>
                <p className="mt-1 text-md font-bold text-white">
                  {product.price}
                </p>
                <p className="mt-1 text-sm font-semibold text-green-300">
                  {product.imageAlt}
                </p>
              </div>
              <button className="mt-2 w-full rounded-md bg-indigo-600 px-4 py-2 text-center font-medium text-white hover:bg-indigo-700">
                Buy Now
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default showpdf;

export default showpdf;
