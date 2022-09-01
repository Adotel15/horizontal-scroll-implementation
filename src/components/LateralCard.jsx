
import "../index.css"
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

const LateralCard = ({ carta }) => {

    return (
        <div className = "lateral">
            <h1> { carta.nombre } </h1>

            <div className = "app_lateral">
                <p> <span>App: </span> { carta.texto } </p>
                <p> <span>Technologies: </span> { carta.tech } </p>
            </div>

            <div className = "enlaces_lateral">
                <a href = {carta.url} target = "_blank" > <FaExternalLinkAlt/> View App </a>
                <a href = {carta.codigo} target = "_blank" > <FiGithub /> Check Code</a>
            </div>
        </div>
    )
}

export default LateralCard
