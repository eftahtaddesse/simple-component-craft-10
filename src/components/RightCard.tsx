
import React from "react";
import { Plus, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";

interface RightCardProps {
  isCollapsed: boolean;
  onCollapseChange: (collapsed: boolean) => void;
  canCollapse: boolean;
}

export const RightCard = ({ isCollapsed, onCollapseChange, canCollapse }: RightCardProps) => {
  const width = isCollapsed ? "w-[60px]" : "w-[20%]";
  
  return (
    <Collapsible
      open={!isCollapsed}
      onOpenChange={(open) => canCollapse && onCollapseChange(!open)}
      className={`${width} bg-white rounded-lg shadow-sm flex flex-col overflow-hidden transition-all duration-300`}
    >
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        {!isCollapsed && <h2 className="font-semibold text-gray-800">Right Card</h2>}
        <CollapsibleTrigger 
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
        <div className="p-4 flex justify-center border-t border-gray-100">
          <button className="flex items-center justify-center p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Plus size={18} />
          </button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
