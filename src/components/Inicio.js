import React from 'react'
import inicio from '../assets/inicio.jpg'
import './Styles/Inicio.css'

function Inicio() {
  return(
    <section className="contenido__inicio--principal">
      <div className="inicio--descripcion">
        <h4>Entrada destacada</h4>
        <h3 className="title__descripcion">Crea un sitio web usando HTML5</h3>
        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque incidunt velit magni dolorem cum. Suscipit sapiente soluta reiciendis, totam asperiores voluptatibus provident! Sit exercitationem esse odit, natus facilis aperiam!</p>
      </div>
      <figure>
        <img src={inicio} alt="Imagen de inicio" />
      </figure>
    </section>
  )
}

export default Inicio;
