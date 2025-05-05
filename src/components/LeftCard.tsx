
import React, { useState } from "react";
import { Search, Upload, ChevronLeft } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
import { Switch } from "./ui/switch";

interface LeftCardProps {
  isCollapsed: boolean;
  onCollapseChange: (collapsed: boolean) => void;
  canCollapse: boolean;
}

export const LeftCard = ({ isCollapsed, onCollapseChange, canCollapse }: LeftCardProps) => {
  const [isListView, setIsListView] = useState(true);
  
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
        <div className="flex items-center">
          <CollapsibleTrigger 
            onClick={handleCollapseClick}
            disabled={!canCollapse}
            className={`mr-2 p-1 rounded-md hover:bg-gray-100 ${!canCollapse ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft size={18} />
          </CollapsibleTrigger>
          {!isCollapsed && (
            <h2 className="font-semibold text-gray-800">
              {isListView ? "Left Card List" : "Left Card Viewer"}
            </h2>
          )}
        </div>
        {!isCollapsed && (
          <Switch 
            checked={!isListView} 
            onCheckedChange={(checked) => setIsListView(!checked)} 
            aria-label="Toggle view mode"
          />
        )}
      </div>
      
      <CollapsibleContent className="flex-1 flex flex-col">
        <div className="flex-1 bg-gray-50 p-4 overflow-auto">
          <div className="sticky top-0 bg-gray-50 pb-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Search..."
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <button className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Upload size={18} />
              </button>
            </div>
          </div>
          {/* Content will go here */}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
