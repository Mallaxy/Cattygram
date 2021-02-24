import React from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="main">
                    <Header/>
                    <div className="center">
                        <Sidebar/>
                        <div className="page">
                            <Profile/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App;
