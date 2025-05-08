import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

import { numberOfCounters } from "../config";

function App() {
  const [newItems, setNewItems] = useState("");

  const [counters, setCounters] = useState(
    Array(numberOfCounters)
      .fill()
      .map(() => [])
  );

  const [counterSums, setCounterSums] = useState(
    Array(numberOfCounters).fill(0)
  );

  const updateCounter = (items) => {
    const itemCount = Number(items);
    if (isNaN(itemCount) || itemCount <= 0) return;

    let minIndex = findMinSum(counters);
    let updated = [...counters];
    updated[minIndex] = [...updated[minIndex], itemCount];
    setCounters(updated);

    let updatedSums = [...counterSums];
    updatedSums[minIndex] += itemCount;
    setCounterSums(updatedSums);
  };

  function findMinSum() {
    let minIndex = 0;
    let minSum = counterSums[0];

    for (let i = 1; i < counterSums.length; i++) {
      if (counterSums[i] < minSum) {
        minSum = counterSums[i];
        minIndex = i;
      }
    }

    return minIndex;
  }

  return (
    <>
      <h1>Hypermart Checkout System</h1>
      <p className="m-5">Real-time queue management system</p>
      <div className="m-5 flex flex-wrap gap-5 justify-center mb-10">
        <input
          type="text"
          placeholder="Enter number of items"
          className="p-1 min-h-8 min-w-72 max-w-96 bg-white rounded-sm active:border-none text-sm"
          value={newItems}
          onChange={(e) => {
            setNewItems(e.target.value);
            console.log(newItems);
          }}
        />
        <button
          className="max-h-8 px-4"
          onClick={() => {
            updateCounter(newItems);
            setNewItems("");
          }}
        >
          Checkout items
        </button>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {counters.map((e, i) => (
            <Counter key={i} number={i + 1} counter-item={counters[i]} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
