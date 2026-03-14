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
    <div className="min-h-screen bg-background max-w-[420px] mx-auto px-[14px] pb-10">
      <PlatformHeader />
      
      {/* Hero Super Container */}
      <div className="mt-4 rounded-[16px] bg-white overflow-hidden pb-4" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
        <CreatorProfile />
        <SubscriptionCard />
        <PromotionsSection />
      </div>

      {/* Tabs Container */}
      <div className="mt-5 mb-4 p-2 rounded-[14px] bg-white" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="flex">
          <button
            onClick={() => setActiveMainTab('Postagens')}
            className={cn(
              'flex-1 py-1.5 text-[14px] font-medium flex items-center justify-center gap-1.5 transition-all relative tracking-tight',
              activeMainTab === 'Postagens' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <FileText className="h-[15px] w-[15px]" strokeWidth={1.5} />
            Postagens
            {activeMainTab === 'Postagens' && (
              <div className="absolute -bottom-2 left-[20%] w-[60%] h-[2px] bg-primary rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveMainTab('Mídias')}
            className={cn(
              'flex-1 py-1.5 text-[14px] font-medium flex items-center justify-center gap-1.5 transition-all relative tracking-tight',
              activeMainTab === 'Mídias' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <ImageIcon className="h-[15px] w-[15px]" strokeWidth={1.5} />
            Mídias
            {activeMainTab === 'Mídias' && (
              <div className="absolute -bottom-2 left-[20%] w-[60%] h-[2px] bg-primary rounded-t-full" />
            )}
          </button>
        </div>
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
