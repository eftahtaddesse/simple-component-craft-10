import React, { useState } from "react";
import { ArrowLeft, Settings, Plus } from "lucide-react";
interface TopBarProps {
  onPlusClick: () => void;
}
export const TopBar = ({
  onPlusClick
}: TopBarProps) => {
  const [title, setTitle] = useState("My Project");
  const [isEditing, setIsEditing] = useState(false);
  const handleTitleClick = () => {
    setIsEditing(true);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleTitleBlur = () => {
    setIsEditing(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };
  return <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4 bg-emerald-300">
      
      <div className="flex items-center gap-2">
        <button onClick={onPlusClick} aria-label="Create new item" className="p-2 bg-teal-500 hover:bg-teal-400 text-white rounded">
          <Plus size={20} />
        </button>
        
      </div>
    </div>;
};