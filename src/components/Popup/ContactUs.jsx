import { useState, useRef, useEffect } from "react";
import ContactHero from "./ContactHero";
import ContactText from "./ContactText";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Restore scroll position on reload
  useEffect(() => {
    if (sessionStorage.getItem("formSubmitted")) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("formSubmitted");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set loading state
    console.log("Form URL:", import.meta.env.VITE_GETFORM_URL);

    const formData = new FormData(event.target); // Get form data

    try {
      const response = await fetch(import.meta.env.VITE_GETFORM_URl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true); // Show success message
        event.target.reset();
        sessionStorage.setItem("formSubmitted", "true");

        setTimeout(() => {
          formRef.current.scrollIntoView({ behavior: "smooth" });
        }, 500);

        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <div>
      {/* Hero Section (Image) */}
      <ContactHero />

      {/* Contact Form Section */}
      <div
        ref={formRef}
        className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-x-12 px-6 lg:px-12 py-10 md:py-8"
      >
        {/* Contact Information & Text */}
        <div className="flex flex-col items-start text-left gap-4 w-full lg:w-2/5 space-y-6">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold">
              Want to get involved? Contact us today.
            </h1>
            <ContactText />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/5">
          <form onSubmit={handleSubmit} className="w-full max-w-5xl space-y-6">
            {/* First Name & Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                required
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Type your message here..
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white py-2 transition duration-300 cursor-pointer 
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Success Message Below the Form */}
          {submitted && (
            <p className="mt-6 text-green-600 font-semibold text-center">
              ✅ Form Submitted! Thank you.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
