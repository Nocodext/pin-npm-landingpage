import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ComingSoon from "@/components/ComingSoon";
import Differentiator from "@/components/Differentiator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ComingSoon />
      <Differentiator />
      <Footer />
    </div>
  );
};

export default Index;
