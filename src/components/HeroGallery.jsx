import { useState } from "react";
import { createClient } from "contentful";
import { useQuery } from "react-query";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import PopUp from "./Popup/PopUp";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_GALLERY,
});
console.log("Env Variables:", import.meta.env);
console.log("Access Token:", import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN_HERO_GALLERY);


const HeroGallery = () => {
  const [icon, setIcon] = useState({});
  const [like, setLike] = useState({});
  const [activePopupId, setActivePopupId] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const {
    data: imageGallery,
    isLoading,
    error,
  } = useQuery("imageGallery", async () => {
    const response = await client.getEntries({ content_type: "imageGallery" });
    return response.items;
  });

  if (isLoading) return <div className="h-60 bg-gray-300 animate-pulse"></div>;

  if (error) return <div>Error loading gallery</div>;

  const handleShareClick = (id, imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setActivePopupId(id);
  };

  const handleClosePopup = () => {
    setActivePopupId(null);
    setSelectedImageUrl("");
  };

  const changeIconColor = (id) => {
    setIcon((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setLike((prevLikes) => ({
      ...prevLikes,
      [id]: prevLikes[id] ? 0 : (prevLikes[id] || 0) + 1,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
      {imageGallery?.map((image) => {
        const imageId = image.sys.id;
        const imageUrl = image.fields.image.fields.file.url;

        return (
          <div
            key={imageId}
            className="relative bg-cover bg-center h-80 sm:h-96 lg:h-[450px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute bottom-0 left-0 p-2 flex justify-between w-full ">
              <div className="flex items-center gap-3">
                <FaHeart
                  className="text-2xl cursor-pointer"
                  style={{ color: icon[imageId] ? "red" : "white" }}
                  onClick={() => changeIconColor(imageId)}
                />
                {like[imageId] > 0 && (
                  <span className="text-white text-lg">{like[imageId]}</span>
                )}
              </div>
              <IoIosShareAlt
                className="text-white text-2xl cursor-pointer"
                onClick={() => handleShareClick(imageId, imageUrl)}
              />
            </div>

            {/* Inline PopUp only within the current card */}
            {activePopupId === imageId && (
              <div
                className="absolute inset-0 z-30 flex items-center justify-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} // 10% opacity black
              >
                <PopUp
                  imageUrl={selectedImageUrl}
                  onClose={handleClosePopup}
                  isOpen={true}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeroGallery;
