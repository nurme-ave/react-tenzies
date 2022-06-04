import './App.css';
import Die from './components/Die';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if (allDiceHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
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
    setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
    }))
  }
  
  function holdDice(id) {
    setDice(prevState => {
      return prevState.map((die) => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    }) 
  }
  
  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld} key={die.id} holdDice={() => holdDice(die.id)} />)

  return (
    <main className="main-container">
      <section className="section-container">
        <h1 className="heading">Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
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