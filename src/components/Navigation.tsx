import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/principles", label: "12 RCM Principles" },
    { path: "/attitudes", label: "12 RCM Attitudes" },
    { path: "/about", label: "About" },
    { path: "/faq", label: "FAQs" }
  ];

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Root Cause Medicine
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 md:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Button asChild>
              <Link to="#book-consultation">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
