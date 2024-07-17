import React, { useEffect, useState } from 'react'
import  { LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeTheme } from '../../features/themeSlice'
import Logo from '../Logo'
import Container from '../container/ContainerItem'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



function  Header () {
  const authStatus =  useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const initTheme = useSelector((state)=> state.theme.themeType)
  const [theme, setTheme] = useState(initTheme||"light");
  const [headerColor, setHeaderColor] = useState("bg-gray-500");
  const [hoverColor, setHoverColor] = useState("hover:bg-zinc-800");
  const [textColor, setTextColor] = useState("text-yellow-300");


  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
 
   useEffect(()=>{
      if(theme=='light'){
        setHeaderColor("bg-gradient-to-r from-blue-700 via-violet-600 to-indigo-800")
        setHoverColor("hover:bg-rose-500")
        setTextColor("text-yellow-300");
        dispatch(changeTheme(theme));
      }
      else{
        setHeaderColor("bg-stone-900")
        setHoverColor("hover:bg-zinc-500")
        setTextColor("text-white");
        dispatch(changeTheme(theme));
      }

   },[theme])


  return (
    <header className={`py-3 shadow ${headerColor}`}>
      <Container>
        <nav className='flex'>
          <div className='mr-1'>
            <Link to='/'>
              <Logo />
              </Link>
          </div>
          <ul className='flex ml-auto py-1'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className={`inline-bock px-6 py-2 duration-200 ${hoverColor} rounded-full ${textColor}`}
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn classtext={textColor} hovertext={hoverColor} />
              </li>
            )}
          </ul>
          <button onClick={(e)=>{
            if(theme==='light'){
              setTheme("dark");
            }
            else{
              setTheme("light");
            }
          }}>{theme=="light"?<Brightness4Icon fontSize="large"/>:<Brightness7Icon fontSize="large"/>}</button>
        </nav>
        </Container>
    </header>
  )
}

export default Header