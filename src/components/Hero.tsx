import { Scan, Play, Headphones } from 'lucide-react';
import BetaSignupForm from '@/components/BetaSignupForm';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-artPurple-200 bg-artPurple-50 dark:bg-artPurple-900/20 px-4 py-1.5 text-sm font-medium text-artPurple-500 dark:text-artPurple-300">
              <span className="flex h-2 w-2 rounded-full bg-artPurple-500 dark:bg-artPurple-400 mr-2" aria-hidden="true"></span>
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
              <BetaSignupForm />
            </div>
            <div className="flex items-center space-x-4 text-sm text-artGray-500">
              <div className="flex items-center">
                <Scan className="mr-1 h-4 w-4 text-artPurple-500" aria-hidden="true" />
                <span>Instant Scanning</span>
              </div>
              <div className="flex items-center">
                <Headphones className="mr-1 h-4 w-4 text-artPurple-500" aria-hidden="true" />
                <span>Audio Guides</span>
              </div>
              <div className="flex items-center">
                <Play className="mr-1 h-4 w-4 text-artPurple-500" aria-hidden="true" />
                <span>Offline Access</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-artPurple-400 opacity-20 filter blur-3xl" aria-hidden="true"></div>
            <div className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-artPurple-600 opacity-20 filter blur-3xl" aria-hidden="true"></div>
            <div className="relative w-full max-w-md mx-auto animate-float z-10">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-artPurple-400 to-artPurple-600 opacity-20 blur-xl" aria-hidden="true"></div>
                <div className="glass-card p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/lovable-uploads/148b217b-9aa4-4ca9-b374-10ed58453028.png"
                      alt="Portrait of Jean-Michel Basquiat" 
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div>
                      <p className="text-sm text-artGray-500">Featured Artist</p>
                      <h3 className="text-xl font-bold">Jean-Michel Basquiat</h3>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3" 
                      alt="Basquiat artwork example" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105"
                        aria-label="Play audio guide"
                      >
                        <Play className="h-8 w-8 text-artPurple-500" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                  <div className="h-1 bg-artGray-200 rounded-full">
                    <div className="h-full w-1/3 bg-artPurple-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-artPurple-500" />
                      <span className="text-sm text-artGray-600">Audio Guide</span>
                    </div>
                    <span className="text-sm text-artGray-500">2:45 / 8:30</span>
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
