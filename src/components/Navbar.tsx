
import { Button } from "@/components/ui/button";
import { Mountain, Waves } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-skyBlue" />
            <Waves className="h-6 w-6 text-oceanBlue" />
            <span className="text-xl font-bold">Shred & Swell</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-neutral hover:text-oceanBlue transition-colors">Home</a>
            <a href="#" className="text-neutral hover:text-oceanBlue transition-colors">Activities</a>
            <a href="#" className="text-neutral hover:text-oceanBlue transition-colors">Community</a>
            <a href="#" className="text-neutral hover:text-oceanBlue transition-colors">Weather</a>
            <Button className="bg-oceanBlue hover:bg-skyBlue transition-colors">Join Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
