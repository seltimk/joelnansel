import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Speaking() {
  const topics = [
    { title: "Unlocking Your Inner Genius", desc: "Helping individuals discover their hidden potential and unique abilities." },
    { title: "Mindful Practice for a Purpose-Driven Life", desc: "Building intentional habits and mindset for meaningful living." },
    { title: "Leadership for Global Relevance", desc: "Equipping young leaders with the mindset and skills needed to thrive globally." },
    { title: "Purpose and Vision", desc: "Helping young people gain clarity about direction and calling." },
    { title: "Choices and Destiny", desc: "Understanding how daily decisions shape the future." },
    { title: "Creating Value and Impact", desc: "Teaching how to build influence through service and contribution." }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Speaking That Inspires Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Empowering young people with purpose, leadership, and vision.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-primary opacity-20" />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Nansel Joel speaks at schools, conferences, youth gatherings, leadership events, and mentorship programs, delivering impactful messages that challenge people to grow intentionally and lead meaningfully.
          </p>
          <p className="text-xl font-medium text-primary uppercase tracking-widest">
            Practical • Inspiring • Engaging • Transformational
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-primary decoration-4 underline-offset-8">Speaking Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all group">
                  <CardContent className="pt-8 space-y-4">
                    <CheckCircle className="text-primary w-6 h-6 mb-2" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <h2 className="text-3xl font-bold">Interested in booking Nansel Joel for your event, conference, or program?</h2>
          <Button asChild size="lg" className="px-12 py-8 text-xl rounded-full">
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}