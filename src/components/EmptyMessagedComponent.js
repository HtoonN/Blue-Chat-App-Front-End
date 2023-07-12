import React from "react";

const EmptyMessagedComponent = ({ message }) => {
  return (
    <div className="text-gray-500 opacity-50 w-full h-full flex justify-center items-center">
      {message}
    </div>
  );
};

export default EmptyMessagedComponent;
