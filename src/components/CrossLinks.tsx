import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CrossLinksProps {
  context: "about" | "principles" | "attitudes" | "articles" | "faq";
}

const CrossLinks = ({ context }: CrossLinksProps) => {
  const allLinks = [
    { path: "/principles", label: "12 RCM Principles" },
    { path: "/attitudes", label: "12 RCM Attitudes" },
    { path: "/articles", label: "Articles" },
    { path: "/faq", label: "FAQs" },
    { path: "/about", label: "About" },
  ];

  // Order links based on context - most relevant first
  const orderedLinks = () => {
    switch (context) {
      case "about":
        return [
          { path: "/principles", label: "12 RCM Principles" },
          { path: "/attitudes", label: "12 RCM Attitudes" },
          { path: "/articles", label: "Articles" },
          { path: "/faq", label: "FAQs" },
        ];
      case "principles":
        return [
          { path: "/attitudes", label: "12 RCM Attitudes" },
          { path: "/articles", label: "Articles" },
          { path: "/about", label: "About" },
          { path: "/faq", label: "FAQs" },
        ];
      case "attitudes":
        return [
          { path: "/principles", label: "12 RCM Principles" },
          { path: "/articles", label: "Articles" },
          { path: "/about", label: "About" },
          { path: "/faq", label: "FAQs" },
        ];
      case "articles":
        return [
          { path: "/principles", label: "12 RCM Principles" },
          { path: "/attitudes", label: "12 RCM Attitudes" },
          { path: "/about", label: "About" },
          { path: "/faq", label: "FAQs" },
        ];
      case "faq":
        return [
          { path: "/principles", label: "12 RCM Principles" },
          { path: "/attitudes", label: "12 RCM Attitudes" },
          { path: "/articles", label: "Articles" },
          { path: "/about", label: "About" },
        ];
      default:
        return allLinks;
    }
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg">See Also</CardTitle>
      </CardHeader>
      <CardContent>
        <nav aria-label="Related content">
          <ul className="space-y-2">
            {orderedLinks().map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
};

export default CrossLinks;
