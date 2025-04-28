import React from "react";
import { FaEarthOceania } from "react-icons/fa6";
import { TbFish } from "react-icons/tb";
import { GiDoubleFish } from "react-icons/gi";

const HeroWhatWeDo = () => {
  return (
    <>
      <div className="align-center justify-center mt-10 sm:mt-20 mb-20">
        <div className="flex align-center justify-center">
          <h1 className="text-4xl font-bold">What We Do </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-20">
          <div className="w-full bg-blue-50 p-6 flex flex-col items-center space-y-6 min-h-[300px]">
            <div className="group inline-block">
              <FaEarthOceania className="text-8xl text-blue-800 transition-transform duration-300 group-hover:animate-bounce" />
            </div>

            <h2 className="text-2xl font-bold text-center">Beach Cleanups</h2>
            <p className="text-base text-center">
              Join the global movement to combat marine debris and safeguard the
              delicate balance of our coastal ecosystems.
            </p>
          </div>
          <div className="w-full bg-red-50 p-6 flex flex-col items-center space-y-6 min-h-[300px]">
            <div className="group inline-block">
              <TbFish className="text-8xl text-red-800 transition-transform duration-300 group-hover:animate-bounce" />
            </div>
            <h2 className="text-2xl font-bold text-center">
              Raising Awareness
            </h2>
            <p className="text-base text-center">
              Raising awareness is crucial for creating a collective
              understanding of the environmental challenges we face.
            </p>
          </div>

          <div className="w-full bg-green-50 p-6 flex flex-col items-center space-y-6 min-h-[300px]">
            <div className="group inline-block">
              <GiDoubleFish className="text-8xl text-green-800 transition-transform duration-300 group-hover:animate-bounce" />
            </div>

            <h2 className="text-2xl font-bold text-center">
              Building A Community
            </h2>
            <p className="text-base text-center">
              By working together to clean our beaches, we build strong bonds
              and create a positive impact on our local ecosystems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroWhatWeDo;
