import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [newItems, setNewItems] = useState(0);
  const numberOfCounters = 3;

  const [counters, setCounters] = useState(
    Array(numberOfCounters)
      .fill()
      .map(() => [])
  );
  const updateCounter = (items) => {
    const itemCount = Number(items);
    if (isNaN(itemCount) || itemCount <= 0) return;

    let minIndex = findMinSum(counters);
    let updated = [...counters];
    updated[minIndex] = [...updated[minIndex], itemCount];
    setCounters(updated);
  };

  function findMinSum(counters) {
    let minSum = Infinity;
    let minIndex = 0;
    for (let i = 0; i < counters.length; i++) {
      let sum = counters[i].reduce((a, b) => Number(a) + Number(b), 0);
      if (sum < minSum) {
        minSum = sum;
        minIndex = i;
      }
    }
    return minIndex;
  }

  return (
    <>
      <h1>Hypermart Checkout System</h1>
      <p className="m-5">Real-time queue management system</p>
      <div className="m-5 flex flex-row gap-5 justify-center">
        <input
          type="text"
          placeholder="Enter number of items"
          className="p-1 max-w-96 bg-white rounded-sm active:border-none text-sm"
          value={newItems}
          onChange={(e) => {
            setNewItems(e.target.value);
            console.log(newItems);
          }}
        />
        <button
          onClick={() => {
            updateCounter(newItems);
          }}
        >
          Chekout items
        </button>
      </div>

      <div className="flex flex-row justify-around gap-10">
        {counters.map((e, i) => (
          <Counter key={i} number={i + 1} counter-item={counters[i]} />
        ))}
      </div>
    </>
  );
}

export default App;
