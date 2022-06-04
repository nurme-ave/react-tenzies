import './App.css';
import Die from './components/Die';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'


function App() {
  /* 
  Fixing the mobile viewport problem with 'height: 100vh'
  which does not apply correctly on mobile devices due to
  the address bar on top of the screen.
 */

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

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
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? die : generateNewDie()
      }))
    } else {
      setTenzies(false)
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
        {tenzies && <Confetti width={windowWidth - 10} height={windowHeight - 10}/>}
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