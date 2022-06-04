function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff"
  }

  return (
    <li 
      className="box" 
      style={styles}
      onClick={props.holdDice}
      >
        {props.value}
    </li>
  )
}

export default Die;