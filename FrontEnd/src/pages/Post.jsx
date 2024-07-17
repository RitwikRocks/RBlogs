import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import configuration from "../appwrite/configuration";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '../components/container/ContainerItem'


export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            configuration.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        configuration.deletePost(post.$id).then((status) => {
            if (status) {
                configuration.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
            <Box sx={{ borderColor: 'primary.main' }}>
      
    
            
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 ">
                    <img
                        src={configuration.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl  border-2 border-gray-300 w-3/5 h-3/5"

                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
                    <Paper elevation={3} />
                    </Box>
            </Container>
        </div>
    ) : null;
}