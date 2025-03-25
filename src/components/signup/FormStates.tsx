
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SuccessState = () => (
  <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
    <CheckCircle className="h-12 w-12 text-green-500" />
    <div>
      <h3 className="text-lg font-medium">Thank you for signing up!</h3>
      <p className="text-sm text-muted-foreground mt-1">
        We'll notify you when you can start testing Artio.
      </p>
    </div>
  </div>
);

interface ErrorStateProps {
  onRetry: () => void;
}

export const ErrorState = ({ onRetry }: ErrorStateProps) => (
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
        onClick={onRetry}
      >
        Try Again
      </Button>
    </div>
  </div>
);

