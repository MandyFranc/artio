
import { Camera, Headphones, BookOpen } from 'lucide-react';

const steps = [
  {
    title: "Scan the Artwork",
    description: "Point your phone camera at any painting, sculpture, or installation to instantly identify it.",
    icon: Camera,
    color: "bg-blue-500"
  },
  {
    title: "Listen to the Story",
    description: "Hear detailed audio explanations about the artwork's history, artist, and meaning.",
    icon: Headphones,
    color: "bg-artPurple-500"
  },
  {
    title: "Explore Deeper",
    description: "Access additional information, similar works, and related historical context.",
    icon: BookOpen,
    color: "bg-pink-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-artGray-50 dark:bg-artGray-900/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-artGray-600 dark:text-artGray-300">
            Get started in three simple steps and enhance your art viewing experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-6 h-full flex flex-col items-center text-center">
                <div className={`${step.color} rounded-full p-4 mb-6`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-artGray-600 dark:text-artGray-300">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H38M38 6L33 1M38 6L33 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-artGray-300 dark:text-artGray-600" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
