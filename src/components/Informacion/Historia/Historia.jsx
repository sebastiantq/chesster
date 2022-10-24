import React from "react";

import Footer from "../../Footer";
import "./Historia.css";

function Historia() {
  return (
    <div className="historiaPage">
      <div className="historiaPage-IMG">
        <div className="titulo">
          <h1>Origen</h1>
        </div>
      </div>
      <div className="historiaPage-info">
        <div className="left-info">
          <h1>El Juego De La Guerra</h1>
          <p className="introduction-info">
            A lo largo de sus casi 1.500 años de historia, el ajedrez ha dado
            lugar a una gran variedad de juegos y modos de jugar: desde un
            simple pasatiempo hasta un deporte intelectual con grandes sumas de
            dinero en juego.
          </p>
          <hr />
          <div className="img-indo-div">
            <img
              src={"/ValleDelIndo.jpeg"}
              alt={"valle"}
              className="img-valley"
            />
            <p>
              Se estima que el ajedrez se originó en las planicies del valle del
              Indo | Foto tomada él {new Date().getDate()}/
              {new Date().getMonth()}/{new Date().getFullYear()}{" "}
            </p>
          </div>
          <div className="div-paragraph-info">
            <h1>La leyenda del Libro de los Reyes</h1>
            <p className="info-p">
              "Un día, un embajador del rey de Hind llegó a la corte persa de
              Cosroes, y después de un intercambio de cortesías, sacó ricos
              regalos de su soberano y entre ellos había un tablero elaborado
              con piezas de ébano y marfil curiosamente talladas. Luego lanzó un
              desafío: 'Oh gran rey, llama a tus sabios y haz que resuelvan los
              misterios de este juego. Si tienen éxito, mi amo el rey de Hind te
              pagará tributo como señor supremo, pero si fallan será una prueba
              de que los persas tienen un intelecto inferior y exigiremos
              tributo a Irán'”.{" "}
            </p>
            <p className="info-p">
              Este fragmento del poema épico persa Shahnameh (“Libro de los
              reyes”) es la primera mención conocida del origen del ajedrez.
              Según su autor, el poeta Fedrousí, el juego se había originado en
              el siglo VI a raíz de una disputa por el trono de Hind (India)
              entre los hermanos Gav y Talhand: el segundo había muerto en
              batalla y su madre, disgustada, recriminó a Gav que hubiera matado
              a su hermano. Este negó haberlo hecho y, para probar su inocencia,
              recreó la batalla usando piezas de marfil que representaban las
              cuatro unidades de combate del ejército: la infantería, la
              caballería, los elefantes y los carros.
            </p>
            <hr />
            <div className="curios-data-div">
              <p className="comilla-p">"</p>
              <p className="curious-data">
                Existen más de 200 tipos de piezas de ajedrez. Estas reflejan la
                tradición militar de cada lugar
              </p>
            </div>
            <hr />
            <p className="info-p">
              Fuera cierta o no la leyenda que narra Fedrousí, sí se sabe que el
              ajedrez tiene su origen en el juego que describe: el chaturanga,
              cuyo nombre significa “cuatro divisiones” en referencia a las
              cuatro piezas que simbolizan las unidades del ejército indio.
              Estas son las más antiguas del juego y corresponden a los actuales
              peones (para la infantería), caballos (caballería), alfiles
              (elefantes) y torres (carros) de la versión moderna del juego.
            </p>
            <div className="img-indo-div">
              <img src={"/reglas2.jpg"} alt={"reglas"} className="img-valley" />
              <p>
                Existen más de 20 formas de jugar ajedrez, ¿las conoces? | Foto
                tomada él {new Date().getDate()}/{new Date().getMonth()}/
                {new Date().getFullYear()}{" "}
              </p>
            </div>
            <p className="info-p">
                La razón de esta gran diversidad se puede atribuir en parte a
                las grandes rutas comerciales euroasiáticas (principalmente la
                Ruta de la Seda) y en parte a los imperios musulmanes de la Edad
                Media. Los árabes adoptaron muchas costumbres persas, entre
                ellas este juego que se había vuelto popular en la corte del
                Imperio Sasánida, y lo extendieron por Europa y por Asia. Del
                persa procede también la expresión shah mat, “el rey está
                acabado”: lo que conocemos como checkmate o jaque mate.{" "}
              </p>
            
            <p className="copyright-p"><strong>
                Texto tomado de National Geographic.
                Esta página sin fines de lucro, no será distrubuida y será de uso 
                personal
                </strong>  
              </p>
          </div>
        </div>
        <div className="right-info">
          <h1>Arte</h1>
          <div className="img-right-div">
            <img src={"/primercampeonato.jpg"} alt={"first"} className="img-right"></img>
            <p className="img-description">Primer campeonato mundial de ajedrez, 1886</p>
          </div>
          <div className="img-right-div">
            <img src={"/primercampeon.png"} alt={"first"} className="img-right"></img>
            <p className="img-description">Primer Campeón mundial de ajedrez, Wilhelm Steinitz 1836-1900</p>
          </div>
          <div className="img-right-div">
            <img src={"/imperio-gupta.jpg"} alt={"first"} className="img-right"></img>
            <p className="img-description">Se teoriza que es de origen Indú</p>
          </div>
          <div className="img-right-div">
            <img src={"/persas.jpg"} alt={"first"} className="img-right"></img>
            <p className="img-description">Partida de ajedrez en la corte persa</p>
          </div>
          <div className="img-right-div">
            <img src={"/war2chess.jpg"} alt={"first"} className="img-right"></img>
            <p className="img-description">Soldados en la segunda guerra mundial</p>
          </div>
          <div className="img-right-div">
            <img src={"/gambito.jpg"} alt={"first"} className="img-right"></img>
            <p className="img-description">El ajedrez ha inspirado hasta series y películas</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Historia;
