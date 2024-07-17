import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import {
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";


function Footer(theme="light") {
  const themeType = theme.theme;
  const [footerColor, setFooterColor] = useState("bg-gray-500");
  const [hoverColor, setHoverColor] = useState("hover:bg-zinc-800");
  const [textColor, setTextColor] = useState("text-yellow-300");

  useEffect(()=>{
    if(themeType==='light'){
      setFooterColor("bg-gradient-to-r from-blue-700 via-violet-600 to-indigo-800")
      setHoverColor("hover:bg-rose-500")
      setTextColor("text-yellow-300");
    }
    else{
      setFooterColor("bg-stone-900")
      setHoverColor("hover:bg-zinc-500")
      setTextColor("text-white");
    }
    console.log(footerColor, theme);
 },[theme])


  return (
    <section className={`relative overflow-hidden  ${footerColor} border-2 border-black`}>
            <div className="relative z-6  px-7">
                <div className="-m-2 flex flex-wrap">
                    <div className="w-full p-2 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-2 inline-flex items-center py-3">
                                <Logo width="100px" />
                                <h1 className={`font-bold ${textColor} mx-20`}>RBLOGS</h1>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2024. All Rights Reserved by Ritwik Ranjan Pathak.
                                </p>
                            </div>
                        
                                
                        </div>
                    </div>
      
        <div className={`mb-2 ${textColor} inline-flex items-center py-3`}>
          <Link to="/about" className='px-2'>
          <button
                className={`inline-bock px-6 py-2 duration-200 ${hoverColor} rounded-full ${textColor}`}
          >About</button>
          </Link>
          <Link to="/support">
          <button
                className={`inline-bock px-6 py-2 duration-200 ${hoverColor} rounded-full ${textColor}`}
          >Support</button>
          </Link>
            
        </div>
        <div className='mb-2 inline-flex items-center py-2 px-56 right-0'>
        <a href="mailto:ritwikrocks26@gmail.com?Subject=This is a subject"  color="inherit" className='px-4'>
        <button
                className={`inline-bock duration-200 ${hoverColor} rounded-full ${textColor}`}
          > 
          <BiLogoGmail size={30} />
        </button>
        </a>
        <a href="https://github.com/RitwikRocks"  color="inherit" className='px-4'>
        <button
                className={`inline-bock duration-200 ${hoverColor} rounded-full ${textColor}`}
          >
            <FaGithubSquare size={30} />
        </button>
        </a>
        <a href="https://www.instagram.com/ritwik_rocks" color="inherit" className="px-3">
        <button
                className={`inline-bock duration-200 ${hoverColor} rounded-full ${textColor}`}
          >
            <FaInstagram size={30} />
        </button>
          
        </a>
          
        </div>
                </div>
            </div>
        </section>
  )
}

export default Footer