import { useState } from 'react';
import { Camera, Video, Heart, BadgeCheck, ChevronDown, ChevronUp } from 'lucide-react';

const CreatorProfile = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full h-44 bg-gradient-to-br from-primary/80 via-primary/60 to-orange-300 relative" />

      {/* Profile section */}
      <div className="px-5 -mt-12 relative">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full border-4 border-background bg-gradient-to-br from-primary/40 to-orange-200 overflow-hidden shadow-lg">
          <div className="w-full h-full flex items-center justify-center text-primary-foreground text-2xl font-bold" style={{ fontFamily: 'Outfit' }}>
            NC
          </div>
        </div>

        {/* Name + badge */}
        <div className="mt-3 flex items-center gap-1.5">
          <h1 className="text-xl font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
            Nicolle Caroline
          </h1>
          <BadgeCheck className="h-5 w-5 text-blue-500 fill-blue-500" />
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-2 text-muted-foreground text-sm">
          <span className="flex items-center gap-1"><Camera className="h-4 w-4" /> 354</span>
          <span className="flex items-center gap-1"><Video className="h-4 w-4" /> 148</span>
          <span className="flex items-center gap-1"><Heart className="h-4 w-4" /> 20.2K</span>
        </div>

        {/* Bio */}
        <div className="mt-3">
          <p className={`text-sm text-muted-foreground leading-relaxed ${!expanded ? 'line-clamp-2' : ''}`}>
            Oie amor! 💕 Aqui você vai ter acesso ao meu conteúdo mais exclusivo e ousado. 
            Fotos e vídeos que não posto em nenhum outro lugar. Vem comigo e aproveita essa 
            promoção especial que preparei com muito carinho pra você! 🔥
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary text-sm font-medium mt-1 flex items-center gap-0.5"
          >
            {expanded ? 'Mostrar menos' : 'Mostrar mais'}
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
