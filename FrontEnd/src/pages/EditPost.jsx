import React, { useEffect, useState } from 'react'
import configuration from '../appwrite/configuration'
import { Container, PostForm } from '../components'
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditPost = () => {
  const [post,setPost] = useState(null);
  const {slug} = useParams();
  console.log(slug);
  const navigate = useNavigate();
  useEffect(()=>{
    if(slug){
        configuration.getPost(slug)
        .then((post)=>{
            if(post){
                setPost(post);
            }
        })
    }else{
        navigate("/");
    }
  },[slug,navigate])
  
  return post?(
    <div className='py-8 w-full'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ):null
}


export default EditPost