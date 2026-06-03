import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">NANSEL JOEL</h3>
            <p className="text-muted-foreground max-w-xs">
              Speaker, writer, and youth development advocate passionate about helping young people discover purpose, create value, and make meaningful impact.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nansel_joel?igsh=bDRrNTZsbGYybmd5" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/nansel.demas" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nansel-joel-a9a560323?utm_source=share_via&utm_content=profile&utm_medium=member_android#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com/@wordsmith_j_nansel?si=MjuanoB5AkV4vqMG" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/speaking" className="text-muted-foreground hover:text-primary transition-colors">Speaking</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">nanseljoel777@gmail.com</li>
              <li className="text-muted-foreground">Based in Plateau State, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Nansel Joel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}