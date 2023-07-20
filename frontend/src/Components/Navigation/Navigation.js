import React, { useState } from "react";
import { menuItems } from "../../utils/menuItems";

function Navigation({ active, setActive }) {
  return (
    <div style={styles.sidebar}>
      <ul style={styles.menuItems}>
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              style={
                active === item.id
                  ? {
                      ...styles.activeMenuItem,
                      ...styles.menuItem,
                      color: "#fff",
                      background: "#00A16B",
                    }
                  : { ...styles.menuItem, color: "#222", background: "#FCA019" }
              }
            >
              {item.icon}
              <span style={styles.text}>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#f0f0f0",
    height: "100vh",
    paddingTop: "20px",
  },
  menuItems: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    borderRadius: "5px",
    marginBottom: "5px",
  },
  activeMenuItem: {
    backgroundColor: "#00A16B",
  },
  text: {
    marginLeft: "10px",
  },
};

export default Navigation;


