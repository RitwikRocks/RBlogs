import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./features/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [loading, setLoading] = useState(true)
  
  const dispatch = useDispatch()
  const themeType = useSelector((state)=> state.theme.themeType)
  const [themeColor,setThemeColor] = useState("bg-stone-800");
  
  const dark = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const light = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const [themeName, setThemeName] = useState(light);
 
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  const colorPallete = ["bg-rose-200","bg-slate-200","bg-sky-200","bg-purple-100","bg-teal-100","bg-green-100","bg-lime-100","bg-yellow-100","bg-amber-100"];
  useEffect(()=>{
    if(themeType=="light"){
      setThemeColor(colorPallete[Math.floor(Math.random()*colorPallete.length)])
    //setThemeColor("bg-gradient-to-r from-blue-100 to-rose-50")
      setThemeName(light);
    }else{
      setThemeColor("bg-stone-800")
      setThemeName(dark);
    };
  },[themeType])
  
  return !loading ? (
    <ThemeProvider theme={themeName}>
    <CssBaseline />
    <div className={`min-h-screen flex flex-wrap content-between ${themeColor}`}>
      <div className='w-full block'>
        <Header />
        <div className='border-none border-x-4 border-y-2 border-zinc-950 hover:border-solid rounded-sm'>
        <main>
        <Outlet />
        </main>
        </div>
        <div className='relative bottom-0 ' >
        <Footer theme={themeType}/> 
        </div>
              
      </div>
    </div>
    </ThemeProvider>
  ) :  
    <div className="bg-black w-full h-screen">
      <div className='absolute inset-0 w-4 h-4 mx-auto my-auto'>
      <Box sx={{ height:340}}>
          <CircularProgress />
        </Box>
     </div>
    </div>
     
      
}

export default App