
import "../index.css"
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

const CenterCard = ({ carta }) => {

    return (
            <div className = "centro">

                <div className = "imagen">
                    <img src = { `/${carta.foto}` } height = "100%" width = "100%" alt = {`Foto de ${carta.nombre}`} />
                </div>
                

                <div className = "raton">
                    <h1> { carta.nombre } </h1>
                    <div className = "app">
                        <p> { carta.texto } </p>
                        <p> <span>Technologies: </span> { carta.tech } </p>
                    </div>

                    <div className = "enlaces">
                        <a href = {carta.url} target = "_blank" > <FaExternalLinkAlt/> View App </a>
                        <a href = {carta.codigo} target = "_blank" > <FiGithub /> Check Code</a>
                    </div>
                </div>
            </div>
    )
}

export default CenterCard
