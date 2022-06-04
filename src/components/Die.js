function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff"
  }

  return (
    <li 
      className="box" style={styles}>{props.value}
    </li>
  )
}

export default Die;