
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // Simulate progress
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
    }
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-artGray-50 dark:bg-artGray-900/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-lg text-artGray-600 dark:text-artGray-300">
            Experience how the app scans artwork and delivers informative audio guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-artPurple-400 opacity-10 filter blur-3xl"></div>
            <div className="glass-card overflow-hidden p-4 relative z-10">
              <div className="aspect-video rounded-lg overflow-hidden bg-artGray-200 dark:bg-artGray-800 relative">
                <img 
                  src="https://images.unsplash.com/photo-1544967082-d9d25d867d66" 
                  alt="Art Gallery Exhibition" 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="w-full p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Button 
                          onClick={togglePlay} 
                          size="icon" 
                          variant="ghost" 
                          className="bg-white text-artGray-900 hover:bg-white/90 rounded-full h-10 w-10"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </Button>
                        <span className="ml-3 text-white font-medium">
                          {isPlaying ? "Listening to audio guide..." : "Start audio guide"}
                        </span>
                      </div>
                      <Button 
                        onClick={resetDemo} 
                        size="icon" 
                        variant="ghost" 
                        className="text-white/80 hover:text-white hover:bg-white/10 rounded-full h-10 w-10"
                      >
                        <RotateCcw size={16} />
                      </Button>
                    </div>
                    
                    <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-artPurple-500 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold">Unlock the Stories Behind Great Art</h3>
            <p className="text-lg text-artGray-600 dark:text-artGray-300">
              Our app uses advanced image recognition to identify artwork and provide detailed audio explanations tailored to each piece you encounter.
            </p>
            <ul className="space-y-3">
              <li className="flex">
                <div className="mr-3 text-artPurple-500">✓</div>
                <span>Instant artwork recognition in any lighting condition</span>
              </li>
              <li className="flex">
                <div className="mr-3 text-artPurple-500">✓</div>
                <span>Expert-curated audio guides for thousands of artworks</span>
              </li>
              <li className="flex">
                <div className="mr-3 text-artPurple-500">✓</div>
                <span>Adjustable playback speed and volume controls</span>
              </li>
              <li className="flex">
                <div className="mr-3 text-artPurple-500">✓</div>
                <span>Save favorites for later reference and exploration</span>
              </li>
            </ul>
            <Button className="art-button">
              Try For Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
