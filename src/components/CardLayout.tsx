
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

  // Calculate widths based on collapsed states
  const getLeftWidth = () => {
    if (leftCollapsed) return "w-[60px]";
    if (middleCollapsed) return "w-[60%]";
    return "w-[40%]";
  };

  const getMiddleWidth = () => {
    if (middleCollapsed) return "w-[60px]";
    if (leftCollapsed) return "w-[60%]";
    return "w-[40%]";
  };

  const getRightWidth = () => {
    if (rightCollapsed) return "w-[60px]";
    return "w-[20%]";
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
        canCollapse={true}
      />
    </div>
  );
};
