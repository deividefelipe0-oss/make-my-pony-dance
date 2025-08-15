import { Card } from "@/components/ui/card";

export const HorseInfo = () => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-chestnut mb-2">Sobre os Cavalos</h3>
          <p className="text-muted-foreground leading-relaxed">
            Os cavalos são animais majestosos que acompanham a humanidade há milhares de anos. 
            Conhecidos por sua elegância, força e inteligência, eles têm desempenhado papéis cruciais 
            no transporte, agricultura e esporte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-saddle">Características</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Velocidade máxima: até 88 km/h</li>
              <li>• Expectativa de vida: 25-30 anos</li>
              <li>• Peso médio: 380-1000 kg</li>
              <li>• Altura: 1,4-1,8 metros</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-saddle">Curiosidades</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Dormem apenas 2-3 horas por dia</li>
              <li>• Possuem visão quase 360°</li>
              <li>• Conseguem reconhecer emoções humanas</li>
              <li>• Têm excelente memória</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};