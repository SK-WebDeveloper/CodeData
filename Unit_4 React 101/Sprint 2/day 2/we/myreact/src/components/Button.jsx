function Button({ onCLick, children, disabled }) {
    return (
      <button
        style={{
          padding: "1rem",
          border: 0,
          borderWidth: 0,
          fontWeight: "bold",
          background: "tomato",
          color: "white"
        }}
        disabled={disabled}
        onCLick={onCLick}
      >
        {children}
      </button>
    );
  }
  export default Button;
  