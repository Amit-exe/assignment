import React from "react";
import { GoPeople } from "react-icons/go";
import CounterItems from "./CounterItems";

function Counter(props) {
  console.log(props);
  let items = props["counter-item"];
  let customers = items.length;
  let totalItems = items.reduce((a, b) => Number(a) + Number(b), 0);
  return (
    <div className="flex flex-col w-full max-w-[350px] min-w-[240px] bg-white rounded-md px-4 py-6 shadow-xl max-h-[500px]">
      <div className="flex flex-row justify-between gap-10 py-3 pb-5">
        <h2 className="font-bold">Counter {props.number}</h2>
        <div className="flex flex-row justify-center items-center gap-1">
          <GoPeople />
          <p className="font-bold">{customers} customers</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <div className="flex-1 overflow-auto custom-scrollbar flex flex-col gap-1">
          {items.map((item, i) => (
            <CounterItems key={i} item={item} i={i} />
          ))}
        </div>

        <p className="text-xs pt-2">Total items {totalItems}</p>
      </div>
    </div>
  );
}

export default Counter;
