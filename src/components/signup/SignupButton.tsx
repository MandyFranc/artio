
import { Button } from '@/components/ui/button';
import { BellRing } from 'lucide-react';

interface SignupButtonProps {
  onClick: () => void;
}

export const SignupButton = ({ onClick }: SignupButtonProps) => {
  return (
    <Button 
      className="relative bg-artPurple-500 hover:bg-artPurple-600 text-white font-semibold px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
      onClick={onClick}
      aria-label="Sign up to be a tester"
    >
      <BellRing className="mr-2 h-5 w-5" aria-hidden="true" />
      Sign up to be a tester
    </Button>
  );
};

