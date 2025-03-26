
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import PolicyModal from './PolicyModal';
import { TermsOfServiceContent } from './PolicyContents';
import { SignupButton } from './signup/SignupButton';
import { SignupDialog } from './signup/SignupDialog';

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
      console.log("Attempting to submit to Supabase...");
      console.log("Email:", email);
      
      // Insert new record with minimal data
      const { error } = await supabase
        .from('Beta sign up')
        .insert([{ 
          name: name || null, // Ensure null is sent if name is empty 
          email: email 
        }]);
      
      if (error) {
        console.error("Supabase insert error:", error);
        throw error;
      }
      
      console.log("Form submitted successfully");
      
      setFormState('success');
      toast({
        title: "Sign-up successful!",
        description: "Thank you for signing up for Artio beta access. We'll be in touch soon!",
      });
      
      // Reset form after success (with delay for user to see success state)
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
      <SignupButton onClick={() => setIsOpen(true)} />
      
      <SignupDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        formState={formState}
        name={name}
        email={email}
        acceptedTerms={acceptedTerms}
        isSubmitting={isSubmitting}
        onNameChange={setName}
        onEmailChange={setEmail}
        onTermsChange={setAcceptedTerms}
        onOpenTerms={() => setIsTermsOpen(true)}
        onSubmit={handleSubmit}
        onRetry={() => setFormState('idle')}
      />
      
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
