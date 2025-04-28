import { useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoCloseSharp, IoCopy } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";

const PopUp = ({ imageUrl, onClose, isOpen }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSocialShare = (url) => {
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="w-[90%] max-w-md bg-white p-4 rounded-lg shadow-xl relative z-50">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black z-50"
      >
        <IoCloseSharp />
      </button>

      <div className="flex flex-wrap gap-6 justify-center mt-8">
        <div className="group relative cursor-pointer">
          <FaTwitter
            className="text-2xl"
            onClick={() =>
              handleSocialShare(
                `https://twitter.com/intent/tweet?url=${imageUrl}`
              )
            }
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Share on Twitter
          </span>
        </div>

        <div className="group relative cursor-pointer">
          <FaFacebook
            className="text-2xl"
            onClick={() =>
              handleSocialShare(
                `https://www.facebook.com/sharer/sharer.php?u=${imageUrl}`
              )
            }
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Share on Facebook
          </span>
        </div>

        <div className="group relative cursor-pointer">
          <FaLinkedin
            className="text-2xl"
            onClick={() =>
              handleSocialShare(
                `https://www.linkedin.com/shareArticle?url=${imageUrl}`
              )
            }
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Share on LinkedIn
          </span>
        </div>

        <div className="group relative cursor-pointer">
          <MdAlternateEmail
            className="text-2xl"
            onClick={() => handleSocialShare(`mailto:?body=${imageUrl}`)}
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Share via Email
          </span>
        </div>
      </div>

      <div className="flex mt-6 items-center border border-gray-300 rounded overflow-hidden">
        <span className="px-3 flex-1 truncate text-gray-700">{imageUrl}</span>
        <CopyToClipboard text={imageUrl} onCopy={handleCopy}>
          <button className="bg-black text-white px-4 py-2 hover:bg-gray-700">
            <IoCopy />
          </button>
        </CopyToClipboard>
      </div>

      {copied && (
        <p className="text-sm text-green-600 mt-2 text-center">Link copied!</p>
      )}
    </div>
  );
};

export default PopUp;
