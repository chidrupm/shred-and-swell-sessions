
import { Mountain, Waves } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Activities = () => {
  return (
    <section className="py-20 bg-lightBg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Activities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Waves className="h-8 w-8 text-oceanBlue" />
              <CardTitle>Surfing Adventures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
                  alt="Surfer on a wave"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-neutral">
                Catch the perfect wave with our community of surfers. From beginners
                to pros, discover the best spots and latest conditions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Mountain className="h-8 w-8 text-skyBlue" />
              <CardTitle>Skiing Expeditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                  alt="Snowy mountain landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-neutral">
                Hit the slopes with fellow snow enthusiasts. Find the best runs,
                share tips, and stay updated on snow conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;
