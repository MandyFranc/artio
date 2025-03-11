
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';
import BetaSignupForm from '@/components/BetaSignupForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <Demo />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-artPurple-500 to-artPurple-700 opacity-90" aria-hidden="true"></div>
          <div className="absolute -left-10 top-0 h-96 w-96 rounded-full bg-artPurple-400 opacity-30 filter blur-3xl" aria-hidden="true"></div>
          <div className="absolute -right-10 bottom-0 h-96 w-96 rounded-full bg-artPurple-800 opacity-30 filter blur-3xl" aria-hidden="true"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Art Experience?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Be among the first to try Artio and start exploring the hidden stories behind every artwork.
              </p>
              <div className="flex justify-center">
                <BetaSignupForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
