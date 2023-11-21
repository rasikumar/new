'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
{useTheme}
export default function DarkModeSwitch() {
    const {sysTheme,theme, setTheme} = useTheme();
    const [ mounted ,setMounted ]= useState(false);

    useEffect(()=> setMounted(true),[]);

    const currentTheme = theme === "system" ? setTheme : theme;

  return (
    <div className='flex m-3 gap-5'>
        {mounted && currentTheme === "dark" ? (   
            <MdNightlight className="text-xl cursor-pointer hover:text-amber-500" onClick={()=> setTheme("light")}/>
            ):(
            <CiLight className="text-xl cursor-pointer hover:text-amber-500" onClick={()=> setTheme("dark")}/>
                )}
    </div>
  )
}
