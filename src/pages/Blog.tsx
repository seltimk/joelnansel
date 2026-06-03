import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  const posts = [
    { title: "How to Discover Your Purpose", category: "Purpose" },
    { title: "The Power of Small Daily Choices", category: "Growth" },
    { title: "Leadership Lessons for Young People", category: "Leadership" },
    { title: "Why Mindset Matters", category: "Mindset" },
    { title: "Turning Passion Into Impact", category: "Impact" },
    { title: "Building a Purpose-Driven Life", category: "Purpose" }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Insights & Inspiration</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, lessons, and transformational ideas on purpose, leadership, growth, and impact.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-none shadow-sm bg-slate-50">
                  <CardHeader>
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{post.category}</div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Discover the core principles that drive intentional living and leadership in today's world...
                    </p>
                    <div className="mt-6 font-medium text-primary flex items-center gap-2">
                      Read More <span className="text-lg">→</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}