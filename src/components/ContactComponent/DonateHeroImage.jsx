import { useQuery } from "react-query";
import { fetchContentfulData } from "../fetchContentfulData";

const DonateHeroImage = () => {
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
  // console.log("DonatePage Data:", donatePage);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div>
      {donatePage && donatePage.length > 0 ? (
        <div>
          <img
            src={donatePage[0]?.fields?.image?.fields?.file?.url || ""}
            alt={donatePage[0]?.fields?.image?.fields?.title || "Donate Hero"}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "900px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default DonateHeroImage;
