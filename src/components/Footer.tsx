import { Button } from "@/components/ui/button";
import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Logo and description */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <span className="text-2xl font-bold font-mono">pin'npm</span>
              <span className="text-primary">📌</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Built for devs who forget what they starred.
            </p>
          </div>
          
          {/* Right side - Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="font-mono">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            
            <Button variant="ghost" size="sm" className="font-mono">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary" /> by developers, for developers
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 pin'npm. Not affiliated with npm, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;