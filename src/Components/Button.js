function Button({ text, bgColor, color = "black" }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        fontSize: "1rem",
        margin: "0 0.5rem",
      }}
      className="fs-5 px-5 py-3 btn rounded-0"
    >
      {text}
    </button>
  );
}

export default Button;
