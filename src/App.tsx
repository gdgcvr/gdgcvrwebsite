
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Calendar from "./pages/Calendar";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";

const queryClient = new QueryClient();

const knownRoutes = ["/", "/team", "/events", "/calendar", "/blog"];

const isKnownRoute = (pathname: string) => {
  if (knownRoutes.includes(pathname)) return true;
  if (pathname.startsWith("/blog/")) return true;
  return false;
};

const AppRoutes = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(() => isKnownRoute(pathname));

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/team" element={<Team />} />
      <Route path="/events" element={<Events />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
