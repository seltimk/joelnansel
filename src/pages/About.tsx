import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            My Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From limited exposure to empowering a generation of purpose-driven leaders.
          </motion.p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
             <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/attachments/20b08272-65e8-426d-900c-11e01a7ce0ba/1780311285956_NANSEL_PORTRAIT.jpg" 
                  alt="Nansel Joel Portrait" 
                  className="w-full h-auto object-cover"
                />
             </div>
             <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Nansel Joel</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Nansel Joel is a speaker, writer, mentor, and youth development advocate passionate about raising a generation of purposeful and impactful leaders.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Born and raised in Langtang, Plateau State, Nigeria, Nansel experienced firsthand the challenges that come with limited exposure, direction, and mentorship.
                </p>
             </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground prose prose-slate max-w-none">
            <p>
              Driven by the belief that youth are key to building a brighter future, he founded Inspire and Impact Africa, a youth-focused organization committed to mentorship, leadership development, and empowerment.
            </p>
            <p>
              Through conferences, mentorship programs, leadership training, and transformational content, Nansel has continued to inspire young people to think differently, lead intentionally, and create meaningful impact in their communities and beyond.
            </p>
            <p>
              His work centers around purpose discovery, leadership development, personal growth, and value creation. He is also passionate about climate advocacy and believes that young people have a critical role to play in shaping a better future for the world.
            </p>
            <p>
              As a writer and speaker, Nansel shares transformational ideas that encourage people to embrace growth, make intentional choices, and live lives of significance.
            </p>
            <p className="font-medium text-foreground">
              His vision is to help raise purpose-driven leaders who will influence society positively and create lasting change globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t">
            <motion.div {...fadeInUp} className="bg-primary p-8 rounded-2xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-lg opacity-90">To inspire and equip young people to discover purpose, create value, and make meaningful impact.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-lg opacity-90">To raise purpose-driven leaders for positive global transformation.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}