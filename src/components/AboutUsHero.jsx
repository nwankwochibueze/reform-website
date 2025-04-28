import React from "react";
import { createClient } from "contentful";
import { useQuery } from "react-query";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_ABOUT_US,
});

const fetchAboutHeroImage = async () => {
  const response = await client.getEntries({ content_type: "aboutUs" });
  return response.items;
};

const AboutUsHero = () => {
  const {
    data: aboutHeroImage,
    isLoading,
    error,
  } = useQuery("aboutHeroImage", fetchAboutHeroImage, {
    staleTime: 60000, // Data remains fresh for 60 seconds
    cacheTime: 300000, // Cache persists for 5 minutes
  });

  if (isLoading) return <div className="h-60 bg-gray-300 animate-pulse"></div>;
  if (error) return <div>Error loading image: {error.message}</div>;

  const firstItem = aboutHeroImage?.[0]; // Extract first entry safely

  return (
    <div style={{ width: "100%" }}>
      {/* Hero Image */}
      {firstItem?.fields?.teamPhoto?.fields?.file?.url && (
        <div
          className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${firstItem.fields.teamPhoto.fields.file.url})`,
          }}
        >
          <img
            src={firstItem.fields.teamPhoto.fields.file.url}
            alt={firstItem.fields.teamPhoto.fields.title}
            className="hidden"
          />
        </div>
      )}

      {/* About Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center mb-5">
          <h1 className="font-bold text-4xl">About Us</h1>
        </div>
        <div className="max-w-3xl px-6 gap-6 flex flex-col">
          {firstItem?.fields?.aboutOurCompany && (
            <p className="font-regular mb-4 text-center">
              {firstItem.fields.aboutOurCompany}
            </p>
          )}
          {firstItem?.fields?.aboutUsTwo && (
            <p className="font-regular text-center">
              {firstItem.fields.aboutUsTwo}
            </p>
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold">
            Our coasts and beaches are irreplaceable. Let's work to protect
            them.
          </h1>
        </div>
      </div>

      {/* Mission and Vision Section */}
      {firstItem && (
        <div className="flex flex-col lg:flex-row items-stretch justify-evenly mt-20 mb-20 gap-10 px-4">
          {/* Mission */}
          <div className="max-w-xl text-center pl-10 pr-10 space-y-6">
            <h2 className="font-bold text-2xl">Our Mission</h2>
            {firstItem.fields.ourMission && (
              <p className="font-regular text-center">
                {firstItem.fields.ourMission}
              </p>
            )}
            {firstItem.fields.ourMissionTwo && (
              <p className="font-regular text-center">
                {firstItem.fields.ourMissionTwo}
              </p>
            )}
          </div>
          {/* Vision */}
          <div className="max-w-xl text-center pl-10 pr-10 space-y-6">
            <h2 className="font-bold text-2xl">Our Vision</h2>
            {firstItem.fields.ourVision && (
              <p className="font-regular text-center">
                {firstItem.fields.ourVision}
              </p>
            )}
            {firstItem.fields.ourVisionTwo && (
              <p className="font-regular text-center">
                {firstItem.fields.ourVisionTwo}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsHero;
