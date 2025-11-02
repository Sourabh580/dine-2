import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SuccessScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessScreen({ isOpen, onClose }: SuccessScreenProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <Card className="relative max-w-md w-full p-8 animate-in zoom-in-95 fade-in duration-500">
        <div className="text-center space-y-6">
          <div className="flex justify-center animate-in zoom-in duration-700 delay-100">
            <CheckCircleIcon className="h-24 w-24 text-primary" />
          </div>

          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <h2 className="text-3xl font-bold text-foreground" data-testid="text-success-heading">
              Order Placed Successfully!
            </h2>
            <p className="text-muted-foreground" data-testid="text-success-message">
              Your delicious food will be prepared shortly
            </p>
          </div>

          <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <Button
              onClick={onClose}
              size="lg"
              className="w-full"
              data-testid="button-back-to-menu"
            >
              Back to Menu
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
