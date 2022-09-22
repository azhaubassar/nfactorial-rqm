//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
import { useState } from "react";

import quotesData from "./data/quotes.json";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function App() {
  const randomQuote =
    quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];

  const [quote, setQuote] = useState(randomQuote);

  console.log(randomQuote);

  const handleQuoteChange = () => {
    setQuote(
      quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)]
    );
  };

  return (
    <div
      style={{
        backgroundColor: colors[3],
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="App"
    >
      <div
        style={{
          width: "50%",
          borderStyle: "solid",
          borderRadius: "10px",
          height: "40%",
          display: "flex",
          flexDirection: "column",
        }}
        className="quotes-container"
      >
        <div style={{ height: "70%" }} className="quotes">
          {quote.quote} + + + {quote.author}
        </div>
        <div
          style={{
            height: "30%",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
          }}
          className="actions"
        >
          <div
            className="links"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a style={{ marginRight: "1rem" }}>t</a>
            <a>tw</a>
          </div>
          <button onClick={handleQuoteChange}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
