import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currencySymbol, getConvertedPrice, addToCart } =
    useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    window.scrollTo(0, 0);
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
            <p className="ml-2">(179 ratings)</p>
          </div>

          {productData.bestseller && (
            <div className="inline-block bg-yellow-300 text-xs text-black px-3 py-1 rounded-full mt-2">
              Bestseller
            </div>
          )}

          <div className="mt-5">
            {/* Discount & Final Price in same row */}
            <div className="flex items-baseline gap-3">
              {/* Discount Percentage */}
              {productData.originalPrice && (
                <p className="text-2xl text-green-600 font-bold">
                  {Math.round(
                    ((productData.originalPrice - productData.price) /
                      productData.originalPrice) *
                      100
                  )}
                  % OFF
                </p>
              )}

              {/* Final Price */}
              <p className="text-4xl font-medium">
                {currencySymbol}
                {getConvertedPrice(productData.price)}
              </p>
            </div>

            {/* Original Price below */}
            {productData.originalPrice && (
              <p className="text-gray-400 line-through text-sm mt-1">
                {currencySymbol}
                {getConvertedPrice(productData.originalPrice)}
              </p>
            )}
          </div>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* Materials */}
          <div className="flex flex-col gap-4 mt-5">
            <h3 className="text-lg font-medium">Materials</h3>
            <div className="flex flex-wrap gap-2">
              {productData.materials.map((material, index) => (
                <div
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  key={index}
                >
                  {material}
                </div>
              ))}
            </div>
          </div>

          {/* Weight & Dimensions */}
          <div className="mt-5">
            <h3 className="text-lg font-medium">Specifications</h3>
            <p className="text-gray-600 text-sm">
              Weight: {productData.weight}
            </p>
            <p className="text-gray-600 text-sm">
              Dimensions: {productData.dimensions}
            </p>
          </div>

          {/* Tuning */}
          <div className="mt-5">
            <h3 className="text-lg font-medium">Tuning</h3>
            <p className="text-gray-600 text-sm">{productData.tuning}</p>
          </div>

          <button
            onClick={() => addToCart(productData._id)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-6"
          >
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

      {/* -------------------- Description & Review Section -------------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (179)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Welcome to Rudra & Son's Music House - a place where the rich sound
            of Indian classical music comes to life. We offer a carefully
            curated collection of handcrafted sitars, sarods, tanpuras, and
            more, made by experienced artisans who truly understand the soul of
            each instrument.
          </p>
          <p>
            Whether you're a performer, student, or collector, you'll find
            instruments and accessories that meet both traditional and modern
            needs. From mizrabs and string sets to hard cases and tuners, we
            provide everything you need to stay in tune with the soul of Indian
            classical music.
          </p>
        </div>
      </div>

      {/* -------------------- display related products -------------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
