
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SignupForm } from './SignupForm';
import { SuccessState, ErrorState } from './FormStates';

interface SignupDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  formState: 'idle' | 'success' | 'error';
  name: string;
  email: string;
  acceptedTerms: boolean;
  isSubmitting: boolean;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onTermsChange: (checked: boolean) => void;
  onOpenTerms: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onRetry: () => void;
}

export const SignupDialog = ({
  isOpen,
  onOpenChange,
  formState,
  name,
  email,
  acceptedTerms,
  isSubmitting,
  onNameChange,
  onEmailChange,
  onTermsChange,
  onOpenTerms,
  onSubmit,
  onRetry
}: SignupDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Become an Artio Tester</DialogTitle>
          <DialogDescription>
            Join our exclusive tester community and help shape the future of art exploration.
          </DialogDescription>
        </DialogHeader>
        
        {formState === 'success' ? (
          <SuccessState />
        ) : formState === 'error' ? (
          <ErrorState onRetry={onRetry} />
        ) : (
          <SignupForm
            name={name}
            email={email}
            acceptedTerms={acceptedTerms}
            isSubmitting={isSubmitting}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onTermsChange={onTermsChange}
            onOpenTerms={onOpenTerms}
            onSubmit={onSubmit}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

