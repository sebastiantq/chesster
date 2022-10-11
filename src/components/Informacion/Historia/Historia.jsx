import React from 'react'

import Footer from '../../Footer'
import "./Historia.css"

function Historia() {
  return (
    <div className='historiaPage'>
      <div className='historiaPage-IMG'>
        <div className='titulo'>
        < h1>Origen</h1>
        </div>
      </div>
      <div className="historiaPage-info">
        <div className='left-info'>
          <h1>El Juego De La Guerra</h1>
          <p>"Podemos decir también que el ajedrez tiene su origen en la India, más concretamente en el valle del Indo, y data del siglo VI d.C. Originalmente conocido como Chaturanga, o juego del ejército, se difundió rápidamente por las rutas comerciales, llegó a Persia, y desde allí al Imperio bizantino, extendiéndose posteriormente por toda Asia."</p>
          <p>" El juego llegó a Europa entre los años 700 y 900, a través de la conquista musulmana de la península Ibérica. En las excavaciones de una sepultura vikinga hallada en la costa sur de Bretaña se encontró un juego de Ajedrez, y en la región francesa de los Vosgos se descubrieron unas piezas del siglo X, de origen escandinavo, que respondían al modelo árabe tradicional. Durante la edad media, las penínsulas Ibérica e Itálica eran las zonas donde más se practicaba. Se jugaba de acuerdo con las normas árabes (descritas en diversos tratados de los que fue traductor y adaptador el rey Alfonso X el Sabio), según las cuales la reina y el alfil son piezas relativamente débiles, que sólo pueden avanzar de casilla en casilla."</p>
        </div>
        <div className='right-info'>
          <h1>Arte</h1>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Historia