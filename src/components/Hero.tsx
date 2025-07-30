import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chrome, Pin } from "lucide-react";
const mockupImage = "/lovable-uploads/0971c953-b2a0-4833-ab4a-ac2da372165d.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <Badge variant="secondary" className="mb-6 font-mono text-sm">
            🚀 Chrome Extension
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your personal{" "}
            <span className="text-primary font-mono">pinboard</span>{" "}
            for npm packages
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Pin packages directly from npmjs.com. Organize, reuse, export.{" "}
            <span className="font-semibold text-foreground">No more hunting.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="font-mono font-semibold">
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome
            </Button>
            <Button variant="outline" size="lg" className="font-mono" asChild>
              <a href="#waitlist">Join the waitlist</a>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Pin className="h-4 w-4 text-primary" />
              <span>Free forever</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span>No personal data collected</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span>Open source</span>
          </div>
        </div>
        
        {/* Right Mockup */}
        <div className="flex-1 relative">
          <div className="relative animate-float">
            <img
              src={mockupImage}
              alt="pin'npm Chrome extension mockup showing pin button on npm package page"
              className="w-full h-auto rounded-lg shadow-2xl border border-border"
            />
            <div className="absolute -top-4 -right-4 animate-glow">
              <Badge className="bg-primary text-primary-foreground font-mono font-semibold">
                📌 Pin button
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
