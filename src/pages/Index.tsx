import { useState } from 'react';
import { cn } from '@/lib/utils';
import PlatformHeader from '@/components/landing/PlatformHeader';
import CreatorProfile from '@/components/landing/CreatorProfile';
import SubscriptionCard from '@/components/landing/SubscriptionCard';
import PromotionsSection from '@/components/landing/PromotionsSection';
import LockedPost from '@/components/landing/LockedPost';
import MediaGallery from '@/components/landing/MediaGallery';

const lockedPosts = [
  {
    likes: '45.2K',
    comments: '982',
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
            'flex-1 pb-3 pt-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all relative',
            activeMainTab === 'Postagens' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <span className="border border-current rounded-sm px-1.5 py-0.5 text-[10px] leading-none">33</span> 
          Postagens
          {activeMainTab === 'Postagens' && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full" />
          )}
        </button>
        <button
          onClick={() => setActiveMainTab('Mídias')}
          className={cn(
            'flex-1 pb-3 pt-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all relative',
            activeMainTab === 'Mídias' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <span className="border border-current rounded-sm px-1.5 py-0.5 text-[10px] leading-none">25</span> 
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
