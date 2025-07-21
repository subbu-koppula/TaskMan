// import './InputBox.css';
import React, { useState } from "react";

function InputBox(props) {
  const styles = {
    "input-container": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "5px",
      borderStyle: "solid",
      borderColor: "#dedede",
      borderWidth: "1px",
      backgroundColor: "var(--background-color)",
      transition: "box-shadow 0.3s ease",
      margin: "5px",
    },
    inputBox: {
      width: "100%",
      height: "30px",
      padding: "5px",
      borderRadius: "10px",
      border: "none",
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: "none",
      backgroundColor: "var(--background-color)",
      color: "var(--text-color)",
    },

    "input-button": {
      backgroundColor: "#6e6e6e",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      height: "40px",
      width: "63.8px",
      paddingLeft: "20px",
      paddingRight: "20px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    "input-button:hover": { backgroundColor: "#4e4e4e" },
  };
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputText.trim() !== "") {
      props.setTodos((prevTodos) => [
        ...prevTodos,
        {
          title: inputText,
          id: Date.now(),
          done: false,
        },
      ]);
    }
    setInputText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleButtonClick();
  };

  return (
    <div style={styles["input-container"]}>
      <input
        style={styles["inputBox"]}
        placeholder="Enter text"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={inputText}
      ></input>
      <button style={styles["input-button"]} onClick={handleButtonClick}>
        Add
      </button>
    </div>
  );
}

export default InputBox;
