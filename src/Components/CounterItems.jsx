import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

function CounterItems(props) {
  const item = props.item;
  const i = props.i;
  return (
    <div className="flex flex-row justify-between rounded-sm bg-gray-100 px-3 py-2">
      <div className="flex flex-row justify-center items-center gap-1">
        <PiShoppingCartSimple />
        <p className="font-bold">{item} items</p>
      </div>

      {i == 0 ? <p className="text-orange-700 font-bold">-</p> : null}
    </div>
  );
}

export default CounterItems;
