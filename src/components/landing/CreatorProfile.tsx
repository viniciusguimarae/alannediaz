import { useState } from 'react';
import { Camera, Video, Heart, BadgeCheck } from 'lucide-react';

const CreatorProfile = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full h-[120px] bg-gradient-to-br from-primary/80 via-primary/60 to-orange-300 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1516483638261-f40af5eba324?q=80&w=1200&auto=format&fit=crop" alt="Cover" className="w-full h-full object-cover" />
      </div>

      {/* Profile section */}
      <div className="px-5 -mt-10 relative">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full border-4 border-background bg-gradient-to-br from-primary/40 to-orange-200 overflow-hidden shadow-lg relative z-10">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Name + Stats row */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h1 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
              Nicolle Caroline
            </h1>
            <BadgeCheck className="h-4.5 w-4.5 text-blue-500 fill-blue-500" />
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-xs">
            <span className="flex items-center gap-0.5"><Camera className="h-3.5 w-3.5" /> 354</span>
            <span className="flex items-center gap-0.5"><Video className="h-3.5 w-3.5" /> 148</span>
            <span className="flex items-center gap-0.5"><Heart className="h-3.5 w-3.5" /> 20.2K</span>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-2">
          <p className={`text-xs text-muted-foreground leading-relaxed ${!expanded ? 'line-clamp-3' : ''}`}>
            Oie amor! 💕 Aqui você vai ter acesso ao meu conteúdo mais exclusivo e ousado. 
            Fotos e vídeos que não posto em nenhum outro lugar. Vem comigo e aproveita essa 
            promoção especial que preparei com muito carinho pra você! 🔥
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-muted-foreground text-xs mt-1"
          >
            {expanded ? 'Mostrar menos' : 'Mostrar mais'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
