'use client';
import React from 'react'
import Link from 'next/link';
import {
  FaBookOpen,
} from 'react-icons/fa';


export default function novelpdf() {
   const links = [
      { href: '/pdfs/A-Journey-to-the-Centre-of-the-Earth.pdf', label: 'A Journey To The Centre Of The Earth', icon: <FaBookOpen/>, bg: 'bg-red-500' },
      { href: '/pdfs/A-Princess-of-Mars.pdf', label: 'A Princess Of Mars', icon: <FaBookOpen/>, bg: 'bg-green-500' },
      { href: '/pdfs/A-Series-of-Lessons-in-Raja-Yoga.pdf', label: 'A Series Of Lessons In Raja Yoga', icon:<FaBookOpen/>, bg: 'bg-blue-500' },
      { href: '/pdfs/A-Wonder-Book-and-Tanglewood-Tales.pdf', label: 'A Wonder Book And Tanglewood Tales', icon: <FaBookOpen/>, bg: 'bg-yellow-500' },
      { href: '/pdfs/Abraham-Lincoln-a-History----Volume-2.pdf', label: 'Abraham Lincoln a History Volume-2', icon: <FaBookOpen/>, bg: 'bg-purple-500' },
      { href: '/pdfs/Alexander-the-Great.pdf', label: 'Alexander The Great', icon: <FaBookOpen/>, bg: 'bg-orange-500' },
      { href: '/pdfs/All-Things-Are-Lights.pdf', label: 'All Things Are Lights', icon: <FaBookOpen/>, bg: 'bg-teal-500' },
      { href: '/pdfs/An-Antarctic-Mystery.pdf', label: 'An Antarctic Mystery.pdf', icon:<FaBookOpen/>, bg: 'bg-pink-500' },
      { href: '/pdfs/Arson-Plus.pdf', label: 'Arson Plus', icon: <FaBookOpen/>, bg: 'bg-indigo-500' },
      { href: '/pdfs/Beasts-of-Tarzan.pdf', label: 'Beasts Of Tarzan', icon: <FaBookOpen/>, bg: 'bg-lime-500' },
      { href: '/pdfs/Beauty-and-the-Beast.pdf', label: 'Beauty and the Beasst', icon: <FaBookOpen/>, bg: 'bg-cyan-500' },
      { href: '/pdfs/Business-Correspondence.pdf', label: 'Business Correspondence', icon: <FaBookOpen/>, bg: 'bg-amber-500' },
      { href: '/pdfs/Come-Out-of-the-Kitchen.pdf', label: 'Come Out of the Kitchen', icon: <FaBookOpen/>, bg: 'bg-rose-500' },
      { href: '/pdfs/Dark-Desire.pdf', label: 'Dark Desire', icon: <FaBookOpen/>, bg: 'bg-fuchsia-500' },
      { href: '/pdfs/For-the-Win.pdf', label: 'For the Win', icon: <FaBookOpen/>, bg: 'bg-sky-500' },
      { href: '/pdfs/Gitanjali.pdf', label: 'Gitanjali', icon: <FaBookOpen/>, bg: 'bg-violet-500' },
      {href: '/pdfs/Great-Expectations.pdf', label:'Great Expectations', icon:<FaBookOpen/>, bg:'bg-fuchsia-500'},
      {href: '/pdfs/Grimms-Fairy-Tales.pdf', label:'Grimms-Fairy-Tales', icon:<FaBookOpen/>, bg:'bg-red-500'},
      {href: '/pdfs/Key-Out-of-Time.pdf', label:'Key Out of Time', icon:<FaBookOpen/>, bg:'bg-green-500'},
      {href: '/pdfs/King-Solomons-Mines-.pdf', label:'King Solomons Mines', icon:<FaBookOpen/>, bg:'bg-blue-500'},
      {href: 'pdfs/Laughing-Last.pdf', label:'Laughing Last', icon:<FaBookOpen/>, bg:'bg-yellow-500'},
      {href: 'pdfs/Mademoiselle-At-Arms.pdf', label:'Mademoiselle At Arms', icon:<FaBookOpen/>, bg:'bg-purple-500'},
      {href: '/pdfs/Relativity---The-Special-and-General-Theory.pdf', label:'Relativity The Special and General Theory', icon:<FaBookOpen/>, bg:'bg-orange-500'},
      {href: '/pdfs/Robinson-Crusoe.pdf', label:'Ribinson Crusoe', icon:<FaBookOpen/>, bg:'bg-teal-500'},
      {href: '/pdfs/Sadies-Spirit.pdf', label:'Sadies Sprit', icon:<FaBookOpen/>, bg:'bg-pink-500'},
      {href: '/pdfs/Stuck-with-a-Billionaire.pdf', label:'Stuck with a Billionaire', icon:<FaBookOpen/>, bg:'bg-indigo-500'},
      {href: '/pdfs/Tales-of-the-Jazz-Age.pdf', label:'Tales-of the Jazz Age', icon:<FaBookOpen/>, bg:'bg-lime-500'},
      {href: '/pdfs/The-Adventure-of-the-Red-Circle.pdf', label:'The Adventure of the Red Circle', icon:<FaBookOpen/>, bg:'bg-cyan-500'},
      {href: '/pdfs/The-Adventures-of-Huckleberry-Finn.pdf', label:'The Adventures of Huckleberry Finn', icon:<FaBookOpen/>, bg:'bg-amber-500'},
      {href: '/pdfs/The-Age-of-Fable.pdf', label:'The Age of Fable', icon:<FaBookOpen/>, bg:'bg-rose-500'},
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
        </div><br></br>
        <span className='text-white text-xs'>All books are from Manybooks</span>
      </div>
    );
}
