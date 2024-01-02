import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-gray-700-500 border-t-gray-500 h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;
