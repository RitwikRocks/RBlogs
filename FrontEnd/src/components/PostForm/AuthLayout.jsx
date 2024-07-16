import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(() => {
        
        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
           
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? 
  <div className="bg-black w-full h-screen">
  <div className='absolute inset-0 w-4 h-4 mx-auto my-auto'>
  <Box sx={{ height:340}}>
      <CircularProgress />
    </Box>
 </div>
  </div>
  : <>{children}</>
}