import './posts.css'

const Posts = () => {
  return (
    <div className="post-container">

      <h1>Page principale</h1>

      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="posts">Nombre de publication 5 </label>
        <input type="range" min={1} max={20} />
      </div>

    </div>
  )
}

export default Posts

