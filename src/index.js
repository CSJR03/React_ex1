import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let MyPostData = [
  {post:"Verjin lurer",like:"1"},
  {post:"Kim Kardashyan",like:"3"},
  {post:"Chempion Ligue",like:"5"},

]


ReactDOM.render(
 
    <App posts={MyPostData} />
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
