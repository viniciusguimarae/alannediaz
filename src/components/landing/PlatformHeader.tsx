import { Sparkles } from 'lucide-react';

const PlatformHeader = () => (
  <div className="w-full py-2 border-b border-border">
    <div className="flex items-center justify-center gap-2">
      <Sparkles className="h-5 w-5 text-primary" />
      <span className="text-lg font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
        FanPremium
      </span>
    </div>
  </div>
);

export default PlatformHeader;
