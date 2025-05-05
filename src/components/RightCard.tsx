
import React from "react";
import { Plus } from "lucide-react";

export const RightCard = () => {
  return (
    <div className="w-[20%] bg-white rounded-lg shadow-sm flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Right Card</h2>
      </div>
      <div className="flex-1 bg-gray-50 p-4 overflow-auto">
        {/* Empty primitive div */}
      </div>
      <div className="p-4 flex justify-center border-t border-gray-100">
        <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Plus size={18} className="mr-1" />
          Add New
        </button>
      </div>
    </div>
  );
};
