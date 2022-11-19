import { useState } from "react"
import EmptySlot from "./EmptySlot"
import Mole from "./Mole"

function Molecontainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = () => {
        if (displayMole) {
            props.setScore(props.score + 1)
            setDisplayMole(false)
        }
        else {
            props.setScore(props.score - 1)
        }
    }

    return (
        <div style={{ 'display': 'inline-block' }}>
            {displayMole ? <Mole displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick} />}
        </div>
    )
}

export default Molecontainer