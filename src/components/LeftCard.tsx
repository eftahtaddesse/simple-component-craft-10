
import React from "react";
import { Search, Upload } from "lucide-react";

export const LeftCard = () => {
  return (
    <div className="w-[40%] bg-white rounded-lg shadow-sm flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Left Card</h2>
      </div>
      <div className="p-4 flex items-center gap-2">
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="Search..."
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <button className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Upload size={18} className="mr-1" />
          Upload
        </button>
      </div>
      <div className="flex-1 bg-gray-50 p-4 overflow-auto">
        {/* Empty primitive div */}
      </div>
    </div>
  );
};
