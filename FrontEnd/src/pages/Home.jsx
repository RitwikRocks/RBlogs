import React, {useEffect, useState} from 'react'
import  appwriteService from "../appwrite/configuration";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const themeType = useSelector((state)=> state.theme.themeType)
    const [themeText,setThemeText] = useState("bg-stone-800");
    useEffect(()=>{
       if(themeType=="light"){
        setThemeText("black")
       }else{
        setThemeText("white")
       }
    },[themeType])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className={`text-2xl font-bold hover:text-gray-500 text-${themeText}`}>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home