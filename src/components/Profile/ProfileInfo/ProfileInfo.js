import React from 'react'

import ProfileInfoStyle from './ProfileInfo.module.css'

function ProfileInfo(){
    return  <div className={ProfileInfoStyle.content_info}>
    <div className={ProfileInfoStyle.content_info_img}>
<img src="./user.png" />
    </div>
    <div className={ProfileInfoStyle.content_info_name}>
<h2>David Virabyan</h2>
<p>Unem 1.5 tarva porc</p>
<p>React developer</p>
    </div>
</div>
    

}

export default ProfileInfo;