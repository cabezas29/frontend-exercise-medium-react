import React from 'react'
import './Styles/Final.css'
import Gatico from '../assets/final.jpg'

function Final() {
  return(
    <div>
      <section className="contenido__inicio--intermedio">
        <article className="contenido--articulos">
          <div className="contenido--encabazados">
            <h5>El 29 de octubre de 2012</h5>
            <p className="descripcion"> Por <span>Ernesto G. Bustamante</span></p>
            <small>3 comentarios</small>
          </div>
          <div className="contenido--descripcion">
            <h3 className="title__descripcion">Las bondades de HTML5</h3>
            <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi quibusdam sequi, commodi dolorum pariatur aut officiis repellendus cumque molestias nesciunt quas. Ipsa sunt nostrum ipsum dicta architecto, excepturi adipisci?</p>
            {/* <a hrefName="#">Leer más</a> */}
          </div>
        </article>
          <hr className="contenido--linea" />
        <article class="contenido--articulos">
          <div class="contenido--encabazados">
            <h5>El 28 de octubre de 2012</h5>
            <p class="descripcion">Por <span>Ernesto G. Bustamante</span></p>
            <small>3 comentarios</small>
          </div>
          <div className="contenido--descripcion">
            <h3 className="title__descripcion">HTML5 en dispositivos móviles</h3>
              <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi quibusdam sequi, commodi dolorum pariatur aut officiis repellendus cumque molestias nesciunt quas. Ipsa sunt nostrum ipsum dicta architecto, excepturi adipisci?</p>
              {/* <a href="#">Leer más</a> */}
          </div>
        </article>
          <hr className="contenido--linea" />
        <article class="contenido--articulos">
          <div class="contenido--encabazados">
            <h5>El 27 de octubre de 2012</h5>
            <p class="descripcion">Por <span>Ernesto G. Bustamante</span></p>
            <small>3 comentarios</small>
          </div>
          <div class="contenido--descripcion">
            <h3 class="title__descripcion">Internet Explorer es una basura</h3>
            <p class="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi quibusdam sequi, commodi dolorum pariatur aut officiis repellendus cumque molestias nesciunt quas. Ipsa sunt nostrum ipsum dicta architecto, excepturi adipisci?</p>
            {/* <a href="#">Leer más</a> */}
          </div>
        </article>
          <hr className="contenido--linea" />
        <article className="contenido--articulos">
          <div className="contenido--encabazados">
          <h5>El 26 de octubre de 2012</h5>
          <p className="descripcion">Por <span>Ernesto G. Bustamante</span></p>
          <small>3 comentarios</small>
          </div>
          <div className="contenido--descripcion">
            <h3 className="title__descripcion">Diseño web en pantallas retina</h3>
            <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi quibusdam sequi, commodi dolorum pariatur aut officiis repellendus cumque molestias nesciunt quas. Ipsa sunt nostrum ipsum dicta architecto, excepturi adipisci?</p>
            {/* <a href="#">Leer más</a> */}
          </div>
        </article>
      </section>
      <section className="contenido__final">
          <img src={Gatico} alt="" />
        <div>
          <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi voluptate cupiditate tempore iusto, ullam numquam ipsum cumque, eligendi placeat, voluptatibus distinctio magni autem perferendis aut officiis porro officia consectetur?</p>
        </div>
      </section>
    </div>
  )
}

export default Final;