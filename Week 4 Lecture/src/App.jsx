import React, { useState } from "react";
import { pizzas } from "./data";

function PizzaCard({ pizza }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={styles.card}>
      <h2>{pizza.name}</h2>
      <p><strong>Price:</strong> £{pizza.price.toFixed(2)}</p>
      <p><strong>Spicy:</strong> {pizza.spicy ? "Yes 🌶️" : "No"}</p>

      <button onClick={() => setLikes(likes + 1)} style={styles.button}>
        Like
      </button>

      <p style={{ marginTop: "10px" }}>Likes: {likes}</p>
    </div>
  );
}

export default function App({ renderTime }) {
  return (
    <main style={styles.page}>
      <h1>Vite + React SSR Demo</h1>

      <p style={styles.infoBox}>
        <strong>Rendered on server at:</strong> {renderTime}
      </p>

      <p>
        This page is first rendered on the <strong>server</strong>, then React
        hydrates it in the browser so the <strong>Like</strong> buttons start
        working.
      </p>

      <div style={styles.grid}>
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "20px",
    background: "#f7f7f7"
  },
  infoBox: {
    background: "#fff3cd",
    padding: "12px",
    borderRadius: "8px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "24px"
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },
  button: {
    padding: "8px 14px",
    border: "1px solid #999",
    borderRadius: "8px",
    background: "white",
    cursor: "pointer"
  }
};