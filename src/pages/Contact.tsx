import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Instagram, Facebook, Linkedin, Youtube, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! Nansel will get back to you soon.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Let's Connect</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you want to invite Nansel Joel to speak, collaborate on a project, partner on an initiative, or simply connect, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Contact Details</h2>
                <div className="flex items-center gap-4 text-lg">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <a href="mailto:nanseljoel777@gmail.com" className="hover:text-primary transition-colors">
                    nanseljoel777@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Follow My Journey</h2>
                <div className="flex gap-4">
                  {[
                    { icon: <Instagram />, name: "Instagram" },
                    { icon: <Facebook />, name: "Facebook" },
                    { icon: <Linkedin />, name: "LinkedIn" },
                    { icon: <Youtube />, name: "YouTube" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="p-4 bg-slate-100 rounded-2xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white border p-8 md:p-12 rounded-3xl shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organization</Label>
                  <Input id="org" placeholder="Company or School Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Speaking Inquiry / Collaboration" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can Nansel help you?" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full h-14 text-lg gap-2" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Message <Send size={20} /></>}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}