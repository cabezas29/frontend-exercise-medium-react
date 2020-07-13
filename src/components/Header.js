import React from 'react'
import './Styles/Header.css'

function Header() {
  return(
    <header className="header">
        <article>
            <h1>Ejercicio Web</h1>
            <h3>Página creada con HTML5</h3>
        </article>
        <nav className="nav__menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Acerca de</a></li>
                <li><a href="/">Portafolio</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;