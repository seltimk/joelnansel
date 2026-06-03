import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Target, Users, BookOpen, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[url('https://storage.googleapis.com/dala-prod-public-storage/attachments/20b08272-65e8-426d-900c-11e01a7ce0ba/1780310774226_NANSEL_PORTRAIT.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Background overlay for readability */}
        <div className="absolute inset-0 bg-white/85 -z-0"></div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Helping Young People Discover <span className="text-primary">Purpose</span>, Create <span className="text-primary">Value</span>, and Make <span className="text-primary">Impact</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I am Nansel Joel — speaker, writer, mentor, and founder of Inspire and Impact Africa, committed to raising purpose-driven young leaders for positive global change.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/contact">Book Me to Speak</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">Explore My Work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Join the Community</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/20b08272-65e8-426d-900c-11e01a7ce0ba/1780311535785_NANSEL_PORTRAIT.jpg"
                alt="Nansel Joel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Short Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold">Raising Leaders. Inspiring Purpose. Creating Impact.</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
          </motion.div>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed">
            Through leadership conferences, mentorship programs, writing, and transformational speaking, I help teenagers and young people unlock their potential, discover their purpose, and become agents of change in their communities and beyond.
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-slate-50 p-8 rounded-2xl">
            <p className="text-xl font-medium italic">
              "My mission is simple: To inspire a generation of young leaders who live intentionally, lead boldly, and create meaningful impact."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8 text-primary" />, title: "Purpose Discovery", desc: "Helping young people identify their gifts, strengths, and calling." },
              { icon: <Users className="w-8 h-8 text-primary" />, title: "Leadership Development", desc: "Equipping emerging leaders with mindset, character, and practical leadership skills." },
              { icon: <Star className="w-8 h-8 text-primary" />, title: "Youth Empowerment", desc: "Creating opportunities for growth, mentorship, and transformation." },
              { icon: <BookOpen className="w-8 h-8 text-primary" />, title: "Writing & Content Creation", desc: "Sharing life-changing ideas through books, articles, and inspirational content." }
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-8 space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                    <p className="text-muted-foreground">{area.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Quote className="w-12 h-12 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight italic">
            "Your future is not built by chance, but by the choices you make daily."
          </h2>
          <p className="mt-6 text-xl opacity-90">— Nansel Joel</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/20b08272-65e8-426d-900c-11e01a7ce0ba/1780311535785_NANSEL_PORTRAIT.jpg"
                alt="Meet Nansel"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
            <h2 className="text-3xl font-bold">Meet Nansel Joel</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nansel Joel is a speaker, writer, mentor, and youth development advocate passionate about helping young people live purpose-driven lives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Growing up in Langtang with limited exposure and guidance shaped his passion for mentorship and transformation. Today, he dedicates his life to equipping teenagers and youth with the mindset, leadership skills, and opportunities they need to thrive and make meaningful impact.
            </p>
            <Button asChild variant="link" className="px-0 text-primary text-lg">
              <Link to="/about" className="flex items-center gap-2">
                Read Full Story <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Projects & Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transformational programs designed to equip and empower the next generation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Inspire and Impact Leadership Conference", desc: "A transformational leadership conference designed to equip teenagers and students with leadership skills, mindset development, and vision." },
              { title: "The Purpose Tour", desc: "A movement focused on helping young people discover purpose, develop vision, and take intentional action." },
              { title: "Impact Youth Hangout", desc: "A platform that inspires youth to embrace opportunities for personal growth and community transformation." },
              { title: "P.V.I Method", desc: "A transformational framework centered on Purpose, Value, and Impact to help individuals create meaningful lives." }
            ].map((project, i) => (
              <Card key={i} className="hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Speaking & Training</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nansel Joel speaks at conferences, leadership events, schools, youth gatherings, and mentorship programs, delivering transformational messages that inspire growth.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Unlocking Your Inner Genius",
                "Leadership and Influence",
                "Discovering Your Purpose",
                "Creating Value and Impact"
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">{topic}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg">
              <Link to="/speaking">Invite Me to Speak</Link>
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c9029fb6-12d8-4ab7-aa9d-9ce88836bab6/leadership-conference-4a5e5591-1779226340604.webp"
              alt="Speaking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">What People Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Nansel's message challenged me to believe in myself and take responsibility for my future.",
              "His passion for youth development is inspiring and transformational.",
              "The conference completely changed my mindset about leadership and purpose."
            ].map((t, i) => (
              <Card key={i} className="bg-white border-none shadow-sm italic p-8 text-center text-lg text-muted-foreground relative">
                <Quote className="absolute top-4 left-4 w-6 h-6 text-primary/10" />
                "{t}"
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">A Generation Rising With Purpose</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            The future belongs to young people who are willing to grow, lead, and create impact intentionally. Join the movement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}