import React from "react";
import DonateHeroImage from "../components/ContactComponent/DonateHeroImage";
import DonateForm from "../components/DonateForm";
import DonateAboutUs from "../components/ContactComponent/DonateAboutUs";

const Donate = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col lg:flex-row justify-center items-center mt-10 lg:space-x-8 p-4 lg:p-16">
        <div className="w-full lg:w-1/2">
          <DonateForm />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <DonateHeroImage />
        </div>
      </div>
      <div className="mt-8 mb-10 p-4 lg:p-16">
        <DonateAboutUs />
      </div>
    </>
  );
};

export default Donate;
