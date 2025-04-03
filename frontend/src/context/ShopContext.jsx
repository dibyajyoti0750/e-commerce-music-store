import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currencyDollar = "$";
  const currencyRupee = "₹";
  const delivery_fee = 10;

  const value = {
    products,
    currencyDollar,
    currencyRupee,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
