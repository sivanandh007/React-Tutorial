import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post , setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClcik,setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClcik}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromButtonClcik])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

  return (
    <div>
        <input type='text'
        value={id}
        onChange={e => setId(e.target.value)}/>
        <button onClick={handleClick}>Fetch Me</button>
        <div>{post.title}</div>
        {/* <ul>
            {
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul> */}
    </div>
  )
}

export default DataFetching