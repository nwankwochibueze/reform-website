import React from "react";
import { useQuery } from "react-query";
import { fetchContentfulData } from "../fetchContentfulData";

const ContactText = () => {
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
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;
  return (
    <div>
      {contactUs && contactUs.length > 0 ? (
        <div className="space-y-5">
          <p className="text-normal">{contactUs[0]?.fields.description || ""}</p>
          <p className="text-normal">{contactUs[0]?.fields.address || ""}</p>
          <p className="text-normal">{contactUs[0]?.fields.email || ""}</p>
          <p className="text-normal">{contactUs[0]?.fields.telephone || ""}</p>
        </div>
      ) : null}
    </div>
  );
};
export default ContactText;
