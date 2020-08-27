import React from 'react'
import DialogsMessangerStyle from './DialogsMessanger.module.css'

function DialogsMessanger(props){
    return <div className={DialogsMessangerStyle.messager}>
   {props.message}
</div>
}

export default DialogsMessanger;