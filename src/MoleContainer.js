import { useState } from "react"
import EmptySlot from "./EmptySlot";
import Mole from "./Mole";

function Molecontainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = () => {
        props.setScore(props.score++)
        displayMole = false
    }

    return (
        <div style={{'display': 'inline-block'}}>
            <h2>Mole Container</h2>
            {displayMole ? <Mole displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot displayMole={displayMole} setDisplayMole={setDisplayMole} handleClick={handleClick} />}
        </div>
    )
}

export default Molecontainer