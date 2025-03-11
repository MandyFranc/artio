
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PolicyModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  content: React.ReactNode;
}

export const PolicyModal = ({ isOpen, setIsOpen, title, content }: PolicyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4">
            {content}
          </div>
        </ScrollArea>
        
        <div className="pt-4 flex justify-end">
          <Button 
            onClick={() => setIsOpen(false)} 
            className="bg-artPurple-500 hover:bg-artPurple-600"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyModal;
