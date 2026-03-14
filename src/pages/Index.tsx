import PlatformHeader from '@/components/landing/PlatformHeader';
import CreatorProfile from '@/components/landing/CreatorProfile';
import SubscriptionCard from '@/components/landing/SubscriptionCard';
import PromotionsSection from '@/components/landing/PromotionsSection';
import LockedPost from '@/components/landing/LockedPost';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
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
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <PlatformHeader />
      <CreatorProfile />
      <SubscriptionCard />
      <PromotionsSection />
      {lockedPosts.map((post, i) => (
        <LockedPost key={i} {...post} />
      ))}
      <MediaGallery />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
