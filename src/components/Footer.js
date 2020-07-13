import React from 'react'
/* import { Link } from 'react-router-dom' */
import './Styles/Footer.css'

function Footer() {
  return(
    <footer className="footer">
      <div className="social">
        <a className="social__media twitter" href="#"></a>
        <a className="social__media facebook" href="#"></a>
        <a className="social__media spotify" href="#"></a>
        <a className="social__media youtube" href="#"></a>
      </div>
      <div className="copyrigth">
          <p>©2012. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer;