import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import WhatsAppIcon from "../components/WhatsAppIcon";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-4 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={showFilter ? assets.filter_on : assets.filter_off}
            alt="Filter icon"
          />
          {/* <a href="https://www.flaticon.com/free-icons/filter" title="filter icons">Filter icons created by Arkinasi - Flaticon</a> */}
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">INSTRUMENTS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Sarod"}
                onChange={toggleCategory}
              />{" "}
              Sarod
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Santur"}
                onChange={toggleCategory}
              />{" "}
              Santur
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Swarmandal"}
                onChange={toggleCategory}
              />{" "}
              Swarmandal
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Dilruba"}
                onChange={toggleCategory}
              />{" "}
              Dilruba
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Esraj"}
                onChange={toggleCategory}
              />{" "}
              Esraj
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Big Esraj"}
                onChange={toggleCategory}
              />{" "}
              Big Esraj
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Sitar"}
                onChange={toggleCategory}
              />{" "}
              Sitar
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Sitar Pt. Ravi Shankar Gharana"}
                onChange={toggleCategory}
              />{" "}
              Sitar Pt. Ravi Shankar Gharana
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Sitar Pt. Vilayat Khan Gharana"}
                onChange={toggleCategory}
              />{" "}
              Sitar Pt. Vilayat Khan Gharana
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Tanpura"}
                onChange={toggleCategory}
              />{" "}
              Tanpura
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Box Tanpura"}
                onChange={toggleCategory}
              />{" "}
              Box Tanpura
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Swarmandal + Tanpura"}
                onChange={toggleCategory}
              />{" "}
              Swarmandal + Tanpura
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Sursingar"}
                onChange={toggleCategory}
              />{" "}
              Sursingar
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Sarangi"}
                onChange={toggleCategory}
              />{" "}
              Sarangi
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Surbahar"}
                onChange={toggleCategory}
              />{" "}
              Surbahar
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Rabab"}
                onChange={toggleCategory}
              />{" "}
              Rabab
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Punjabi Rabab"}
                onChange={toggleCategory}
              />{" "}
              Punjabi Rabab
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Afgani Rabab"}
                onChange={toggleCategory}
              />{" "}
              Afgani Rabab
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Electric Sitar"}
                onChange={toggleCategory}
              />{" "}
              Electric Sitar
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Tanpuri"}
                onChange={toggleCategory}
              />{" "}
              Tanpuri
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Strings"}
                onChange={toggleCategory}
              />{" "}
              Strings
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Cases"}
                onChange={toggleCategory}
              />{" "}
              Cases
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Plectrums"}
                onChange={toggleCategory}
              />{" "}
              Plectrums
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Electronics"}
                onChange={toggleCategory}
              />{" "}
              Electronics
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* Plucked Instruments */}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Plucked"}
                onChange={toggleSubCategory}
              />{" "}
              Plucked Instruments
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bowed"}
                onChange={toggleSubCategory}
              />{" "}
              Bowed Instruments
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Struck"}
                onChange={toggleSubCategory}
              />{" "}
              Struck Instruments
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Student"}
                onChange={toggleSubCategory}
              />{" "}
              Student
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Professional"}
                onChange={toggleSubCategory}
              />{" "}
              Professional
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"INSTRUMENTS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 rounded-sm text-sm px-2"
          >
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-10">
            {search
              ? `Sorry, we couldn't find anything related to "${search}".`
              : "No products available."}
          </div>
        )}
      </div>

      <WhatsAppIcon />
    </div>
  );
};

export default Collection;
