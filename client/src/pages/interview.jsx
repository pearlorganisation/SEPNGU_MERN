'use client';
import Link from 'next/link';
import { FaLaptop, FaDesktop } from 'react-icons/fa';

export default function Interview() {
  const links = [
    { href: '/interviewans?topic=fresher', label: 'INTERVIEW QUESTIONS AND ANSWER FOR FRESHER', icon: <FaLaptop />, bg: 'bg-blue-500' },
    { href: '/interviewans?topic=experienced', label: 'INTERVIEW QUESTIONS AND ANSWER FOR EXPERIENCED', icon: <FaDesktop />, bg: 'bg-green-500' },
  ];

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`w-[200px] h-[200px] flex flex-col items-center justify-center p-4 text-white font-bold text-center rounded-lg shadow-md hover:opacity-80 transition-all duration-300 ${link.bg}`}
          >
            <span className="text-2xl mb-2">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}