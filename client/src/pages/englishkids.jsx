'use client';
import Link from 'next/link';
import {
  FaBookOpen,
  FaCalendar,
  FaCalendarCheck,
  FaDog,
  FaTwitter,
  FaSpa,
  FaSeedling,
  FaPalette,
  FaSquare,
  FaUser,
  FaBus,
  FaBook,
  FaLayerGroup,
  FaExchangeAlt,
} from 'react-icons/fa';
import { MdFormatListNumbered } from 'react-icons/md';

export default function EnglishKids() {
  const links = [
    { href: '/alphabet?topic=abc', label: 'Learn ABC', icon: <FaBookOpen/>, bg: 'bg-red-500' },
    { href: '/alphabet?topic=days', label: 'Days Name ( दिनों के नाम )', icon: <FaCalendar />, bg: 'bg-green-500' },
    { href: '/alphabet?topic=months', label: 'Months Name ( महीनों के नाम )', icon: <FaCalendarCheck />, bg: 'bg-blue-500' },
    { href: '/alphabet?topic=wildAnimals', label: 'Wild Animals ( जंगली जानवरों के नाम )', icon: <FaDog />, bg: 'bg-yellow-500' },
    { href: '/alphabet?topic=domesticAnimals', label: 'Domestic Animals ( पालतू जानवरों के नाम  )', icon: <FaDog />, bg: 'bg-purple-500' },
    { href: '/alphabet?topic=birds', label: 'Birds Name ( पक्षियों के नाम )', icon: <FaTwitter />, bg: 'bg-orange-500' },
    { href: '/alphabet?topic=flowers', label: 'Flowers Name ( फूलों का नाम )', icon: <FaSpa />, bg: 'bg-teal-500' },
    { href: '/alphabet?topic=vegetables', label: 'Vegetables Name ( सब्जियों का नाम )', icon: <FaSeedling />, bg: 'bg-pink-500' },
    { href: '/alphabet?topic=colors', label: 'Colours Name ( रंगों के नाम )', icon: <FaPalette />, bg: 'bg-indigo-500' },
    { href: '/alphabet?topic=bodyParts', label: 'Parts Of Body ( शरीर के अंगों के नाम )', icon: <FaUser />, bg: 'bg-lime-500' },
    { href: '/alphabet?topic=transports', label: 'Transports Name ( परिवहन के नाम )', icon: <FaBus />, bg: 'bg-cyan-500' },
    { href: '/alphabet?topic=shapes', label: 'Shapes Name ( आकृतियों के नाम )', icon: <FaSquare />, bg: 'bg-amber-500' },
    { href: '/alphabet?topic=dailyRoutine', label: 'Daily Routine Words ( दैनिक दिनचर्या )', icon: <FaBook />, bg: 'bg-rose-500' },
    { href: '/alphabet?topic=familyMembers', label: 'Family Members ( परिवार के सदस्य के नाम )', icon: <FaLayerGroup />, bg: 'bg-fuchsia-500' },
    { href: '/alphabet?topic=oppositeWords', label: 'Opposite Words ( विपरीत शब्द )', icon: <FaExchangeAlt />, bg: 'bg-sky-500' },
    { href: '/alphabet?topic=numbers', label: 'Numbers (1-100) संख्याएँ (1-100)', icon: <MdFormatListNumbered />, bg: 'bg-violet-500' },
  ];

  return (
    <div className="h-[100vh] w-full bg-black flex flex-col items-center overflow-auto custom-scrollbar p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-5xl">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`flex flex-col items-center justify-center p-4 text-white font-bold text-center rounded-lg shadow-md hover:opacity-80 transition-all duration-300 ${link.bg}`}
          >
            <span className="text-2xl mb-2">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}