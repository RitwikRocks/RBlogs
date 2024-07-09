import { useState, useEffect } from "react"
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth";
import { Footer, Header } from "./components";

function App() {
  const [loading,setLoading]  = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading?(
    <>
    <div className="text-green-500 text-5xl bg-rose-400">This is a Blog for Blog</div>
    <Header/>
    <Footer/>
    </>
  ):null;
}

export default App
