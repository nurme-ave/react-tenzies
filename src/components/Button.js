function Button(props) {
  return (
    <button
      className="button"
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
