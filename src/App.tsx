import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all routes for better performance
const AboutUs = lazy(() => import("./pages/AboutUs"));
const SilicaSand = lazy(() => import("./pages/SilicaSand"));
const Kaolin = lazy(() => import("./pages/Kaolin"));
const Quartz = lazy(() => import("./pages/Quartz"));
const BleachingEarth = lazy(() => import("./pages/BleachingEarth"));
const ClayCatalysts = lazy(() => import("./pages/ClayCatalysts"));
const Feldspar = lazy(() => import("./pages/Feldspar"));
const Bentonite = lazy(() => import("./pages/Bentonite"));
const Agriculture = lazy(() => import("./pages/Agriculture"));
const OilWaterDrilling = lazy(() => import("./pages/OilWaterDrilling"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff6b35]"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
