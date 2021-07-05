import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import {HashRouter} from 'react-router-dom'//BrowserRouter do too
import Routes from './Routes'
import React from 'react'
import Logo from '../components/templats/Logo'
import Nav from '../components/templats/Nav'
import Footer from '../components/templats/Footer'




export default props => 
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>