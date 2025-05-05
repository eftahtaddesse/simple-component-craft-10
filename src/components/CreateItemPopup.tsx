
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Folder, Notebook, Import, Upload } from "lucide-react";

interface CreateItemPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateItemPopup = ({ open, onOpenChange }: CreateItemPopupProps) => {
  const [itemType, setItemType] = useState<"folder" | "notebook">("folder");
  const [name, setName] = useState("");
  const [sources, setSources] = useState<string[]>([]);

  const handleSwitchChange = (checked: boolean) => {
    setItemType(checked ? "notebook" : "folder");
  };

  const handleImport = () => {
    // Handle import functionality
    setSources([...sources, "Imported source " + (sources.length + 1)]);
  };

  const handleUpload = () => {
    // Handle upload functionality
    setSources([...sources, "Uploaded source " + (sources.length + 1)]);
  };

  const handleCreate = () => {
    // Handle creation based on itemType
    console.log(`Creating ${itemType} named "${name}" with sources:`, sources);
    // Reset form
    setName("");
    setSources([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New {itemType === "folder" ? "Folder" : "Notebook"}</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Folder className={itemType === "folder" ? "text-blue-600" : "text-gray-400"} size={20} />
              <Label htmlFor="item-type-switch">Folder</Label>
            </div>
            
            <Switch 
              id="item-type-switch" 
              checked={itemType === "notebook"}
              onCheckedChange={handleSwitchChange}
            />
            
            <div className="flex items-center gap-2">
              <Label htmlFor="item-type-switch">Notebook</Label>
              <Notebook className={itemType === "notebook" ? "text-blue-600" : "text-gray-400"} size={20} />
            </div>
          </div>
          
          <div className="mb-6">
            <Label htmlFor="item-name" className="block mb-2">Name</Label>
            <Input 
              id="item-name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          {itemType === "notebook" && (
            <>
              <div className="flex gap-2 mb-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleImport}
                >
                  <Import size={16} className="mr-2" /> Import
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleUpload}
                >
                  <Upload size={16} className="mr-2" /> Upload
                </Button>
              </div>
              
              {sources.length > 0 && (
                <div className="border rounded-md p-3 mb-4">
                  <Label className="block mb-2">Sources</Label>
                  <ul className="space-y-1 max-h-24 overflow-y-auto">
                    {sources.map((source, index) => (
                      <li key={index} className="text-sm p-1 bg-gray-50 rounded">{source}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" className="mr-2" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={!name.trim()}>
            Create {itemType === "folder" ? "Folder" : "Notebook"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
