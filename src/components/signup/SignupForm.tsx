
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface SignupFormProps {
  name: string;
  email: string;
  acceptedTerms: boolean;
  isSubmitting: boolean;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onTermsChange: (checked: boolean) => void;
  onOpenTerms: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SignupForm = ({
  name,
  email,
  acceptedTerms,
  isSubmitting,
  onNameChange,
  onEmailChange,
  onTermsChange,
  onOpenTerms,
  onSubmit
}: SignupFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input 
          id="name" 
          value={name} 
          onChange={(e) => onNameChange(e.target.value)} 
          placeholder="Your name (optional)"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => onEmailChange(e.target.value)} 
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={acceptedTerms}
          onCheckedChange={(checked) => onTermsChange(checked === true)}
        />
        <Label htmlFor="terms" className="text-sm font-normal">
          I agree to the{' '}
          <button
            type="button"
            className="text-artPurple-500 hover:underline font-medium"
            onClick={onOpenTerms}
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
  );
};

