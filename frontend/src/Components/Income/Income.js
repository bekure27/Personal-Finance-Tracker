import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

const style = {
  container: {
    display: "flex",
    flexDirection: "row", 
    gap: "2rem",
  },
};

function Income() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div>
      <div>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        <div style={style.container}>
          <Form /> 
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  indicatorColor="green"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
