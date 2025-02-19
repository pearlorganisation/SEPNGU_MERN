import React from 'react'
import { useRouter } from 'next/router'
import { FaPhone } from 'react-icons/fa';
function englishnews() {
  const router = useRouter();
  return (
    <div className="h-[100%] w-[100%] min-h-screen items-center bg-panel-header-background border-conversaxtion-border text-white sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-2xl font-semibold text-white-600">Oops!</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white-900 sm:text-3xl">
      The page is in progress...
      <div class="flex justify-center items-center mt-2">
  <span class="w-8 h-8 border-4 border-green-400 border-dotted border-t-transparent rounded-full animate-spin"></span>
</div>
</h1>
      <p className="mt-6 text-lg font-medium text-pretty text-white-500 sm:text-xl/8">
      क्षमा करें, प्रतीक्षा के लिए, हम अभी भी इस पेज पर काम कर रहे हैं और जल्द ही <b className='text-green-400'>ENGLISH NEWS & ENGLISH GAMES</b> पेज आपके लिए उपलब्ध होगा जहां से आप अंग्रेजी समाचार पढ़ सकते हैं, अंग्रेजी के GAMES खेल सकते हैं और अपनी अंग्रेजी में सुधार के साथ-साथ UP-TO-DATE रह सकते हैं। तब तक हमारे साथ बने रहें।
      </p>
      <div className="mt-10 flex items-center justify-center">
        <a href="" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-1xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Contact support +91 9760375308
           <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default englishnews