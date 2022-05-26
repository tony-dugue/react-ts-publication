import React from "react";
import { PostData } from "../interfaces";
import './postsList.css';
import {useNavigate} from "react-router-dom";

interface PostsListProps {
  allPosts: PostData[] | null
}

const Postslist: React.FC<PostsListProps>  = ({ allPosts }) => {

  const navigate = useNavigate()

  return (
    <ul className="posts">
      {allPosts?.map(post => (
        <li key={post.id} onClick={ () => navigate(`/${post.id}`)}>
          <h2>{post.title}</h2>
          <p>Lire l'article</p>
        </li>
      ))}
    </ul>
  )
}

export default Postslist
