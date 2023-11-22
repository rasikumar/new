"use client"
import React, { useEffect } from 'react'

export default function error({error, reset}) {
    useEffect(()=>{
        console.log(error);
    },[error]);

    return (
    <div className='text-center mt-10 '>
        <h1>something </h1>
        <button className='hover:text-amber-600' onClick={()=> reset()}>try aha</button>
    </div>
  )
}
