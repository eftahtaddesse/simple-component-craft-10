
import React, { useState } from "react";
import { LeftCard } from "./LeftCard";
import { MiddleCard } from "./MiddleCard";
import { RightCard } from "./RightCard";

export const CardLayout = () => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [middleCollapsed, setMiddleCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  // Handle collapse changes with rules
  const handleLeftCollapseChange = (collapsed: boolean) => {
    setLeftCollapsed(collapsed);
    // If left is being expanded and middle is collapsed, expand middle
    if (!collapsed && middleCollapsed) {
      setMiddleCollapsed(false);
    }
  };

  const handleMiddleCollapseChange = (collapsed: boolean) => {
    setMiddleCollapsed(collapsed);
    // If middle is being expanded and left is collapsed, expand left
    if (!collapsed && leftCollapsed) {
      setLeftCollapsed(false);
    }
  };

  return (
    <div className="flex flex-1 p-4 gap-4 overflow-hidden">
      <LeftCard 
        isCollapsed={leftCollapsed} 
        onCollapseChange={handleLeftCollapseChange} 
        canCollapse={!middleCollapsed} 
      />
      <MiddleCard 
        isCollapsed={middleCollapsed} 
        onCollapseChange={handleMiddleCollapseChange}
        canCollapse={!leftCollapsed}
      />
      <RightCard 
        isCollapsed={rightCollapsed} 
        onCollapseChange={setRightCollapsed} 
        // Right card can always collapse
        canCollapse={true}
      />
    </div>
  );
};
