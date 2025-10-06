import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const articles = [
  {
    id: "focusing-on-root-causes",
    title: "The First RCM Principle - Focusing on Root Causes",
    excerpt: "Understanding the fundamental approach of Root Cause Medicine.",
    path: "/articles/focusing-on-root-causes"
  },
  {
    id: "introduction-to-root-causes",
    title: "Introduction to Root Causes of Illness",
    excerpt: "Exploring the underlying factors that contribute to disease.",
    path: "/articles/introduction-to-root-causes"
  },
  {
    id: "doctors-are-experts",
    title: "'Doctors Are Experts.' Of Course – But in What, Specifically?",
    excerpt: "Examining the nature of medical expertise in modern healthcare.",
    path: "/articles/doctors-are-experts"
  },
  {
    id: "fever-welcome",
    title: "Why Fever Should Be Welcome, Not Feared",
    excerpt: "Understanding the beneficial role of fever in healing.",
    path: "/articles/fever-welcome"
  },
  {
    id: "obesity-drugs",
    title: "How Not To Tackle Obesity",
    excerpt: "A critical look at weight loss medications and better alternatives.",
    path: "/articles/obesity-drugs"
  },
  {
    id: "unhealthy-food",
    title: "Introduction to Unhealthy Food",
    excerpt: "Identifying what makes modern food problematic for health.",
    path: "/articles/unhealthy-food"
  },
  {
    id: "highly-processed-food",
    title: "Highly Processed Food",
    excerpt: "The impact of food processing on nutrition and health.",
    path: "/articles/highly-processed-food"
  },
  {
    id: "genetically-modified-food",
    title: "Genetically Modified Food",
    excerpt: "Understanding GMOs and their implications for health.",
    path: "/articles/genetically-modified-food"
  },
  {
    id: "reason-behind-gmos",
    title: "The Main Reason Behind GMOs",
    excerpt: "Examining the motivations driving genetic modification.",
    path: "/articles/reason-behind-gmos"
  },
  {
    id: "examining-gmo-narratives",
    title: "Examining GMO Narratives",
    excerpt: "A critical analysis of common GMO marketing claims.",
    path: "/articles/examining-gmo-narratives"
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-4">
          Articles
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Explore in-depth articles about Root Cause Medicine principles and practices.
        </p>
        <p className="text-muted-foreground mb-12">
          Looking for the fundamentals? Check out the <Link to="/principles" className="text-primary hover:underline font-medium">12 RCM Principles</Link> and <Link to="/attitudes" className="text-primary hover:underline font-medium">12 RCM Attitudes</Link>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} to={article.path}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary hover:text-primary/80 font-medium">
                    Read More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Articles;
