import './App.css';
import Die from './components/Die';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice())
  
  function allNewDice() {
    const newDiceArr = [];
    
    for (let i = 0; i < 10; i++) {
      newDiceArr.push({
        value: Math.ceil(Math.random() * 10),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDiceArr
  }
  
  function rollDice() {
    setDice(allNewDice);
  }
  
  function holdDice(id) {
    console.log(id)
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
        <button className="roll-button" onClick={ rollDice }>Roll</button>
      </section>
    </main>
  );
}

export default App;
