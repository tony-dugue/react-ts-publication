import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PostData} from "../interfaces";
import PostDetail from "../components/PostDetail";
import './post.css';

const Post = () => {

  type PostParams = {
    id: string
  }

  const { id } = useParams<PostParams>()

  const [ post, setPost ] = useState<PostData | null>(null)

  useEffect(() => {
    const getPost = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data: PostData = await response.json()
      setPost(data)
    }
    getPost()
  }, [id]);

  return (
    <div className="post-container">
      <h1>Détail de la publication</h1>
      <PostDetail post={post} />
    </div>
  )
}

export default Post












