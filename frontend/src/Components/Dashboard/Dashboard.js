import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  statsContainer: {
    display: "flex",
    gap: "2rem",
  },
  chartContainer: {
    flex: 2,
  },
  amountContainer: {
    display: "flex",
    gap: "2rem",
  },
  amountBox: {
    padding: "1rem",
    background: "#F2F2F2",
    borderRadius: "10px",
    color: "#222",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  incomeBox: {
    background: "#00A16B",
  },
  expenseBox: {
    background: "#FCA019",
  },
  balanceBox: {
    background: "#ccc",
  },
  amountHeading: {
    fontSize: "1.3rem",
  },
  amountValue: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  salaryTitle: {
    fontSize: "1.3rem",
    margin: "1rem 0",
  },
  salaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
};

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div style={style.container}>
      <h1>All Transactions</h1>
      <div style={style.statsContainer}>
        <div style={{ ...style.chartContainer, paddingRight: "2rem" }}>
          <Chart />
          <div style={style.amountContainer}>
            <div style={{ ...style.amountBox, ...style.incomeBox }}>
              <h2 style={style.amountHeading}>Total Income</h2>
              <p style={style.amountValue}>
                {dollar} {totalIncome()}
              </p>
            </div>
            <div style={{ ...style.amountBox, ...style.expenseBox }}>
              <h2 style={style.amountHeading}>Total Expense</h2>
              <p style={style.amountValue}>
                {dollar} {totalExpenses()}
              </p>
            </div>
            <div style={{ ...style.amountBox, ...style.balanceBox }}>
              <h2 style={style.amountHeading}>Total Balance</h2>
              <p style={style.amountValue}>
                {dollar} {totalBalance()}
              </p>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <History />
          <h2 style={style.salaryTitle}>
            Min <span>Income</span> Max
          </h2>
          <div style={style.salaryItem}>
            <p>${Math.min(...incomes.map((item) => item.amount))}</p>
            <p>${Math.max(...incomes.map((item) => item.amount))}</p>
          </div>
          <h2 style={style.salaryTitle}>
            Min <span>Expense</span> Max
          </h2>
          <div style={style.salaryItem}>
            <p>${Math.min(...expenses.map((item) => item.amount))}</p>
            <p>${Math.max(...expenses.map((item) => item.amount))}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


