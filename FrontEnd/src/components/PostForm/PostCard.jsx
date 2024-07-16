import React from "react";
import { Link } from "react-router-dom";
import configuration from "../../appwrite/configuration";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full">
        <Card sx={{ maxWidth: 345 }} className="p-1">
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 180 }}
              image={configuration.getFilePreview(featuredImage)}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      {/* <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={configuration.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div> */}
    </Link>
  );
};

export default PostCard;
