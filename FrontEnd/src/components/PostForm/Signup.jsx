import React, {useState, useEffect} from 'react'
import authService from '../../appwrite/auth.js'
import {Link ,useNavigate} from 'react-router-dom'
import { login } from '../../features/authSlice.js'
import {Button, Input} from "../index.js"
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const themeType = useSelector((state)=> state.theme.themeType)
    const [theme,setTheme] = useState("bg-stone-800");
    const [textColor, setTextColor] = useState("text-white");
    const [buttonColor, setButtonColor] = useState("bg-blue");

    const create = async(data) => {
        setError("")
        let [name,email,password]= [data.name,data.email,data.password]
        if(name==="" || email==="" || password=="")
        {
            setError("All fields are required");
            return;
        }
        if(!email.includes("rblogs.com"))
        {
            setError("Email must includes 'rblogs.com' ");
            return;
        }
        if(password.length<8)
        {
            setError("Password Must be Atleast 8 characters long");
            return;
        }
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }else{
                setError("Something went Wrong. Please Try after Sometime.");
            }
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(()=>{
        if(themeType=="dark"){
         setTheme("zinc-900")
         setTextColor("text-gray-50")
         setButtonColor("bg-gray-800")
        }else{
         setTheme("amber-400")
         setTextColor("text-gray-900")
         setButtonColor("bg-blue")
        }
     },[themeType])

  return (
    <div className="flex items-center justify-center">
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 480,
          height: 520,
        },
      }}
    >
      <Paper elevation={12}>
            <div className={`mx-auto w-full max-w-lg bg-${theme} rounded-xl p-10 `}>
            <div className="mb-2 flex justify-center">
                    {/* <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span> */}
                </div>
                <h2 className={`${textColor} text-center text-2xl font-bold leading-tight`}>Sign up to create account</h2>
                <p className={`mt-2 text-center text-base ${textColor}`}>
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        defaultValue="@rblogs.com"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button type="submit" className={`w-full ${buttonColor}`}>
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </Paper>
        </Box>
    </div>
  )
}

export default Signup