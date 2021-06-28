import './Nav.css'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Inicio
            </a>
            <a href="#/">
                <i className="fa fa-users"></i> Usuarios
            </a>
        </nav>
    </aside>