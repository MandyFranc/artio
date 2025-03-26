
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
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
      // Clean input data
      const cleanEmail = email.trim();
      const cleanName = name.trim() || null; // Convert empty string to null
      
      console.log("Submitting to Supabase with data:", { 
        name: cleanName, 
        email: cleanEmail 
      });
      
      // Using upsert instead of insert to handle potential duplicates more gracefully
      const { error } = await supabase
        .from('Beta sign up')
        .upsert({ 
          name: cleanName,
          email: cleanEmail
        }, { 
          onConflict: 'email',
          ignoreDuplicates: true
        });
      
      if (error) {
        console.error("Supabase error details:", error);
        throw error;
      }
      
      console.log("Form submission successful");
      
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
      
    } catch (error: any) {
      console.error('Error during form submission:', error);
      
      // Check for duplicate key violation (already handled by upsert now)
      if (error.code === '23505') {
        toast({
          title: "Already signed up",
          description: "This email is already registered for beta access.",
        });
      } else {
        setFormState('error');
        toast({
          title: "Sign-up failed",
          description: error.message || "There was an error signing up. Please try again.",
          variant: "destructive"
        });
      }
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
