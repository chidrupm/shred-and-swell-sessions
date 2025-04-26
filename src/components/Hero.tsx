
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container mx-auto px-4 pt-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Where Mountains Meet Waves
          </h1>
          <p className="text-xl mb-8">
            Join our community of passionate surfers and skiers. Share experiences,
            track conditions, and connect with fellow adventurers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-oceanBlue hover:bg-skyBlue transition-colors">
              Explore Activities
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
