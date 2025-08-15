import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RotateCcw, ZoomIn, ZoomOut, Move3D } from "lucide-react";

interface ControlsProps {
  onReset?: () => void;
}

export const Controls = ({ onReset }: ControlsProps) => {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <h4 className="font-medium text-saddle">Controles</h4>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Move3D className="w-4 h-4" />
            <span>Arrastar para rotacionar</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ZoomIn className="w-4 h-4" />
            <span>Scroll para zoom</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onReset}
          className="w-full"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Resetar Visualização
        </Button>
        
        <div className="text-xs text-muted-foreground">
          <p>Use o mouse ou touch para explorar o modelo 3D do cavalo.</p>
        </div>
      </div>
    </Card>
  );
};