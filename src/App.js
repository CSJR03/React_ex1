import React from "react";
import Header from "./components/Header/Header"

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import { Route, BrowserRouter } from "react-router-dom";



function App(demo) {

 

    return <BrowserRouter>

    <div className="container">
<Header />
    
<section className="parent">
    <Navbar />
     
    <Route path="/Profile" render={()=><Profile posts={demo.posts} />} />
    <Route path="/Dialogs" component={Dialogs} />

</section>


    </div>
    </BrowserRouter>
}

export default App;