import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonateForm = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("NGN");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const paymentSuccess = useRef(false); // ✅ Track success with useRef
  const publicKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY;

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const makePayment = () => {
    if (!amount || Number(amount) <= 0) {
      toast.error("⚠️ Please enter a valid amount!");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      FlutterwaveCheckout({
        public_key: publicKey,
        tx_ref: `donation-${Date.now()}`,
        amount: Number(amount),
        currency: currency,
        payment_options: "card, ussd, mobilemoney",
        customer: {
          email: "johndoe@example.com",
          phone_number: "08102909304",
          name: "John Doe",
        },
        customizations: {
          title: "Reform Ocean Donation",
          description: "Support our cause",
          logo: "https://example.com/logo.png",
        },
        callback: (response) => {
          console.log("Payment Response:", response);

          if (response.status === "successful") {
            paymentSuccess.current = true;
            setModalMessage(
              "✅ Payment Successful! Thank you for your support."
            );
            setShowModal(true);
            toast.success("✅ Payment Successful!");

            // ✅ Reset Form Fields
            setAmount("");
            setCurrency("NGN");
          } else {
            toast.error("⚠️ Payment Failed or Cancelled. Please try again.");
          }
        },

        onclose: () => {
          setTimeout(() => {
            if (!paymentSuccess.current) {
              toast.warn("❌ Payment was closed. You can try again.");
            }
          }, 500);
        },
      });
    };
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Make a donation</h2>

      {/* Toast Container - Ensures Toasts Appear */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Currency Selection */}
      <label className="block mb-2 text-gray-700">Select Currency</label>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        className="w-full p-2 border rounded-md mb-4 cursor-pointer hover:bg-gray-100"
      >
        <option value="NGN">NGN (₦)</option>
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="GBP">GBP (£)</option>
      </select>

      {/* Amount Input */}
      <label className="block mb-2 text-gray-700">Enter Amount</label>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        className="w-full p-2 border rounded-md mb-4"
      />

      {/* Donate Button */}
      <button
        className="w-full bg-blue-900 text-white p-2 rounded-md cursor-pointer 
            hover:bg-blue-600 active:bg-blue-700 transition-all"
        onClick={makePayment}
      >
        Donate {currency} {amount || "0"}
      </button>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateForm;
