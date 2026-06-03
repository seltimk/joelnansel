import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Inspire and Impact Leadership Conference",
      desc: "A leadership conference designed to shape the mindset of teenagers and young leaders through mentorship, leadership training, networking, and transformational sessions.",
      
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c9029fb6-12d8-4ab7-aa9d-9ce88836bab6/leadership-conference-4a5e5591-1779226340604.webp"
    },
    {
      title: "The Purpose Tour",
      desc: "A traveling initiative focused on helping young people discover purpose, develop vision, and take intentional action toward impactful living.",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c9029fb6-12d8-4ab7-aa9d-9ce88836bab6/mentorship-hangout-81d931e9-1779226340105.webp"
    },
    {
      title: "Impact Youth Hangout",
      desc: "A youth-centered gathering designed to inspire growth, leadership, creativity, and positive community engagement.",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Projects & Initiatives</h1>
          <p className="mt-4 text-xl text-muted-foreground">Transforming lives through intentional action.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''} space-y-6`}>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.desc}</p>
                {project.theme && (
                  <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                    <p className="font-semibold text-primary">Theme:</p>
                    <p className="text-slate-800 italic">{project.theme}</p>
                  </div>
                )}
              </div>
              <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''} aspect-video rounded-2xl overflow-hidden shadow-2xl`}>
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}

          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-slate-900 text-white rounded-3xl p-12 text-center space-y-12"
          >
             <h2 className="text-4xl font-bold underline decoration-primary decoration-4 underline-offset-8">P.V.I Method</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Purpose', 'Value', 'Impact'].map((item, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="text-6xl font-black opacity-10">{idx + 1}</div>
                    <h3 className="text-2xl font-bold text-primary">{item}</h3>
                    <p className="text-slate-300">Building meaningful and impactful lives through strategic frameworks.</p>
                  </div>
                ))}
             </div>
             <p className="text-xl max-w-2xl mx-auto italic text-slate-400">
               Helping individuals build meaningful and impactful lives.
             </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}