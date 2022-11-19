import { useState } from "react"
import Molecontainer from "./MoleContainer"
import './App.css'

function App() {

  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <Molecontainer key={i} setScore={setScore} score={score} />
      )
    }

    return (
      <div className="mole-hill-container">
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <h2>{score}</h2>
      {createMoleHill()}
    </div>
  )
}

export default App
