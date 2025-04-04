import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const { currencyDollar, currencyRupee } = useContext(ShopContext);
  const [currency, setCurrency] = useState(currencyRupee); // Default: Rupee

  // const [size, setSize] = useState("");

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* -------------------- Product Data -------------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* -------------------- Product Images -------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                // className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer h-[6.25rem] object-cover"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            {/* <img className="w-full h-auto" src={image} alt="" /> */}
            <img className="w-full h-[30rem] object-cover" src={image} alt="" />
          </div>
        </div>

        {/* -------------------- Product Info -------------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {/* <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">Ui icons created by -Artist - Flaticon</a> */}
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(123)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <h3 className="text-lg font-medium">Materials</h3>
            <div className="flex flex-wrap gap-2">
              {productData.materials.map((material, index) => (
                <div
                  /*
                  onClick={() => setSize(material)}
                  className={`border px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm cursor-pointer ${
                    material === size ? "border-orange-500" : ""
                  }`}
                  */

                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm"
                  key={index}
                >
                  {material}
                </div>
              ))}
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Authentic handcrafted instrument</p>
            <p>Cash on delivery is not available for this item.</p>
            <p>7-day easy exchange in case of damage or defect.</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
