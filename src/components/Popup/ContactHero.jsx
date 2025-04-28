import React from "react";
import { useQuery } from "react-query";
import { fetchContentfulData } from "../fetchContentfulData";

const ContactHero = () => {
  const {
    isLoading,
    error,
    data: contactUs,
  } = useQuery("contactUs", () =>
    fetchContentfulData(
      "contactUs",
      import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_CONTACT_US
    )
  );
  console.log("Fetched data:", contactUs);

  return (
    <div className="mb-8 lg:mb-16">
      {contactUs && contactUs.length > 0 ? (
        <div
          className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactUs[0].fields.image.fields.file.url})`,
          }}
        >
          <img
            src={contactUs[0].fields.image.fields.file.url}
            alt={contactUs[0].fields.image.fields.file.title}
            className="hidden"
          />
        </div>
      ) : null}
    </div>
  );
};
export default ContactHero;
