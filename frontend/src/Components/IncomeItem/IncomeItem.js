import React from "react";
import { dateFormat } from "../../utils/dateFormat";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons";
import Button from "../Button/Button";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  const styles = {
    container: {
      background: "#FCF6F9",
      border: "2px solid #FFFFFF",
      boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.06)",
      borderRadius: "20px",
      padding: "1rem",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      width: "100%",
      color: "#222260",
    },
    icon: {
      width: "80px",
      height: "80px",
      borderRadius: "20px",
      background: "#F5F5F5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #FFFFFF",
    },
    iconText: {
      fontSize: "2.6rem",
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: ".2rem",
    },
    title: {
      fontSize: "1.3rem",
      paddingLeft: "2rem",
      position: "relative",
    },
    indicator: {
      content: "",
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      width: ".8rem",
      height: ".8rem",
      borderRadius: "50%",
      background: indicatorColor,
    },
    innerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
    },
    amount: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: "var(--primary-color)",
      opacity: "0.8",
    },
    buttonContainer: {},
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        {type === "expense" ? (
          <span style={styles.iconText}>{expenseCatIcon()}</span>
        ) : (
          <span style={styles.iconText}>{categoryIcon()}</span>
        )}
      </div>
      <div style={styles.content}>
        <h5 style={styles.title}>
          {title}
          <span style={styles.indicator}></span>
        </h5>
        <div style={styles.innerContent}>
          <div style={styles.text}>
            <p style={styles.amount}>
              {dollar} {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          <div style={styles.buttonContainer}>
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"blue"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"green"}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
