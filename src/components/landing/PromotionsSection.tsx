import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const plans = [
  { id: 1, duration: '2 meses', badge: '44% off', oldPrice: 'R$ 89,90', price: 'R$ 49,90' },
];

const PromotionsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-4 mt-1 mb-2">
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
            <a
              key={plan.id}
              href="https://syncpagamentoseguro.com/checkout/a162c7ad-bdd9-4f0b-9e79-e9c6dc2334ea+a15734bc-23d7-4b19-9bb1-7baccaa9fa05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[42px] rounded-full bg-[linear-gradient(90deg,#f4b087_0%,#efaa84_45%,#f3b99c_100%)] flex items-center justify-between px-[18px] cursor-pointer transition-transform active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <span className="text-foreground text-[14px] font-medium tracking-tight">
                  {plan.duration}
                </span>
                <span className="text-[11px] font-semibold text-foreground/80 tracking-tight">
                  ({plan.badge})
                </span>
              </div>
              <span className="text-foreground font-semibold text-[14px] tracking-tight">
                {plan.price}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsSection;
