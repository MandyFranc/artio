import { useState } from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import PolicyModal from './PolicyModal';
import { PrivacyPolicyContent, TermsOfServiceContent, CookiesPolicyContent } from './PolicyContents';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  return <footer className="bg-white dark:bg-artGray-900 border-t border-artGray-200 dark:border-artGray-800">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        
        
        <div className="border-t border-artGray-200 dark:border-artGray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-artGray-600 dark:text-artGray-300 text-sm">
            © {currentYear} Artio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <button onClick={() => setIsPrivacyOpen(true)} className="text-sm text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Privacy
            </button>
            <button onClick={() => setIsTermsOpen(true)} className="text-sm text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Terms
            </button>
            <button onClick={() => setIsCookiesOpen(true)} className="text-sm text-artGray-600 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
      
      {/* Policy Modals */}
      <PolicyModal isOpen={isPrivacyOpen} setIsOpen={setIsPrivacyOpen} title="Privacy Policy" content={<PrivacyPolicyContent />} />
      
      <PolicyModal isOpen={isTermsOpen} setIsOpen={setIsTermsOpen} title="Terms of Service" content={<TermsOfServiceContent />} />
      
      <PolicyModal isOpen={isCookiesOpen} setIsOpen={setIsCookiesOpen} title="Cookies Policy" content={<CookiesPolicyContent />} />
    </footer>;
};
export default Footer;