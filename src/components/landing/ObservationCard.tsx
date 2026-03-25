import { Info } from 'lucide-react';

const ObservationCard = () => {
  return (
    <div className="mb-6 rounded-2xl bg-white border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden w-full p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Info className="h-5 w-5 text-primary" strokeWidth={2} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold text-foreground leading-tight tracking-tight mb-1">
            Informações importantes
          </p>
          <div className="text-[13px] text-muted-foreground leading-relaxed tracking-tight space-y-2">
            <p>
              Oi amor, tudo bem? Assim que o seu pagamento for confirmado, você receberá um e-mail com o link do Telegram para acessar o meu <span className="font-semibold text-foreground">Grupo VIP</span>. Lá você terá acesso a todas as minhas fotos e vídeos exclusivos! ❤️
            </p>
            <p>
              <span className="font-medium text-foreground">Dica:</span> Não esqueça de conferir sua caixa de entrada e também a pasta de <span className="font-medium text-foreground">spam</span>!
            </p>
            <p>
              Caso não encontre o e-mail ou precise de ajuda, me envie o comprovante pela DM do meu Instagram <span className="font-medium text-foreground">@alannediaz</span> que eu te ajudo na hora.
            </p>
            <p className="text-[12px] opacity-80 italic">
              Fique tranquilo(a): por questões de privacidade, o meu nome não aparecerá na fatura do seu cartão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObservationCard;
