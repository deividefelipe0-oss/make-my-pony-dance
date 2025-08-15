import { HorseScene } from "@/components/HorseScene";
import { HorseInfo } from "@/components/HorseInfo";
import { Controls } from "@/components/Controls";
import { toast } from "sonner";

const Index = () => {
  const handleReset = () => {
    toast("Visualização resetada!");
    // This would trigger a reset of the camera position
    window.location.reload();
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-background)' }}>
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ background: 'var(--gradient-horse)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Cavalo Interativo 3D
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore um modelo tridimensional de um cavalo com controles interativos. 
            Arraste para rotacionar, use o scroll para zoom e descubra mais sobre estes magníficos animais.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 3D Scene - Main focus */}
            <div className="lg:col-span-3">
              <HorseScene />
            </div>
            
            {/* Sidebar with controls and info */}
            <div className="space-y-6">
              <Controls onReset={handleReset} />
              <HorseInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Modelo 3D criado com Three.js e React Three Fiber
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
