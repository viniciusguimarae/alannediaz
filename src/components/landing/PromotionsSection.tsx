import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const plans = [
  { id: 1, duration: '2 meses', badge: '44% off', oldPrice: 'R$ 89,90', price: 'R$ 49,90' },
];

const PromotionsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between mb-2"
      >
        <h2 className="text-[13px] font-semibold text-foreground" style={{ letterSpacing: '-0.2px' }}>
          Promoções
        </h2>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200", 
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {/* Accordion Content */}
      <div 
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden space-y-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="w-full h-[48px] rounded-full bg-[linear-gradient(90deg,#f3ad83_0%,#efaa84_45%,#f1b299_100%)] flex items-center justify-between px-6 cursor-pointer transition-transform active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <span className="text-foreground text-[14px] font-medium tracking-tight">
                  {plan.duration}
                </span>
                <span className="text-[11px] font-semibold text-foreground/80 tracking-tight">
                  ({plan.badge})
                </span>
              </div>
              <span className="text-foreground font-bold text-[15px] tracking-tight">
                {plan.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsSection;
