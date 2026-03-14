import { ShieldCheck, Zap } from 'lucide-react';

const SubscriptionCard = () => (
  <div className="mx-5 mt-6 rounded-2xl border border-border bg-card p-5 shadow-md">
    <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
      Assinaturas
    </h2>

    <div className="mt-4 rounded-xl bg-secondary/60 p-4 border border-primary/20">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full border border-primary/20">
          57% OFF
        </span>
      </div>
      
      <div className="flex items-end justify-between mt-1">
        <span className="text-base font-bold text-foreground">1 mês</span>
        <div className="flex flex-col items-end">
          <span className="text-sm line-through text-muted-foreground font-medium" style={{ fontFamily: 'Outfit' }}>
            R$ 69,90
          </span>
          <span className="text-3xl font-extrabold text-primary" style={{ fontFamily: 'Outfit' }}>
            R$ 29,90
          </span>
        </div>
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
