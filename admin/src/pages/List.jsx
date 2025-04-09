import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 text-lg font-semibold">All Products List</p>

      <div className="flex flex-col gap-2">
        {/* ---------- Table Header (Desktop Only) ---------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-100 text-sm font-semibold">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
        </div>

        {/* ---------- Product Items ---------- */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 md:gap-3 py-2 px-3 border text-sm"
            key={index}
          >
            {/* Image */}
            <div className="flex md:block items-center gap-2">
              <img
                className="w-12 h-12 object-cover rounded-md"
                src={item.image[0]}
                alt={item.name}
              />
              <p className="md:hidden font-medium">{item.name}</p>
            </div>

            {/* Name (Desktop Only) */}
            <p className="hidden md:block truncate">{item.name}</p>

            {/* Category */}
            <p className="truncate">{item.category}</p>

            {/* Price */}
            <p>
              {currency}
              {item.price}
            </p>

            {/* Action */}
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right md:text-center text-lg cursor-pointer text-red-500 hover:text-red-700"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
