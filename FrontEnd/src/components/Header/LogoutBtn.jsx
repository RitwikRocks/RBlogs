import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../features/authSlice.js' 

const LogoutBtn = (classtext="",hovertext="") => {
    const dispatch = useDispatch();
  //  const [textColor, setTextColor] = useState("text-yellow-300");
    const logoutHandler= ()=>{
        authService.logout()
        .then( ()=>{
            dispatch(logout())
        })
        .catch((error)=>{
            console.log("Something went wrong in loginHandler ",error);
        })
    }
    let textColor=classtext?.classtext;
    let hoverColor=classtext?.hovertext;

    return (
    <button 
     className={`${textColor}  inline-bock px-6 py-2 duration-200 ${hoverColor} rounded-full`}
     onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn