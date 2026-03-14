const SubscriptionCard = () => (
  <div className="mx-5 mt-6">
    <h2 className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
      Assinaturas
    </h2>

    <div className="w-full h-[52px] rounded-full bg-gradient-to-r from-[#f6b28b] to-[#f2a077] flex items-center justify-between px-5 cursor-pointer">
      <span className="text-foreground text-sm font-medium">1 mês</span>
      <div className="flex items-center gap-2">
        <span className="text-foreground font-bold text-base" style={{ fontFamily: 'Outfit' }}>
          R$ 29,90
        </span>
      </div>
    </div>
  </div>
);

export default SubscriptionCard;
