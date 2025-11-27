import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import SilicaSand from "./pages/SilicaSand";
import Kaolin from "./pages/Kaolin";
import Quartz from "./pages/Quartz";
import BleachingEarth from "./pages/BleachingEarth";
import ClayCatalysts from "./pages/ClayCatalysts";
import Feldspar from "./pages/Feldspar";
import Bentonite from "./pages/Bentonite";
import Agriculture from "./pages/Agriculture";
import OilWaterDrilling from "./pages/OilWaterDrilling";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/silica-sand" element={<SilicaSand />} />
          <Route path="/kaolin" element={<Kaolin />} />
          <Route path="/quartz" element={<Quartz />} />
          <Route path="/bleaching-earth" element={<BleachingEarth />} />
          <Route path="/clay-catalysts" element={<ClayCatalysts />} />
          <Route path="/feldspar" element={<Feldspar />} />
          <Route path="/bentonite" element={<Bentonite />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/oil-water-drilling" element={<OilWaterDrilling />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
