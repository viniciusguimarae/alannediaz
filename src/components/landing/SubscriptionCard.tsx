const SubscriptionCard = () => (
  <div className="w-full mt-5">
    <h2 className="text-[13px] font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.2px' }}>
      Assinaturas
    </h2>

    <div className="w-full h-[44px] rounded-full bg-[linear-gradient(90deg,#f3ad83_0%,#efaa84_45%,#f1b299_100%)] flex items-center justify-between px-5 cursor-pointer">
      <span className="text-foreground text-[14px] font-medium tracking-tight">1 mês</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground font-bold text-[15px] tracking-tight">
          R$ 29,90
        </span>
      </div>
    </div>
  </div>
);

export default SubscriptionCard;
