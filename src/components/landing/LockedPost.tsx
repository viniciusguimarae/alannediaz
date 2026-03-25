import { useState } from 'react';
import { Lock, Heart, MessageCircle, Bookmark, CircleDollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

interface LockedPostProps {
  media: MediaItem[];
}

const LockedPost = ({ media }: LockedPostProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    if (currentMediaIndex < media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const prevMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const currentMedia = media[currentMediaIndex];

  return (
    <div className="mb-6 rounded-2xl bg-white border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden w-full">
      {/* Creator info */}
      <div className="flex items-center gap-3 p-3">
        <div className="w-8 h-8 rounded-full relative overflow-hidden flex-shrink-0">
          <img src="/perfil.jpg.png" alt="NC" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[14px] font-semibold text-foreground leading-tight tracking-tight">Alane Diaz</p>
          <p className="text-[12px] text-muted-foreground leading-tight tracking-tight">@alannediaz</p>
        </div>
      </div>

      {/* Blurred media preview */}
      <div className="relative w-full aspect-[1/1.1] bg-black overflow-hidden flex items-center justify-center group">
        {/* Background Media */}
        {currentMedia.type === 'video' ? (
            <video 
              key={currentMedia.url}
              src={currentMedia.url}
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover absolute inset-0"
              style={{ filter: 'blur(8px) brightness(70%)', transform: 'scale(1.1)' }}
            />
          ) : (
            <img 
              src={currentMedia.url} 
              alt="Locked content preview" 
              className="w-full h-full object-cover absolute inset-0"
              style={{ filter: 'blur(8px) brightness(70%)', transform: 'scale(1.1)' }}
            />
          )}
          
          {/* Navigation Arrows */}
          {media.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2 z-20 pointer-events-none">
              {currentMediaIndex > 0 ? (
                <button 
                  onClick={prevMedia}
                  className="pointer-events-auto p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30 animate-soft-pulse"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              ) : <div />}
              
              {currentMediaIndex < media.length - 1 && (
                <button 
                  onClick={nextMedia}
                  className="pointer-events-auto p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30 animate-soft-pulse"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              ) }
            </div>
          )}

        {/* Lock Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/85"
          >
            <Lock className="h-7 w-7 text-black drop-shadow-sm" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Engagement Action Bar */}
      <div className="flex items-center justify-between p-3 text-foreground">
        <div className="flex items-center gap-4">
          <button className="transition-transform active:scale-90 hover:text-muted-foreground">
            <Heart className="h-[24px] w-[24px]" strokeWidth={1.25} />
          </button>
          <button className="transition-transform active:scale-90 hover:text-muted-foreground">
            <MessageCircle className="h-[24px] w-[24px]" strokeWidth={1.25} />
          </button>
          <button className="transition-transform active:scale-90 hover:text-muted-foreground">
            <CircleDollarSign className="h-[24px] w-[24px]" strokeWidth={1.25} />
          </button>
        </div>
        <button className="transition-transform active:scale-90 hover:text-muted-foreground">
          <Bookmark className="h-[24px] w-[24px]" strokeWidth={1.25} />
        </button>
      </div>
    </div>
  );
};

export default LockedPost;
