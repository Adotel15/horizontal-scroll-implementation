
import "../index.css"

const LateralCard = ({ carta }) => {

    return (
        <div className = "lateral">
            <h1> { carta.nombre } </h1>
            <a href = {carta.url}> View App </a>
            <a href = {carta.codigo}> Check Code</a>
        </div>
    )
}

export default LateralCard
