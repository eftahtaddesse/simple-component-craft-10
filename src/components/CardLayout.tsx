
import React, { useState, useRef, useEffect } from "react";
import { LeftCard } from "./LeftCard";
import { MiddleCard } from "./MiddleCard";
import { RightCard } from "./RightCard";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./ui/resizable";

export const CardLayout = () => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [middleCollapsed, setMiddleCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  // References to store panel sizes
  const leftSizeRef = useRef(30);
  const middleSizeRef = useRef(50);
  const rightSizeRef = useRef(20);

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

  const handleRightCollapseChange = (collapsed: boolean) => {
    setRightCollapsed(collapsed);
  }

  // Handle resize events to store panel sizes when they're manually resized
  const handleLeftResize = (size: number) => {
    if (!leftCollapsed) leftSizeRef.current = size;
  };

  const handleMiddleResize = (size: number) => {
    if (!middleCollapsed) middleSizeRef.current = size;
  };

  const handleRightResize = (size: number) => {
    if (!rightCollapsed) rightSizeRef.current = size;
  };

  return (
    <ResizablePanelGroup 
      direction="horizontal" 
      className="flex-1 p-4 gap-4 overflow-hidden"
    >
      <ResizablePanel 
        defaultSize={30} 
        minSize={leftCollapsed ? 5 : 15}
        maxSize={leftCollapsed ? 5 : 60}
        collapsible={leftCollapsed}
        onResize={handleLeftResize}
      >
        <LeftCard 
          isCollapsed={leftCollapsed} 
          onCollapseChange={handleLeftCollapseChange} 
          canCollapse={!middleCollapsed} 
        />
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      
      <ResizablePanel 
        defaultSize={50} 
        minSize={middleCollapsed ? 5 : 20}
        maxSize={middleCollapsed ? 5 : 70}
        collapsible={middleCollapsed}
        onResize={handleMiddleResize}
      >
        <MiddleCard 
          isCollapsed={middleCollapsed} 
          onCollapseChange={handleMiddleCollapseChange}
          canCollapse={!leftCollapsed}
        />
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      
      <ResizablePanel 
        defaultSize={20} 
        minSize={rightCollapsed ? 5 : 10}
        maxSize={rightCollapsed ? 5 : 30}
        collapsible={rightCollapsed}
        onResize={handleRightResize}
      >
        <RightCard 
          isCollapsed={rightCollapsed} 
          onCollapseChange={handleRightCollapseChange} 
          canCollapse={true}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
