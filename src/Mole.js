import { useEffect } from "react"
import moleImg from "./mole.png"

function Mole(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randomSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <h2>Mole</h2>
            <img style={{'width': '300px'}} src={moleImg} alt="Mole Image" onClick={props.handleClick} />
        </div>
    )
}

export default Mole