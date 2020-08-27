import React from 'react'
import MyPost from './MyPost/MyPost'
import ProfileStyle from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){

    

    return <div className={ProfileStyle.content}>
    <div className={ProfileStyle.content_img}>
    

    </div>
    
    <ProfileInfo />
    <MyPost list="Posteri cucak" posts={props.posts} />
    
</div>
}

export default Profile;