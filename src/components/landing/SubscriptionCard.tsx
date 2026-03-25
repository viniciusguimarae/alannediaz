const SubscriptionCard = () => (
  <div className="mx-4 mt-5 mb-2">
    <h2 className="text-[13px] font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.2px' }}>
      Assinaturas
    </h2>

    <a 
      href="https://syncpagamentoseguro.com/checkout/a1573433-ee1f-41f2-b445-4fc3ba641cca+a15734bc-23d7-4b19-9bb1-7baccaa9fa05"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-[42px] rounded-full bg-[linear-gradient(90deg,#f4b087_0%,#efaa84_45%,#f3b99c_100%)] flex items-center justify-between px-[18px] cursor-pointer transition-transform active:scale-[0.98]"
    >
      <span className="text-foreground text-[14px] font-medium tracking-tight">1 mês</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground font-semibold text-[14px] tracking-tight">
          R$ 29,90
        </span>
      </div>
    </a>
  </div>
);

export default SubscriptionCard;
