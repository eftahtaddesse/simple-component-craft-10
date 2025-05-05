
import React, { useState } from "react";
import { ArrowLeft, Settings, Plus } from "lucide-react";

interface TopBarProps {
  onPlusClick: () => void;
}

export const TopBar = ({ onPlusClick }: TopBarProps) => {
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

  return (
    <div className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft size={20} />
        </button>
        <div className="ml-4">
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              onKeyDown={handleKeyDown}
              className="font-semibold text-lg border-b border-blue-500 focus:outline-none"
              autoFocus
            />
          ) : (
            <h1
              className="font-semibold text-lg cursor-pointer"
              onClick={handleTitleClick}
            >
              {title}
            </h1>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button 
          className="p-2 rounded-full hover:bg-gray-100 text-blue-600"
          onClick={onPlusClick}
          aria-label="Create new item"
        >
          <Plus size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};
