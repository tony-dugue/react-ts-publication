import React from "react";
import {PostData} from "../interfaces";
import './PostDetail.css';

interface PostDetailProps {
  post: PostData |  null
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="post">
      <h1>Publication numéro: {post?.id}</h1>
      <h2>Titre: {post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  )
}

export default PostDetail
