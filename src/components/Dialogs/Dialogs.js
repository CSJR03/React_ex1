import React from 'react'
import DialogsStyle from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogsMessanger from './DialogsMessanger/DialogsMessanger'
import DialogsItem from './DialogsItem/DialogsItem'





function Dialogs(){

let dialogsData = [
    {id:1,name:"Karen"},
    {id:2,name:"Lilit"},
    {id:3,name:"Narek"}
]
let DialogsMessage=[
    {message:"Hi"},
    {message:"How are you"},
    {message:"Hpoxer tur ara"}

]

let DataElements = dialogsData.map(

    d =>{
        return   <DialogsItem id={d.id} name={d.name} />
    }

)

let MessageElements = DialogsMessage.map(

    d =>{
        return     <DialogsMessanger message={d.message}/>
    }

)

return <div className={DialogsStyle.content} >
    
  <div className={DialogsStyle.parent}>

      <div className={DialogsStyle.dialogs}>
      
        {DataElements}
          
         
      </div>
      <div className={DialogsStyle.messagers}>
     {MessageElements}
   
          
      </div>
  </div>
    
    </div>
}
export default Dialogs