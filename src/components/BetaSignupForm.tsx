
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { BellRing, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import PolicyModal from './PolicyModal';
import { TermsOfServiceContent } from './PolicyContents';

export const BetaSignupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'success' | 'error'>('idle');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to sign up for beta access.",
        variant: "destructive"
      });
      return;
    }
    
    if (!acceptedTerms) {
      toast({
        title: "Terms agreement required",
        description: "Please agree to the Terms of Service to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Submitting to Supabase:", { name, email, acceptedTerms });
      
      // Debug the database schema first
      const { data: tableInfo, error: tableError } = await supabase
        .from('Beta sign up')
        .select('*')
        .limit(1);
      
      console.log("Table info:", tableInfo, "Table error:", tableError);
      
      const { error } = await supabase
        .from('Beta sign up')
        .insert([{ 
          name: name, 
          email: email,
          // Check if accepted_terms is a column in the database schema
          ...(tableInfo && tableInfo.length > 0 && 'accepted_terms' in tableInfo[0] ? 
            { accepted_terms: acceptedTerms } : {})
        }]);
      
      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      
      setFormState('success');
      toast({
        title: "Sign-up successful!",
        description: "Thank you for signing up for Artio beta access. We'll be in touch soon!",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setName('');
        setEmail('');
        setAcceptedTerms(false);
        setFormState('idle');
        setIsOpen(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error signing up:', error);
      setFormState('error');
      toast({
        title: "Sign-up failed",
        description: "There was an error signing up. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button 
        className="relative bg-artPurple-500 hover:bg-artPurple-600 text-white font-semibold px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
        onClick={() => setIsOpen(true)}
        aria-label="Sign up to be a tester"
      >
        <BellRing className="mr-2 h-5 w-5" aria-hidden="true" />
        Sign up to be a tester
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Become an Artio Tester</DialogTitle>
            <DialogDescription>
              Join our exclusive tester community and help shape the future of art exploration.
            </DialogDescription>
          </DialogHeader>
          
          {formState === 'success' ? (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <div>
                <h3 className="text-lg font-medium">Thank you for signing up!</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We'll notify you when you can start testing Artio.
                </p>
              </div>
            </div>
          ) : formState === 'error' ? (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
              <XCircle className="h-12 w-12 text-red-500" />
              <div>
                <h3 className="text-lg font-medium">Something went wrong</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Please try again or contact support.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => setFormState('idle')}
                >
                  Try Again
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Your name (optional)"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the{' '}
                  <button
                    type="button"
                    className="text-artPurple-500 hover:underline font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsTermsOpen(true);
                    }}
                  >
                    Terms of Service
                  </button>
                  <span className="text-red-500">*</span>
                </Label>
              </div>
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-artPurple-500 hover:bg-artPurple-600 rounded-md"
                  disabled={isSubmitting || !acceptedTerms}
                >
                  {isSubmitting ? "Signing Up..." : "Sign up to be a tester"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
      
      <PolicyModal 
        isOpen={isTermsOpen} 
        setIsOpen={setIsTermsOpen} 
        title="Terms of Service" 
        content={<TermsOfServiceContent />} 
      />
    </>
  );
};

export default BetaSignupForm;
