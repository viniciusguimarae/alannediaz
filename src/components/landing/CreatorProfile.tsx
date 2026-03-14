import { useState } from 'react';
import { Camera, Video, Heart, BadgeCheck, Lock } from 'lucide-react';

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
        <div className="flex flex-col w-full">
          {/* Avatar and Stats Row */}
          <div className="flex items-start justify-between">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-orange-200 overflow-hidden shadow-sm relative z-10 -mt-8 flex-shrink-0">
              <img src="/perfil.jpg.png" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-3 text-muted-foreground text-[11px] font-medium mt-1">
              <span className="flex items-center gap-1"><Camera className="h-3.5 w-3.5" /> 393</span>
              <span className="flex items-center gap-1"><Video className="h-3.5 w-3.5" /> 164</span>
              <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> 20</span>
              <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" /> 2.1K</span>
            </div>
          </div>

          {/* Name and Username */}
          <div className="mt-1">
            <div className="flex items-center gap-1">
              <h1 className="text-lg font-semibold text-foreground leading-none tracking-tight">
                Nicolle Caroline
              </h1>
              <BadgeCheck className="h-[14px] w-[14px] text-primary fill-white" strokeWidth={1.5} />
            </div>
            <p className="text-[#65676b] text-[13px] mt-1 tracking-tight">@nicollecaroline</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-3">
          <p className={`text-[13px] text-muted-foreground leading-relaxed tracking-tight ${!expanded ? 'line-clamp-3' : ''}`}>
            Oie amor! 💕 Aqui você vai ter acesso ao meu conteúdo mais exclusivo e ousado. 
            Fotos e vídeos que não posto em nenhum outro lugar. Vem comigo e aproveita essa 
            promoção especial que preparei com muito carinho pra você! 🔥
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-muted-foreground text-[13px] mt-1 font-medium"
          >
            {expanded ? 'Mostrar menos' : 'Mostrar mais'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
