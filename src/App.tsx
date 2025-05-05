
import { TopBar } from "./components/TopBar";
import { CreateItemPopup } from "./components/CreateItemPopup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col h-screen bg-gray-100">
          <TopBar onPlusClick={() => setIsPopupOpen(true)} />
          <div className="flex-1 p-4">
            {/* Main content area is now empty */}
          </div>
          <CreateItemPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
