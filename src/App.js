import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="container">
                    <div className="main">
                        <Header/>
                        <Sidebar/>
                        <div className="page">
                            <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                            <Route path='/messages' render={() => <Messages state={props.state.dialogsPage}/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
