
import "../index.css"

const CenterCard = ({ carta }) => {

    return (
        <div className = "centro">
            <h1> { carta.nombre } </h1>
            <a href = {carta.url} target = "_blank" > View App </a>
            <a href = {carta.codigo} target = "_blank" > Check Code</a>
        </div>
    )
}

export default CenterCard
