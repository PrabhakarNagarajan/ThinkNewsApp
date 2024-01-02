import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ title, imageUrl, description, buttonText, linkTo }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
        <img
          className="w-full h-56 object-contain"
          src={imageUrl}
          alt={title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title?.slice(0, 50)}...</div>
          <p className="text-gray-700 text-base">
            {description?.slice(0, 100)}...
          </p>
        </div>
        <div className="px-6 py-4">
          <Link to={linkTo}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
