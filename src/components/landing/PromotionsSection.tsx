import { useState } from 'react';
import { cn } from '@/lib/utils';

const plans = [
  { id: 1, duration: '2 meses', badge: '44% off', oldPrice: 'R$ 89,90', price: 'R$ 49,90' },
];

const PromotionsSection = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="mx-5 mt-6">
      <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
        Promoções
      </h2>
      <div className="mt-3 space-y-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelected(plan.id)}
            className={cn(
              'w-full rounded-xl border-2 py-3 px-4 text-left transition-all duration-200',
              selected === plan.id
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border bg-card hover:border-primary/30'
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
                  {plan.duration}
                </span>
                <span className={cn(
                  'ml-2 text-xs font-semibold px-2 py-0.5 rounded-full',
                  selected === plan.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}>
                  {plan.badge}
                </span>
              </div>
              <div className="flex items-center gap-2" style={{ fontFamily: 'Outfit' }}>
                <span className="text-sm line-through text-muted-foreground">
                  {plan.oldPrice}
                </span>
                <span className="text-xl font-extrabold text-primary">
                  {plan.price}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromotionsSection;
