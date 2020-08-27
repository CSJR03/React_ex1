import React from 'react'
import PostStyle from './Post.module.css'

function Post(props){
return <div>{props.post} - Like {props.like}</div>
}

export default Post