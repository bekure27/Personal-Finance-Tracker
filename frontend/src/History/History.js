import React from "react";
import { useGlobalContext } from "../context/globalContext";

const style = {
  container: {
    flex: 1,
  },
  historyItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "0.5rem",
  },
};

function History() {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();

  return (
    <div style={style.container}>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} style={style.historyItem}>
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense" ? `-${Math.abs(amount)}` : `+${amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}
// export
export default History;
