import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, SetLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            SetLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            SetLoading(false)
            setPost({})
            setError('Something Went Wrong')
        })
    },[])
  return (
    <div>
        {loading ? 'Loading.....':post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne