import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoPeople } from "react-icons/go";

function Counter(props) {
  console.log(props);
  let items = props["counter-item"];
  let customers = items.length;
  let totalItems = items.reduce((a, b) => Number(a) + Number(b), 0);
  return (
    <div className="flex flex-col min-w-1/3 flex-wrap bg-white rounded-md px-4 py-6 shadow-xl max-h-100">
      <div className="flex flex-row justify-between gap-10 py-3 pb-5">
        <h2 className="font-bold"> Counter {props.number}</h2>
        <div className="flex flex-row justify-center items-center gap-1">
          <GoPeople />
          <p className="font-bold"> {customers} customers</p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-1">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-row justify-between rounded-sm bg-gray-100 px-3 py-2"
            >
              <div className="flex flex-row justify-center items-center gap-1">
                <PiShoppingCartSimple />
                <p className="font-bold">{item} items</p>
              </div>

              {i == 0 ? <p className="text-orange-700 font-bold">-</p> : null}
            </div>
          );
        })}
      </div>

      <p className="text-xs pt-2">Total items {totalItems}</p>
    </div>
  );
}

export default Counter;
