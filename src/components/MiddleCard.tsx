
import React from "react";
import { Send } from "lucide-react";

export const MiddleCard = () => {
  return (
    <div className="w-[40%] bg-white rounded-lg shadow-sm flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Middle Card</h2>
      </div>
      <div className="flex-1 bg-gray-50 p-4 overflow-auto">
        {/* Empty primitive div */}
      </div>
      <div className="p-4 flex items-center gap-2 border-t border-gray-100">
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="flex items-center justify-center p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
