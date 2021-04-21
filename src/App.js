import React from 'react'
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="main">
                    <HeaderContainer />
                    <Sidebar/>
                    <div className="page">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                        <Route path='/messages' render={() => <MessagesContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/users' render={() => <UsersContainer />}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App;
