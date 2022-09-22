import { useState } from "react";
import { ReactComponent as TwitterSVG } from "./assets/twitter.svg";
import { ReactComponent as TumblrSVG } from "./assets/tumblr.svg";

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

function randomizer(array) {
  const randomElementfromArray =
    array[Math.floor(Math.random() * array.length)];
  return randomElementfromArray;
}

const tempQuotesArray = quotesData.quotes.map((q) => ({
  ...q,
  color: randomizer(colors),
}));

function App() {
  const [quote, setQuote] = useState(randomizer(tempQuotesArray));

  const handleChangeQuote = () => {
    setQuote(randomizer(tempQuotesArray));
  };

  return (
    <div
      style={{
        backgroundColor: quote.color,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transitionProperty: "background-color",
        transitionDuration: "1s",
      }}
      className="App"
    >
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "1rem",
        }}
        className="quotes-container"
      >
        <div style={{ height: "70%" }} className="quotes">
          <p style={{ color: quote.color }}>{quote.quote}</p> + {quote.author}
        </div>
        <hr />
        <div
          style={{
            height: "30%",
            display: "flex",
            justifyContent: "space-between",
          }}
          className="actions"
        >
          <div>
            <a>
              <TwitterSVG />
            </a>
            <a>
              <TumblrSVG />
            </a>
          </div>

          <button
            style={{
              height: "fit-content",
              backgroundColor: quote.color,
              color: "white",
              padding: "1rem",
            }}
            onClick={handleChangeQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
