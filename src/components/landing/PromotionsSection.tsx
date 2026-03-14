import { useState } from 'react';
import { cn } from '@/lib/utils';

const plans = [
  { id: 1, duration: '2 meses', badge: '44% off', oldPrice: 'R$ 89,90', price: 'R$ 49,90' },
];

const PromotionsSection = () => {
  return (
    <div className="mx-5 mt-6">
      <h2 className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
        Promoções
      </h2>
      <div className="mt-3 space-y-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            className="w-full h-[52px] rounded-full bg-gradient-to-r from-[#f6b28b] to-[#f2a077] flex items-center justify-between px-5 cursor-pointer transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <span className="text-foreground text-sm font-medium">
                {plan.duration}
              </span>
              <span className="text-xs font-semibold text-foreground/80">
                ({plan.badge})
              </span>
            </div>
            <span className="text-foreground font-bold text-base" style={{ fontFamily: 'Outfit' }}>
              {plan.price}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromotionsSection;
