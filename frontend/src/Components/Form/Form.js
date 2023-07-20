import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

const style = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "320px", 
  },
  error: {
    color: "red",
  },
  inputControl: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  select: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  textarea: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  submitBtn: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0", 
  },
};

function Form() {
  const { addIncome, getIncomes, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form style={style.form} onSubmit={handleSubmit}>
      {error && <p style={style.error}>{error}</p>}
      <div style={style.inputControl}>
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Income Title"
          onChange={handleInput("title")}
          style={style.input}
        />
      </div>
      <div style={style.inputControl}>
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Income Amount"}
          onChange={handleInput("amount")}
          style={style.input}
        />
      </div>
      <div style={style.inputControl}>
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
          style={style.input}
        />
      </div>
      <div style={style.inputControl}>
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
          style={style.select}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div style={style.inputControl}>
        <textarea
          name="description"
          value={description}
          placeholder="Add Description"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
          style={style.textarea}
        ></textarea>
      </div>
      <div style={style.submitBtn}>
        <Button
          name="Add Income"
          icon={plus}
          bg="blue"
          color="#fff"
          bPad="0.8rem 1.6rem"
          bRad="30px"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Form;




