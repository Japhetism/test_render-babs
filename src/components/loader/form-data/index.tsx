import React from "react";

const FormDataLoader = ({ count }: { count: number }) => {
  return (
    <div className="flex flex-col w-full px-5">
      {Array.from({ length: count }).map((_, index) => (
        <div className="flex py-1" key={index}>
          <div className="font-barlow text-gray-600 w-2/12">
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-1"></div>
          </div>
          <div className="font-barlow w-2/12">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormDataLoader;
