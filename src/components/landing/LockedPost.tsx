import { Lock, Heart, MessageCircle } from 'lucide-react';

interface LockedPostProps {
  likes: string;
  comments: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
}

const LockedPost = ({ likes, comments, mediaType, mediaUrl }: LockedPostProps) => (
  <div className="mx-5 mb-6 rounded-2xl bg-card border border-border shadow-md overflow-hidden">
    {/* Creator info */}
    <div className="flex items-center gap-3 p-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-orange-200 flex items-center justify-center text-xs font-bold text-primary-foreground overflow-hidden shadow-sm" style={{ fontFamily: 'Outfit' }}>
        <img src="/perfil.jpg.png" alt="NC" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground leading-none">Nicolle Caroline</p>
        <p className="text-xs text-muted-foreground mt-1">@nicollecaroline</p>
      </div>
    </div>

    {/* Blurred media preview */}
    <div className="relative w-full aspect-[4/5] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      {mediaType === 'video' ? (
        <video 
          src={mediaUrl}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover absolute inset-0"
          style={{ filter: 'blur(14px) brightness(70%)', transform: 'scale(1.1)' }}
        />
      ) : (
        <img 
          src={mediaUrl} 
          alt="Locked content preview" 
          className="w-full h-full object-cover absolute inset-0"
          style={{ filter: 'blur(14px) brightness(70%)', transform: 'scale(1.1)' }}
        />
      )}
      
      {/* Lock Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
        >
          <Lock className="h-7 w-7 text-black drop-shadow-sm" />
        </div>
      </div>
    </div>

    {/* Engagement */}
    <div className="flex items-center gap-5 p-3 text-muted-foreground text-sm">
      <span className="flex items-center gap-1.5 font-medium">
        <Heart className="h-4 w-4" /> {likes}
      </span>
      <span className="flex items-center gap-1.5 font-medium">
        <MessageCircle className="h-4 w-4" /> {comments}
      </span>
    </div>
  </div>
);

export default LockedPost;
