const SubscriptionCard = () => (
  <div className="mx-5 mt-4">
    <h2 className="text-sm font-semibold text-foreground mb-1.5" style={{ letterSpacing: '-0.3px' }}>
      Assinaturas
    </h2>

    <div className="w-full h-[56px] rounded-full bg-[linear-gradient(90deg,#f3ad83_0%,#efaa84_45%,#f1b299_100%)] flex items-center justify-between px-6 cursor-pointer">
      <span className="text-foreground text-[15px] font-medium tracking-tight">1 mês</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground font-bold text-base tracking-tight">
          R$ 29,90
        </span>
      </div>
    </div>
  </div>
);

export default SubscriptionCard;
