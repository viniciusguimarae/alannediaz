const SubscriptionCard = () => (
  <div className="mx-4 mt-5 mb-2">
    <h2 className="text-[13px] font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.2px' }}>
      Assinaturas
    </h2>

    <div className="w-full h-[42px] rounded-full bg-[linear-gradient(90deg,#f4b087_0%,#efaa84_45%,#f3b99c_100%)] flex items-center justify-between px-[18px] cursor-pointer">
      <span className="text-foreground text-[14px] font-medium tracking-tight">1 mês</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground font-semibold text-[14px] tracking-tight">
          R$ 29,90
        </span>
      </div>
    </div>
  </div>
);

export default SubscriptionCard;
