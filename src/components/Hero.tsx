
import { Scan, Play, Headphones, Info, Clock } from 'lucide-react';
import BetaSignupForm from '@/components/BetaSignupForm';
import { Button } from '@/components/ui/button';

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
                <div className="glass-card p-5 overflow-hidden">
                  {/* Artwork Image */}
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                      alt="Person enjoying artwork in a modern art gallery with headphones" 
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Artwork Details */}
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-medium">Modern Expressions</h3>
                    <p className="text-sm text-artGray-500">Contemporary Gallery, New York</p>
                    <div className="mt-2 flex items-center text-sm text-artGray-500">
                      <Info className="h-4 w-4 text-artPurple-500 mr-1" aria-hidden="true" />
                      <span>Abstract, 2023</span>
                    </div>
                  </div>
                  
                  {/* Audio Player */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-artPurple-100 dark:bg-artPurple-900/40 rounded-full p-2 mr-3">
                          <Headphones className="h-5 w-5 text-artPurple-500" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Audio Guide</h4>
                          <div className="flex items-center text-xs text-artGray-500">
                            <Clock className="h-3 w-3 mr-1" aria-hidden="true" /> 
                            <span>4:32</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="default" className="bg-artPurple-500 hover:bg-artPurple-600 rounded-full h-10 w-10 p-0 flex items-center justify-center" aria-label="Play audio guide">
                        <Play className="h-5 w-5 text-white" fill="white" aria-hidden="true" />
                      </Button>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-artGray-200 dark:bg-artGray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[35%] bg-artPurple-500 rounded-full"></div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between pt-1">
                      <Button variant="ghost" size="sm" className="text-xs text-artGray-500 hover:text-artPurple-500 p-1 h-auto">
                        Download
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs text-artGray-500 hover:text-artPurple-500 p-1 h-auto">
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs text-artGray-500 hover:text-artPurple-500 p-1 h-auto">
                        Save for later
                      </Button>
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
