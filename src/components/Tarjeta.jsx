
import '../tarjeta.css'
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Tarjeta = ({ page }) => {

    return (
        <div className = "main">

            <div className = "contenedor-foto">
                <img src = {page.foto} alt = {`Imagen pagina ${page.nombre}`} width = "100%" className = "foto" /> 
            </div>
           

            <h1 className = 'nombre'> { page.nombre } </h1>

            <p className = 'texto'> { page.texto } </p>
            <p className = 'tech'> { page.tech } </p>

            <div className = 'webs'>
                <a href = {page.url} className = "direccion" rel = "" target = "_blank" > <FaExternalLinkAlt/> View Page</a>
                <a href = {page.codigo} className = "direccion" rel = "" target = "_blank" > <FiGithub /> Check Code</a>
            </div>
        </div>
    )
}

export default Tarjeta
