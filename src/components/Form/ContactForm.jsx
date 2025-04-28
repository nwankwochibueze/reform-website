import React, { useState, useEffect, useRef } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Restore scroll position after reload
  useEffect(() => {
    if (sessionStorage.getItem("formSubmitted")) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("formSubmitted");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set loading state

    const formData = new FormData(event.target); // Get form data

    try {
      const response = await fetch(import.meta.env.VITE_GETFORM_URL, {
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

  // Save scroll position before page reloads
  const handleBeforeUnload = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };

  return (
    <div
      ref={formRef}
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen gap-4"
    >
      {/* Hide heading when form is submitted */}
      {!submitted && (
        <div>
          <h2 className="text-4xl font-bold">Sign Up to Our Mailing List</h2>
        </div>
      )}

      <div className="w-full max-w-5xl p-8">
        {submitted ? (
          <p className="text-green-600 font-semibold text-center">
            ✅ Form Submitted! Thank you..
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-5xl space-y-6">
            {/* Name & Email Fields */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  First Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Email Input */}
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
                placeholder="Email"
                required
                className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                id="subscribe"
                type="checkbox"
                name="subscribe"
                value="yes"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="subscribe" className="ml-2 text-gray-700">
                Subscribe to our newsletter
              </label>
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
        )}
      </div>
    </div>
  );
}

export default ContactForm;
