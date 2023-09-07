import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Slider from './components/Slider'
import mortalkombatImage from './components/imagenes/mortalkombat1.jpg';
import fifa24 from './components/imagenes/fifa24.jpg';
import eternights from './components/imagenes/eternights.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const datosApp = {
    opcionesMenu: ["Inicio", "Productos", "Promociones", "Noticias"],
    opcionesFooter: ["Contactanos", "Tiendas", "Ayuda", "Reportar un problema"],
    imagenesHero: [
      {
        "image": mortalkombatImage,
        "title": "Imagen 1",
        "subTitle": "Parrafo",
        "interval": 1500
      },
      {
        "image": fifa24,
        "title": "Imagen 2",
        "subTitle": "Parrafo",
        "interval": 1500
      },
      {
        "image": eternights,
        "title": "Imagen 3",
        "subTitle": "Parrafo",
        "interval": 1500
      }

    ]
  }

  return (
    <div>

      <NavBar
        opciones={datosApp.opcionesMenu} />

      <Slider
        imagenesHero={datosApp.imagenesHero}
      />

      <Footer
        opciones={datosApp.opcionesFooter} />
    </div>

  )



}

export default App
