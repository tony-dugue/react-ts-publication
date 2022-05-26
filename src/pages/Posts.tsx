import React, { useEffect, useState } from "react";
import { PostData } from "../interfaces";
import './posts.css';
import Postslist from "../components/Postslist";


const Posts: React.FC = () => {

  const [allPosts, setAllPosts] = useState<PostData[] | null>(null)
  const [numberOfPosts, setNumberOfPosts] = useState<number>(5)

  useEffect(() => {
    const getPosts = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPosts}`)
      const data: PostData[] = await response.json()
      setAllPosts(data)
    }
    getPosts()
  }, [numberOfPosts]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPosts(+e.target.value)
  }

  return (
    <div className="post-container">

      <h1>Page principale</h1>

      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="posts">Nombre de publication {numberOfPosts} </label>
        <input type="range" min={1} max={20} onChange={onChange} />

        <Postslist allPosts={allPosts} />

      </div>

    </div>
  )
}

export default Posts

