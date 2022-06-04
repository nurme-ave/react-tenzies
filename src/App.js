import './App.css';
import Die from './components/Die';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [count, setCount] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
      })
    }, [])

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if (allDiceHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  
  function allNewDice() {
    const newDiceArr = [];
    
    for (let i = 0; i < 10; i++) {
      newDiceArr.push(generateNewDie())
    }
    return newDiceArr
  }
  
  function rollDice() {
    if (!tenzies) {
      setCount(prevState => prevState + 1)
      console.log(count)
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? die : generateNewDie()
      }))
    } else {
      setTenzies(false)
      setCount(0)
      setDice(allNewDice)
    }
  }
  
  function holdDice(id) {
    setDice(prevState => {
      return prevState.map((die) => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    }) 
  }
  
  const diceElements = dice.map(die => 
    <Die 
      value={die.value} 
      isHeld={die.isHeld} 
      key={die.id} 
      holdDice={() => holdDice(die.id)} 
    />)


  return (
    <main className="main-container">
      <section className="section-container">
        {tenzies && <Confetti width={windowWidth - 5} height={windowHeight - 5}/>}
        <h1 className="heading">Tenzies</h1>
        <p>
          {tenzies ? 
          `Congratulations! It took you ${count} clicks to win.` : 
          "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
        </p>
        <ul className="boxes-list">
          { diceElements }
        </ul>
        <button className="roll-button" onClick={ rollDice }>{tenzies ? "New Game" : "Roll"}</button>
      </section>
    </main>
  );
}

export default App;