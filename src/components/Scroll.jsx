
import { useState, useEffect } from "react";
import "../index.css"
import LateralCard from "./LateralCard";
import CenterCard from "./CenterCard";

const Scroll = ({ array, longitud }) => {

    const[middle, setMiddle] = useState(Math.round(longitud / 2))

    const [izquierdo, setIzquierdo] = useState(true)
    const [derecho, setDerecho] = useState(true)
    const [previo, setPrevio] = useState(array[middle - 1])
    const [centro, setCentro] = useState(array[middle])
    const [posterior, setPosterior] = useState(array[middle + 1])

    useEffect(() => {

        if(middle === 0) {
            setPrevio({})
            setCentro(array[0])
            setPosterior(array[1])
            setIzquierdo(false)
        }

        else if (middle === longitud){
            setPrevio(array[longitud - 1])
            setCentro(array[longitud])
            setPosterior({})
            setDerecho(false)
        }

        else {
            setPrevio(array[middle - 1])
            setCentro(array[middle])
            setPosterior(array[middle + 1])
        }

    }, [middle])

    const handlePrevio = () => {

        if (middle === longitud) setDerecho(true)

        if (middle > 0) setMiddle(middle - 1)

        
    }

    const handlePosterior = () => {

        if(middle === 0) setIzquierdo(true) 

        if(middle < longitud) setMiddle(middle + 1)
              
    }


    return (
        <div className = "contenedor">
            <div className = "contenido">

                <button
                    onClick = {handlePrevio}
                    className = {`boton ${!izquierdo && "escondido"}`}
                >
                    {"<"}
                </button>
                <div className = "tarjetas">

                    {middle !== 0 ? <LateralCard carta = {previo} /> : <div /> }
                    
                    <CenterCard carta = {centro} />

                    {middle !== longitud ? <LateralCard carta = {posterior} /> : <div />} 
                </div> 

                <button
                    onClick = {handlePosterior}
                    className = {`boton ${!derecho && "escondido"}  `}
                >
                    {">"}
                </button>
                
            </div>


        </div>
    )
}

export default Scroll

/*
<button
    onClick = {handlePrevio}
    className = {` ${!izquierdo && "escondido"}`}
>
    Previo
</button>
                
<button
    onClick = {handlePosterior}
    className = {`${!derecho && "escondido"}  `}
>
    Posterior
</button>

*/
