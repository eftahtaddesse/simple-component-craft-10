
import React from "react";
import { Send, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";

interface MiddleCardProps {
  isCollapsed: boolean;
  onCollapseChange: (collapsed: boolean) => void;
  canCollapse: boolean;
}

export const MiddleCard = ({ isCollapsed, onCollapseChange, canCollapse }: MiddleCardProps) => {
  const handleCollapseClick = () => {
    if (canCollapse) {
      onCollapseChange(!isCollapsed);
    }
  };
  
  return (
    <Collapsible
      open={!isCollapsed}
      onOpenChange={(open) => canCollapse && onCollapseChange(!open)}
      className="h-full bg-white rounded-lg shadow-sm flex flex-col overflow-hidden transition-all duration-300"
    >
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        {!isCollapsed && <h2 className="font-semibold text-gray-800">Middle Card</h2>}
        <CollapsibleTrigger 
          onClick={handleCollapseClick}
          disabled={!canCollapse}
          className={`${isCollapsed ? 'mx-auto' : 'ml-auto'} p-1 rounded-md hover:bg-gray-100 ${!canCollapse ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <ChevronRight size={18} />
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent className="flex-1 flex flex-col">
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
      </CollapsibleContent>
    </Collapsible>
  );
};
