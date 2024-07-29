import React, { useState , useEffect} from 'react'
import { login as authLogin } from '../../features/authSlice'
import {Input,Button} from '../index'
import {useDispatch, useSelector} from 'react-redux'
import authService from '../../appwrite/auth'
import {useForm} from 'react-hook-form'
import {useNavigate, Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const themeType = useSelector((state)=> state.theme.themeType)
    const [theme,setTheme] = useState("bg-stone-800");
    const [textColor, setTextColor] = useState("text-white");
    const [buttonColor, setButtonColor] = useState("bg-blue");
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


    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }else{
                setError("Your email or password is not Correct");
                
            }
        } catch (error) {
            setError("service is temporarily unavailable. we are sorry for the inconvenience")

        }
    }


  return (
    <div className='flex items-center justify-center w-full p-16 '>
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 480,
          height: 480,
        },
      }}
    >
      <Paper elevation={12}>
      

        <div className={`mx-auto w-full max-w-lg bg-${theme} rounded-xl p-10   `} >
        <div className="mb-2 flex justify-center">
                    {/* <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span> */}
        </div>
        <h2 className={`${textColor} text-center text-2xl font-bold leading-tight`}>Sign in to your account</h2>
        <p className={`mt-2 text-center  ${textColor}`}>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
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
                    required: true,
                })}
                />
                <Button
                type="submit"
                className={`w-full ${buttonColor} hover:text-blue-800`}
                >Sign in</Button>
            </div>
        </form>
        </div>
        </Paper>
        </Box>
    </div>
  )
}

export default Login