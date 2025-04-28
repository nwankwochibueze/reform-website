import React, { useState } from "react";
import { createClient } from "contentful";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Spinner from "./Spinner";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_CAROUSEL,
});

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    data: heroCarousel,
    isLoading,
    error,
  } = useQuery(
    "heroCarousel",
    () => client.getEntries({ content_type: "heroCarousel" }),
    { staleTime: 60000 }
  );

  if (error) return <div>Error loading data: {error.message}</div>;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroCarousel.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroCarousel.items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {heroCarousel && heroCarousel.items.length > 0 && (
        <div
          className="relative h-[64vh] sm:h-[70vh] md:h-[80vh] lg:h-[780px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${
              heroCarousel.items[currentImageIndex]?.fields?.image?.fields?.file
                ?.url || ""
            })`,
          }}
        >
          {/* Left Button */}
          <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-20"
            onClick={handlePrev}
          >
            <BsChevronCompactLeft />
          </div>

          {/* Right Button */}
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-white cursor-pointer z-20"
            onClick={handleNext}
          >
            <BsChevronCompactRight />
          </div>

          {/* Animated Text Block */}
          <motion.div
            key={currentImageIndex}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10"
          >
            <motion.h1
              className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {heroCarousel.items[currentImageIndex]?.fields?.title || ""}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-regular mt-2 text-center max-w-[80%] sm:max-w-[70%] md:max-w-[50%]"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              {heroCarousel.items[currentImageIndex]?.fields?.description || ""}
            </motion.p>
            <motion.button
              className="px-6 py-2 text-white font-bold bg-blue-800 mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Act Now
            </motion.button>
          </motion.div>

          {/* Dot Navigation */}
          <div className="flex justify-center absolute bottom-4 w-full z-20">
            {heroCarousel.items.map((_, index) => (
              <RxDotFilled
                key={index}
                className={`text-2xl cursor-pointer ${
                  index === currentImageIndex ? "text-blue-800" : "text-white"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
