import { useEffect } from "react"
import moleHillImg from "./molehill.png"

function EmptySlot(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randomSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img className="mole-hill" src={moleHillImg} alt="Mole Hill Image" onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot