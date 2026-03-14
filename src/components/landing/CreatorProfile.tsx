import { useState } from 'react';
import { Camera, Video, Heart, BadgeCheck } from 'lucide-react';

const CreatorProfile = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full h-[120px] bg-gradient-to-br from-primary/80 via-primary/60 to-orange-300 relative overflow-hidden">
        <img src="/cover.jpg.jpeg" alt="Cover" className="w-full h-full object-cover" />
      </div>

      {/* Profile section */}
      <div className="px-5 mt-4 relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-orange-200 overflow-hidden shadow-sm relative z-10 -mt-8">
              <img src="/perfil.jpg.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {/* Name */}
            <div className="-mt-4">
              <div className="flex items-center gap-1">
                <h1 className="text-base font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
                  Nicolle Caroline
                </h1>
                <BadgeCheck className="h-4 w-4 text-blue-500 fill-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground">@nicollecaroline</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-3 text-muted-foreground text-xs -mt-1">
            <span className="flex items-center gap-1"><Camera className="h-4 w-4" /> 33</span>
            <span className="flex items-center gap-1"><Video className="h-4 w-4" /> 25</span>
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
