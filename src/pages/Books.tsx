import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

export default function Books() {
  const resources = [
    { 
      title: "Atomic Choices", 
      desc: "A transformational book focused on the power of daily decisions and intentional living.",
      status: "Coming Soon",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c9029fb6-12d8-4ab7-aa9d-9ce88836bab6/atomic-choices-book-284945f5-1779226339397.webp"
    },
    { 
      title: "Choices: Deciding Your Tomorrow Today", 
      desc: "An inspiring guide on making intentional choices that shape the future.",
      status: "Coming Soon"
    },
    { 
      title: "Journals, Planners & Workbooks", 
      desc: "Tools designed to help individuals grow in productivity, vision, purpose, and personal development.",
      status: "In Development"
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Books & Resources</h1>
          <p className="mt-4 text-xl text-muted-foreground">Wisdom for intentional living.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full overflow-hidden flex flex-col">
                  {res.img ? (
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={res.img} alt={res.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-[3/4] bg-slate-100 flex items-center justify-center p-12 text-center text-slate-400">
                      <div className="space-y-4">
                        <Book size={64} className="mx-auto opacity-20" />
                        <p className="text-lg font-medium">{res.title}</p>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-8 flex-grow space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">{res.title}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">{res.status}</Badge>
                    </div>
                    <p className="text-muted-foreground">{res.desc}</p>
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