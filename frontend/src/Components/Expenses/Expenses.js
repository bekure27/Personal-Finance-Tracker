import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseForm from "./ExpenseForm";

const style = {
  container: {
    display: "flex",
    gap: "1rem",
  },
};

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      <div>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expense: <span>${totalExpenses()}</span>
        </h2>
        <div style={style.container}>
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-red)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;

