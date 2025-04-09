import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currencySymbol, getConvertedPrice, delivery_fee, getCartAmount } =
    useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currencySymbol}{" "}
            {currencySymbol === "$"
              ? getConvertedPrice(subtotal)
              : getConvertedPrice(subtotal).toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currencySymbol}{" "}
            {currencySymbol === "$"
              ? getConvertedPrice(delivery_fee)
              : getConvertedPrice(delivery_fee).toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currencySymbol}{" "}
            {currencySymbol === "$"
              ? getConvertedPrice(total)
              : getConvertedPrice(total).toFixed(2)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
