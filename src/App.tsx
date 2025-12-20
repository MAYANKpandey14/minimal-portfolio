import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/optimized/ErrorBoundary";
import SkipNavigation from "@/components/optimized/SkipNavigation";
import SEOHead from "@/components/optimized/SEOHead";
import { siteContent } from "@/data/content";
import { trackWebVitals } from "@/lib/performance";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize performance tracking
    trackWebVitals();
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <SEOHead 
              title={siteContent.seo.title}
              description={siteContent.seo.description}
              structuredData={siteContent.structuredData}
            />
            <SkipNavigation />
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
