import React from "react";
import { createClient } from "contentful";
import { useQuery } from "react-query";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_HOW_IT_WORKS,
});

const HowItWorks = () => {
  const {
    data: howItWorksection,
    isLoading,
    error,
  } = useQuery("howItWorksection", async () => {
    const response = await client.getEntries({
      content_type: "howItWorksection",
    });
    return response.items;
  });

  if (isLoading) return <div className="h-60 bg-gray-300 animate-pulse"></div>;

  if (error) return <div>Error loading image: {error.message} </div>;
  // console.log(howItWorksection);
  return (
    <>
      {howItWorksection && howItWorksection.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mb-20">
          <div className="space-y-10 px-4  lg:px-24 py-8 lg:py-0 ">
            <div className="mt-15">
              <h1 className="text-4xl font-bold">
                {howItWorksection[0].fields.headingText || ""}
              </h1>
            </div>
            <div>
              <p>{howItWorksection[0].fields.descriptionText1 || ""}</p>
            </div>
            <div className="space-y-6 pb-4">
              <p>{howItWorksection[0].fields.descriptionText2 || ""}</p>
              <button className="px-6 py-2 text-bold bg-blue-800 text-white">
                Act Now
              </button>
            </div>
          </div>
          <div>
            <img
              src={howItWorksection[0].fields.image.fields.file.url || ""}
              alt={howItWorksection[0].fields.image.fields.description}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HowItWorks;
