
import React from "react";
import { LeftCard } from "./LeftCard";
import { MiddleCard } from "./MiddleCard";
import { RightCard } from "./RightCard";

export const CardLayout = () => {
  return (
    <div className="flex flex-1 p-4 gap-4 overflow-hidden">
      <LeftCard />
      <MiddleCard />
      <RightCard />
    </div>
  );
};
