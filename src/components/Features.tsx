
import { Camera, Headphones, Wifi, Clock, Database, Map } from 'lucide-react';

const features = [
  {
    title: "Image Recognition",
    description: "Advanced AI identifies artworks quickly and accurately even in challenging lighting conditions.",
    icon: Camera,
  },
  {
    title: "Audio Playback",
    description: "High-quality narration provides detailed insights about each piece of art you scan.",
    icon: Headphones,
  },
  {
    title: "Offline Mode",
    description: "Download audio guides before your visit for access without an internet connection.",
    icon: Wifi,
  },
  {
    title: "Save Favorites",
    description: "Build a personal collection of artworks you've discovered and want to remember.",
    icon: Clock,
  },
  {
    title: "Extensive Database",
    description: "Access information on thousands of artworks from museums and galleries worldwide.",
    icon: Database,
  },
  {
    title: "Gallery Maps",
    description: "Navigate museums and galleries with built-in maps showing artwork locations.",
    icon: Map,
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-artGray-600 dark:text-artGray-300">
            Our app is designed to enhance your art viewing experience with these powerful capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="glass-card h-full p-6 transition-all duration-300 hover:shadow-xl hover:border-artPurple-200 dark:hover:border-artPurple-700">
                <div className="h-12 w-12 rounded-lg bg-artPurple-100 dark:bg-artPurple-900/30 flex items-center justify-center mb-4 group-hover:bg-artPurple-500 transition-colors">
                  <feature.icon className="h-6 w-6 text-artPurple-500 dark:text-artPurple-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-artGray-600 dark:text-artGray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
