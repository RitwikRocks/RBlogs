import React, {useState, useEffect} from 'react';
import {Input, Button } from '../index'
import { useSelector } from 'react-redux';


import Paper from '@mui/material/Paper';


function Support() {
  const themeType = useSelector((state)=> state.theme.themeType);
  const [textColor, setTextColor]= useState("text-black");
  const[hoverColor, setHoverColor] = useState("hover:bg-zinc-800");
  const[backgroundColor, setBackgroundColor] = useState("bg-white");

  useEffect(()=>{
     if(themeType=="light")
     {
      setTextColor("text-black");
      setHoverColor("hover:bg-rose-500")
      setBackgroundColor("bg-slate-100");
      
     }else{
      setTextColor("text-slate-300");
      setHoverColor("hover:bg-zinc-500")
      setBackgroundColor("bg-stone-900");
     }
  },[themeType]);
  
  return (
    
    <section className={`flex items-center justify-center w-full p-10 ${textColor}`}>
       <Paper elevation={12}>
    <div className={`mx-auto w-full max-w-lg ${backgroundColor} rounded-xl p-10`}>
      <h1 className={`text-center ${textColor} text-3xl font-bold leading-tight`}>Get In Touch</h1>
      <h2 className="text-center text-lg py-2 font-thin leading-tight">Contact Admin</h2>
      <p className="mt-2 text-center  ">
        If you are facing any difficulty or have forgotten password Write Your Query here.
      </p>
    
    <form className="mt-8">
      <div className="space-y-5">
        <label htmlFor="first-name" className="mb-4">
          <span className="text-md">First Name  </span>
          <Input
            type="text"
            className="bg-slate-300"
            name="first-name"
            id="first-name"
            required
          />
        </label>
        <label htmlFor="last-name" className="contact--label">
          <span className="text-md">Last Name</span>
          <Input
            type="text"
            className="mb-4 bg-slate-300"
            name="last-name"
            id="last-name"
            required
          />
        </label>
        <label htmlFor="email" className="contact--label">
          <span className="text-md">Email</span>
          <Input
            type="email"
           className="mb-4 bg-slate-300"
            name="email"
            id="email"
            required
          />
        </label>
        <label htmlFor="phone-number" className="contact--label">
          <span className="text-md">phone-number</span>
          <Input
            type="number"
            className="mb-4 bg-slate-300"
            name="phone-number"
            id="phone-number"
            required
          />
        </label>
      </div>
      <label htmlFor="choose-topic" className="contact--label">
        <span className="font-bold">Choose a topic:  </span>
        <t/>
        <select id="choose-topic" className={`mb-4 bg-slate-300 text-black`}>
          <option>Select One...</option>
          <option>Forgot Password</option>
          <option>Inappropriate Post</option>
          <option>Not able to Post</option>
          <option>Others</option>
        </select>
      </label>
      <br/>
      <label htmlFor="message" className="font-medium">
        <span className="text-md">Message</span>
      <br/>
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-slate-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="message"
          rows="8"
          placeholder="Type your message..."
        />
      <br/>
      </label>
      <label htmlFor="checkboc" className="checkbox--label">
        <input type="checkbox" required name="checkbox" id="checkbox" className="border-2 border-black"/>
        <span className="text-sm font-bold px-3">I accept the terms</span>
      </label>
      <div>
        <Button className="w-full ${buttonColor} hover:text-blue-800">Submit</Button>
      </div>
    </form>
    </div>
    </Paper>
  </section>
  );
}

export default Support;
