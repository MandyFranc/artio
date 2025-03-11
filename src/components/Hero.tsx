import { Scan, Play, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-artPurple-200 bg-artPurple-50 dark:bg-artPurple-900/20 px-4 py-1.5 text-sm font-medium text-artPurple-500 dark:text-artPurple-300">
              <span className="flex h-2 w-2 rounded-full bg-artPurple-500 dark:bg-artPurple-400 mr-2"></span>
              Experience Art Like Never Before
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Discover the story behind every artwork
              <span className="bg-clip-text text-transparent art-gradient"> in audio</span>
            </h1>
            <p className="text-xl text-artGray-600 dark:text-artGray-300 max-w-[600px]">
              Simply scan any painting, sculpture, or installation to instantly hear its context, meaning, and history from Artio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="art-button">
                Sign Up for Beta
              </Button>
              <Button variant="outline" className="art-button-outline">
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-artGray-500">
              <div className="flex items-center">
                <Scan className="mr-1 h-4 w-4 text-artPurple-500" />
                <span>Instant Scanning</span>
              </div>
              <div className="flex items-center">
                <Headphones className="mr-1 h-4 w-4 text-artPurple-500" />
                <span>Audio Guides</span>
              </div>
              <div className="flex items-center">
                <Play className="mr-1 h-4 w-4 text-artPurple-500" />
                <span>Offline Access</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-artPurple-400 opacity-20 filter blur-3xl"></div>
            <div className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-artPurple-600 opacity-20 filter blur-3xl"></div>
            <div className="relative w-full max-w-md mx-auto animate-float z-10">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-artPurple-400 to-artPurple-600 opacity-20 blur-xl"></div>
                <div className="glass-card p-4 overflow-hidden">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3" 
                      alt="Art gallery with visitor scanning artwork" 
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-4 flex items-center p-2">
                    <div className="bg-artPurple-100 dark:bg-artPurple-900/40 rounded-full p-2 mr-4">
                      <Headphones className="h-6 w-6 text-artPurple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">The Starry Night</h3>
                      <p className="text-sm text-artGray-500">Vincent van Gogh, 1889</p>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-artPurple-500 rounded-full p-2">
                        <Play className="h-4 w-4 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
