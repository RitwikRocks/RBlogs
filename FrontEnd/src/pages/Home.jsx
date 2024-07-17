import React, {useEffect, useState} from 'react'
import  appwriteService from "../appwrite/configuration";
import { useSelector } from 'react-redux';
import {IMG1,IMG2,IMG3,IMG5,IMG6,IMG7,IMG8,IMG9,IMG10,IMG11} from "../Blog/index"
import Paper from '@mui/material/Paper';



  

function Home() {
    const [posts, setPosts] = useState([])
    const themeType = useSelector((state)=> state.theme.themeType)
    const [themeText,setThemeText] = useState("bg-stone-800");
    const [imageColor, setImageColor] = useState("");
    useEffect(()=>{
       if(themeType=="light"){
        setThemeText("black")
        setImageColor("");
       }else{
        setThemeText("white")
        setImageColor("grayscale")
       }
    },[themeType])
    const imgchoice = [IMG2,IMG3,IMG6,IMG7,IMG8,IMG9,IMG10,IMG11];
    const [image, setImage] = useState(IMG1);
    useEffect(() => {
        const interval = setInterval(() => {
            setImage(imgchoice[(Math.floor(Math.random()*imgchoice.length))]);
        }, 7000);
        return () => clearInterval(interval);
      }, []);
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
   
    if (posts.length === 0) {
        return (    
            <div className='w-full py-8 flex items-center justify-center  p-10'>
            <div className={`mx-auto w-full max-w-lg rounded-xl`}>
            <h1 className={`text-2xl font-bold px-28 hover:text-gray-500 text-${themeText}`}>
                    Login to read posts
                </h1>
            <h1 className="text-3xl font-bold leading-tight py-4 my-2">Publish your passions, your way</h1>
            <h2  className="text-lg font-bold leading-snug text-centery px-10">Create a unique and beautiful blog easily.</h2>
            </div>
            <br/>
            <div
  id="carouselExampleSlidesOnly"
  class="relative py-9"
  data-twe-carousel-init
  data-twe-ride="carousel">
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      className={`${imageColor}`}
      data-twe-carousel-item
      data-twe-carousel-active>
      <img
        src={image}
        className="object-fit:scale-down max-h-[500px]  drop-shadow-md rounded-md m-auto "
        alt="Blog" />
    </div>
  </div>
</div>
        </div>
        
        )
    }
    return (
        
        <div className='w-full py-8 flex items-center justify-center  p-10'>
            <div className={`mx-auto w-full max-w-lg rounded-xl`}>
            {/* <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container> */}
            <h1 className="text-3xl font-bold leading-tight py-4 my-2">Publish your passions, your way</h1>
            <h2  className="text-lg font-bold leading-snug text-centery">Create a unique and beautiful blog easily.</h2>
            </div>
            <br/>

            <div
  id="carouselExampleSlidesOnly"
  className="relative py-9"
  data-twe-carousel-init
  data-twe-ride="carousel">
  
      
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
        className={`${imageColor}`}
      data-twe-carousel-item
      data-twe-carousel-active>
      <img
        src={image}
        className="object-fill:scale-down max-h-[500px]  drop-shadow-md rounded-md m-auto"
        alt="Blog" />
    </div>
  </div>
  
</div>
        </div>
        
    )
}

export default Home
