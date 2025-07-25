import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faComment,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const PlaceOrder = () => {
  const [method, setMethod] = useState("razorpay");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
    currencySymbol,
    getConvertedPrice,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(
            backendUrl + "/api/order/verifyRazorpay",
            response,
            { headers: { token } }
          );

          if (data.success) {
            navigate("/orders");
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const itemId in cartItems) {
        const quantity = cartItems[itemId];

        if (quantity > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === itemId)
          );

          if (itemInfo) {
            itemInfo.quantity = quantity;
            orderItems.push(itemInfo);
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: Number(getConvertedPrice(getCartAmount() + delivery_fee)),
        currency: currencySymbol,
      };

      switch (method) {
        // API Calls for COD
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          console.log(response.data);

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        // API Calls for Stripe
        case "stripe":
          const inrToUsdRate = 90; // temp hardcoded
          const convertedAmountInUSD = (
            orderData.amount / inrToUsdRate
          ).toFixed(2);
          const amountInCents = Math.round(convertedAmountInUSD * 100);

          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            {
              ...orderData,
              amount: amountInCents,
              currency: "usd",
            },
            { headers: { token } }
          );

          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            console.log(responseStripe.data);
            toast.error(responseStripe.data.message);
          }
          break;

        case "razorpay":
          const responseRazorpay = await axios.post(
            backendUrl + "/api/order/razorpay",
            orderData,
            { headers: { token } }
          );

          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
          } else {
            console.log(responseRazorpay.data);
            toast.error(responseRazorpay.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* -------------------- Left Side -------------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street address"
        />

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State / Province / Region"
          />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Postal / Zip code"
          />
          <select
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full bg-white text-gray-700"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="tel"
          placeholder="Phone number (with country code)"
        />
      </div>

      {/* -------------------- Right Side -------------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* -------------------- Payment Method Selection -------------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* -------------------- Razorpay -------------------- */}
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border border-gray-300 py-1.5 px-3 cursor-pointer h-12"
              // className="flex items-center gap-3 border border-gray-300 opacity-60 py-1.5 px-3 h-12 cursor-not-allowed"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${
                  method === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img
                className="h-6 mx-3 mr-0"
                src={assets.razorpay_logo}
                alt=""
              />
              {/* <p className="text-gray-500 text-sm font-medium ml-[-0.2rem]">
                (Unavailable)
              </p> */}
            </div>

            {/* -------------------- Stripe -------------------- */}
            <div
              // onClick={() => setMethod("stripe")}
              // className="flex items-center gap-3 border border-gray-300 py-1.5 px-3 cursor-pointer h-12"
              className="flex items-center gap-3 border border-gray-300 opacity-60 py-1.5 px-3 h-12 cursor-not-allowed"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img className="h-8 mx-3 mr-0" src={assets.stripe_logo} alt="" />
              <p className="text-gray-500 text-sm font-medium ml-[-0.5rem]">
                (Unavailable)
              </p>
            </div>

            {/* -------------------- COD -------------------- */}
            <div
              // onClick={() => setMethod("cod")}
              // className="flex items-center gap-3 border py-1.5 px-3 cursor-pointer h-12"
              className="flex items-center gap-3 border border-gray-300 opacity-60 py-1.5 px-3 h-12 cursor-not-allowed"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              {/* <p className="text-gray-500 text-md font-medium mx-4">
                CASH ON DELIVERY
              </p> */}
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY &nbsp; (Unavailable)
              </p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-300 text-gray-800 p-3 rounded text-sm">
            <p className="font-medium mb-1">
              <FontAwesomeIcon icon={faEarthAmericas} /> Outside India?
            </p>
            <p className="mb-2">
              We currently accept payments via Razorpay (India only).
            </p>
            <p className="mb-1">To place an order from outside India:</p>
            <div className="flex flex-col gap-1">
              <a href="https://wa.me/918777435274" className="text-blue-600 ">
                <FontAwesomeIcon icon={faComment} /> Chat on WhatsApp
              </a>
              <a
                href="mailto:sambhumondal572@gmail.com"
                className="text-blue-600 "
              >
                <FontAwesomeIcon icon={faEnvelope} /> Email Us
              </a>
              <a href="tel:+918777435274" className="text-blue-600 ">
                <FontAwesomeIcon icon={faPhone} /> Call Us
              </a>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
