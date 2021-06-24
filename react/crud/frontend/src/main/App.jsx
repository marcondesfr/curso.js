import './App.css'
import React from 'react'
import Logo from '../components/templats/Logo'
import Nav from '../components/templats/Nav'
import Main from '../components/templats/Main'
import Footer from '../components/templats/Footer'




export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>