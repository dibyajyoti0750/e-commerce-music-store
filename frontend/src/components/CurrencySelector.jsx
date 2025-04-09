import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(ShopContext);

  return (
    <div className="w-full flex justify-end py-2">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="p-1 rounded border border-gray-300"
      >
        <option value="₹">INR (₹)</option>
        <option value="$">USD ($)</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
