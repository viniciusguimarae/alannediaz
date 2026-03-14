import { Lock, Heart, MessageCircle } from 'lucide-react';

interface LockedPostProps {
  likes: string;
  comments: string;
  gradientFrom: string;
  gradientTo: string;
}

const LockedPost = ({ likes, comments, gradientFrom, gradientTo }: LockedPostProps) => (
  <div className="mx-5 mt-3 rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
    {/* Creator info */}
    <div className="flex items-center gap-3 p-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-orange-200 flex items-center justify-center text-xs font-bold text-primary-foreground" style={{ fontFamily: 'Outfit' }}>
        NC
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground leading-none">Nicolle Caroline</p>
        <p className="text-xs text-muted-foreground">@nicollecaroline</p>
      </div>
    </div>

    {/* Blurred image */}
    <div className="relative w-full aspect-[4/5]">
      <div
        className="w-full h-full blur-xl scale-105"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
          <Lock className="h-7 w-7 text-background" />
        </div>
      </div>
    </div>

    {/* Engagement */}
    <div className="flex items-center gap-5 p-3 text-muted-foreground text-sm">
      <span className="flex items-center gap-1.5">
        <Heart className="h-4 w-4" /> {likes}
      </span>
      <span className="flex items-center gap-1.5">
        <MessageCircle className="h-4 w-4" /> {comments}
      </span>
    </div>
  </div>
);

export default LockedPost;
