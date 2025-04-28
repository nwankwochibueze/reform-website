import { useQuery } from "react-query";
import { fetchContentfulData } from "../fetchContentfulData";

const DonateAboutUs = () => {
  const {
    isLoading,
    error,
    data: donatePage,
  } = useQuery("donatePage", () =>
    fetchContentfulData(
      "donatePage",
      import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_DONATE
    )
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;
  return (
    <div className="flex flex-col items-start gap-4 w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      {donatePage && donatePage.length > 0 ? (
        <div>
          <p className="pr-4 sm:pr-8 md:pr-12 lg:pr-16">
            {donatePage[0]?.fields?.aboutUs || ""}
          </p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default DonateAboutUs;
