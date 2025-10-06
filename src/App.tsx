import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Principles from "./pages/Principles";
import Attitudes from "./pages/Attitudes";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Articles from "./pages/Articles";
import FocusingOnRootCauses from "./pages/articles/FocusingOnRootCauses";
import IntroductionToRootCauses from "./pages/articles/IntroductionToRootCauses";
import DoctorsAreExperts from "./pages/articles/DoctorsAreExperts";
import FeverWelcome from "./pages/articles/FeverWelcome";
import ObesityDrugs from "./pages/articles/ObesityDrugs";
import UnhealthyFood from "./pages/articles/UnhealthyFood";
import HighlyProcessedFood from "./pages/articles/HighlyProcessedFood";
import GeneticallyModifiedFood from "./pages/articles/GeneticallyModifiedFood";
import ReasonBehindGMOs from "./pages/articles/ReasonBehindGMOs";
import ExaminingGMONarratives from "./pages/articles/ExaminingGMONarratives";
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
          <Route path="/principles" element={<Principles />} />
          <Route path="/attitudes" element={<Attitudes />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/focusing-on-root-causes" element={<FocusingOnRootCauses />} />
          <Route path="/articles/introduction-to-root-causes" element={<IntroductionToRootCauses />} />
          <Route path="/articles/doctors-are-experts" element={<DoctorsAreExperts />} />
          <Route path="/articles/fever-welcome" element={<FeverWelcome />} />
          <Route path="/articles/obesity-drugs" element={<ObesityDrugs />} />
          <Route path="/articles/unhealthy-food" element={<UnhealthyFood />} />
          <Route path="/articles/highly-processed-food" element={<HighlyProcessedFood />} />
          <Route path="/articles/genetically-modified-food" element={<GeneticallyModifiedFood />} />
          <Route path="/articles/reason-behind-gmos" element={<ReasonBehindGMOs />} />
          <Route path="/articles/examining-gmo-narratives" element={<ExaminingGMONarratives />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
