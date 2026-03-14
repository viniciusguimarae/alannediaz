import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FileText, Image as ImageIcon } from 'lucide-react';
import PlatformHeader from '@/components/landing/PlatformHeader';
import CreatorProfile from '@/components/landing/CreatorProfile';
import SubscriptionCard from '@/components/landing/SubscriptionCard';
import PromotionsSection from '@/components/landing/PromotionsSection';
import LockedPost from '@/components/landing/LockedPost';
import MediaGallery from '@/components/landing/MediaGallery';

const lockedPosts = [
  {
    mediaType: 'video' as const,
    mediaUrl: '/post_video.mp4.mp4',
  },
];

const Index = () => {
  const [activeMainTab, setActiveMainTab] = useState('Postagens');

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto pb-10">
      <PlatformHeader />
      <CreatorProfile />
      <SubscriptionCard />
      <PromotionsSection />

      {/* Top Switcher (Postagens / Mídias) */}
      <div className="flex px-4 pt-1 mt-6 mb-4 border-b border-border mx-5">
        <button
          onClick={() => setActiveMainTab('Postagens')}
          className={cn(
            'flex-1 pb-3 pt-3 text-[14px] font-semibold flex items-center justify-center gap-2 transition-all relative tracking-tight',
            activeMainTab === 'Postagens' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <FileText className="h-[18px] w-[18px]" strokeWidth={2} />
          Postagens
          {activeMainTab === 'Postagens' && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full" />
          )}
        </button>
        <button
          onClick={() => setActiveMainTab('Mídias')}
          className={cn(
            'flex-1 pb-3 pt-3 text-[14px] font-semibold flex items-center justify-center gap-2 transition-all relative tracking-tight',
            activeMainTab === 'Mídias' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <ImageIcon className="h-[18px] w-[18px]" strokeWidth={2} />
          Mídias
          {activeMainTab === 'Mídias' && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full" />
          )}
        </button>
      </div>

      {activeMainTab === 'Postagens' ? (
        lockedPosts.map((post, i) => (
          <LockedPost key={i} {...post} />
        ))
      ) : (
        <MediaGallery />
      )}
    </div>
  );
};

export default Index;
