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
      {/* Plans Container */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
        <SubscriptionCard />
        <PromotionsSection />
      </div>

      {/* Top Switcher (Postagens / Mídias) */}
      <div className="flex px-4 pt-1 mt-6 mb-5 border-b border-border mx-4">
        <button
          onClick={() => setActiveMainTab('Postagens')}
          className={cn(
            'flex-1 pb-3 pt-3 text-[14px] font-medium flex items-center justify-center gap-1.5 transition-all relative tracking-tight',
            activeMainTab === 'Postagens' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <FileText className="h-[15px] w-[15px]" strokeWidth={1.5} />
          Postagens
          {activeMainTab === 'Postagens' && (
            <div className="absolute bottom-0 left-[20%] w-[60%] h-[2px] bg-primary rounded-t-full" />
          )}
        </button>
        <button
          onClick={() => setActiveMainTab('Mídias')}
          className={cn(
            'flex-1 pb-3 pt-3 text-[14px] font-medium flex items-center justify-center gap-1.5 transition-all relative tracking-tight',
            activeMainTab === 'Mídias' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <ImageIcon className="h-[15px] w-[15px]" strokeWidth={1.5} />
          Mídias
          {activeMainTab === 'Mídias' && (
            <div className="absolute bottom-0 left-[20%] w-[60%] h-[2px] bg-primary rounded-t-full" />
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
