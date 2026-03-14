import { ShieldCheck, Zap } from 'lucide-react';

const SubscriptionCard = () => (
  <div className="mx-5 mt-6 rounded-2xl border border-border bg-card p-5 shadow-md">
    <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
      Assinaturas
    </h2>

    <div className="mt-4 rounded-xl bg-secondary/60 p-4">
      <div className="flex items-center gap-2">
        <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
          VISTA TUDO AGORA 🔥🔥
        </span>
      </div>
      <span className="text-xs text-green-600 font-medium mt-1 block">Promocional</span>

      <div className="flex items-center justify-between mt-3">
        <span className="text-sm font-medium text-foreground">1 Mês</span>
        <span className="text-3xl font-extrabold text-primary text-right" style={{ fontFamily: 'Outfit' }}>
          R$ 29,90 →
        </span>
      </div>
    </div>

    <div className="mt-4 space-y-2.5">

      <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
        <span>Pagamento 100% seguro</span>
      </div>
      <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
        <Zap className="h-4 w-4 text-primary flex-shrink-0" />
        <span>Acesso imediato</span>
      </div>
    </div>
  </div>
);

export default SubscriptionCard;
