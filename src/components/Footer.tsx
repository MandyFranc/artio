
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-artGray-900 border-t border-artGray-200 dark:border-artGray-800">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-display font-bold bg-clip-text text-transparent art-gradient">ArtScan</span>
            </div>
            <p className="text-artGray-600 dark:text-artGray-300 mb-4">
              Enhancing art experiences through technology that connects visitors with the stories behind great artwork.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-artGray-600 hover:text-artPurple-500 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-artGray-600 hover:text-artPurple-500 transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-artGray-600 hover:text-artPurple-500 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-artGray-600 hover:text-artPurple-500 transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-artGray-200 dark:border-artGray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-artGray-600 dark:text-artGray-300 text-sm">
            © {currentYear} ArtScan. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
