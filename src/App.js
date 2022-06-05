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
  const [minimumClicks, setMinimumClicks] = useState(() => {
    const localData = localStorage.getItem('score')
    return localData ? JSON.parse(localData) : localStorage.setItem('score', JSON.stringify(100))
  })

  console.log(minimumClicks)

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(minimumClicks))
  }, [minimumClicks])

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
    if (!tenzies && startCounter()) {
      setCount(prevState => prevState + 1)
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? die : generateNewDie()
      }))
    } else {

      if (count < minimumClicks) {
        setMinimumClicks(count)
      }

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

  function startCounter() {
    const anyDiceHeld = dice.some(die => die.isHeld)
    return anyDiceHeld
  }

  // function resetGame() {

  // }


  return (
    <main className="main-container">
      <section className="section-container">
        {tenzies && <Confetti width={windowWidth - 5} height={windowHeight - 5}/>}
        <h1 className="heading">Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <p>
          {tenzies ? 
          `Congratulations! It took you ${count} clicks to win.` :
          `Clicks: ${count}`
          }
        </p>
        <p>
          {minimumClicks === 100 ?
          "Best score:" :
          `Best score: ${minimumClicks}`
          }
        </p>
        <ul className="boxes-list">
          { diceElements }
        </ul>
        <button className="roll-button" onClick={ rollDice }>{tenzies ? "New Game" : "Roll"}</button>
        {/* <button className="reset-button" onClick={ resetGame }>Reset</button> */}
      </section>
    </main>
  );
}

export default App;