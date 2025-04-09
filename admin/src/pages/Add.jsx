import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [category, setCategory] = useState("Sarod");
  const [subCategory, setSubCategory] = useState("Plucked");
  const [materials, setMaterials] = useState("");
  const [tuning, setTuning] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [bestseller, setBestSeller] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("originalPrice", originalPrice);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append(
        "materials",
        JSON.stringify(materials.split(",").map((m) => m.trim()))
      );
      formData.append("tuning", tuning);
      formData.append("weight", weight);
      formData.append("dimensions", dimensions);
      formData.append("bestseller", bestseller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setName("");
        setDescription("");

        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

        setPrice("");
        setOriginalPrice("");
        setMaterials("");
        setTuning("");
        setWeight("");
        setDimensions("");
        setBestSeller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2 text-md font-medium">Upload Image</p>

        <div className="flex gap-4 flex-wrap">
          <label
            htmlFor="image1"
            className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-md cursor-pointer overflow-hidden"
          >
            <img
              className={
                image1
                  ? "w-full h-full object-cover"
                  : "w-12 h-12 object-contain"
              }
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt="Upload"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>

          <label
            htmlFor="image2"
            className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-md cursor-pointer overflow-hidden"
          >
            <img
              className={
                image2
                  ? "w-full h-full object-cover"
                  : "w-12 h-12 object-contain"
              }
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt="Upload"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>

          <label
            htmlFor="image3"
            className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-md cursor-pointer overflow-hidden"
          >
            <img
              className={
                image3
                  ? "w-full h-full object-cover"
                  : "w-12 h-12 object-contain"
              }
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt="Upload"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>

          <label
            htmlFor="image4"
            className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-md cursor-pointer overflow-hidden"
          >
            <img
              className={
                image4
                  ? "w-full h-full object-cover"
                  : "w-12 h-12 object-contain"
              }
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt="Upload"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Sarod">Sarod</option>
            <option value="Santur">Santur</option>
            <option value="Swarmandal">Swarmandal</option>
            <option value="Esraj">Esraj</option>
            <option value="Sitar">Sitar</option>
            <option value="Tanpura">Tanpura</option>
            <option value="Sarangi">Sarangi</option>
            <option value="Rabab">Rabab</option>
            <option value="Strings">Strings</option>
            <option value="Cases">Cases</option>
            <option value="Plectrums">Plectrums</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Plucked">Plucked</option>
            <option value="Struck">Struck</option>
            <option value="Bowed">Bowed</option>
            <option value="Professional">Professional</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25000"
            required
          />
        </div>

        <div>
          <p className="mb-2">Original Price</p>
          <input
            onChange={(e) => setOriginalPrice(e.target.value)}
            value={originalPrice}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="40000"
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-2">
        <div className="flex flex-col">
          <p className="mb-2">Materials (comma-separated)</p>
          <input
            onChange={(e) => setMaterials(e.target.value)}
            value={materials}
            className="px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="e.g. Tun Wood, Goat Skin, Metal Strings"
            required
          />
        </div>

        <div className="flex flex-col">
          <p className="mb-2">Tuning</p>
          <input
            onChange={(e) => setTuning(e.target.value)}
            value={tuning}
            className="px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="e.g. C# - G# - C# - D#"
            required
          />
        </div>

        <div className="flex flex-col">
          <p className="mb-2">Weight</p>
          <input
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            className="px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="e.g. 6kg"
            required
          />
        </div>

        <div className="flex flex-col">
          <p className="mb-2">Dimensions</p>
          <input
            onChange={(e) => setDimensions(e.target.value)}
            value={dimensions}
            className="px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="e.g. 42 x 12 x 10 inches"
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="w-5 h-5"
        />
        <label className="cursor-pointer text-[15px]" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Add"
        )}
      </button>
    </form>
  );
};

export default Add;
