import React,{useEffect, useReducer} from 'react'
import axios from 'axios'

const intialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }

        default: return state
    }
}

function DataFetchinfTwo() {
    const [state,dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])

  return (
    <div>
        {state.loading ? 'Loading.....':state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchinfTwo