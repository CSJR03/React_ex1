import React from 'react'
import Post from './Post/Post'
import MyPostStyle from './MyPost.module.css'

const MyPost = (props) =>{

  

let MyPostElements = props.posts.map(

  demo =>{
    return <Post post={demo.post} like={demo.like} />
  }


)

    return <div className={MyPostStyle.MyPost}>
      <div className={MyPostStyle.post}>
    <textarea rows="7" cols="120"></textarea>
    <br />
    <button className={MyPostStyle.post_btn}>Submit</button>
</div>

<div className={MyPostStyle.Post_List}>
<h2>{props.list}</h2>
{MyPostElements}

</div>
</div>
}

export default MyPost;