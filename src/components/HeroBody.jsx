import React from "react";
import { createClient } from "contentful";
import { useQuery } from "react-query";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_BODY,
});

const HeroBody = () => {
  const {
    data: heroBody,
    isLoading,
    error,
  } = useQuery("heroBody", async () => {
    const response = await client.getEntries({ content_type: "heroBody" });
    return response.items;
  });

  if (isLoading) return <div className="h-60 bg-gray-300 animate-pulse"></div>;

  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {heroBody.map((item) => (
        <div
          key={item.sys.id}
          className="relative h-[64vh] sm:h-[70vh] md:h-[80vh] lg:h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${item.fields.media.fields.file.url})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Vertically centered, horizontally aligned content */}
          <div className="absolute inset-0 flex justify-center items-center z-10 px-4">
            <div className="w-full max-w-[90%] text-white text-center flex flex-col gap-1">
              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold min-h-[60px]">
                {item.fields.value || ""}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-regular min-h-[40px]">
                {item.fields.description || ""}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-regular min-h-[40px]">
                {item.fields.descriptionTwo || ""}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-regular min-h-[40px]">
                {item.fields.descriptionThree || ""}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBody;
