import { useState } from "react";

function App() {
  const [total, setTotal] = useState("0");

  const handleClick = (e) => {
    const value = e.target.id;

    setTotal((prev) => {
      if (value === "0" && prev === "0") return prev;
      const update = prev === "0" ? value : prev + value;

      if (update.length > 3) {
        window.alert("숫자는 세 자리까지만 입력 가능합니다!");
        return prev;
      }

      return update;
    });
  };

  return (
    <div id="app">
      <h1 id="total">{total}</h1>
      <button id="1" onClick={handleClick}>
        1
      </button>
      <button id="2" onClick={handleClick}>
        2
      </button>
      <button id="3" onClick={handleClick}>
        3
      </button>
      <button id="4" onClick={handleClick}>
        4
      </button>
      <button id="5" onClick={handleClick}>
        5
      </button>
      <button id="6" onClick={handleClick}>
        6
      </button>
      <button id="7" onClick={handleClick}>
        7
      </button>
      <button id="8" onClick={handleClick}>
        8
      </button>
      <button id="9" onClick={handleClick}>
        9
      </button>
      <button id="0" onClick={handleClick}>
        0
      </button>
    </div>
  );
}

export default App;
