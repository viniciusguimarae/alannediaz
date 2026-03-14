import PlatformHeader from '@/components/landing/PlatformHeader';
import CreatorProfile from '@/components/landing/CreatorProfile';
import SubscriptionCard from '@/components/landing/SubscriptionCard';
import PromotionsSection from '@/components/landing/PromotionsSection';
import ContentCounter from '@/components/landing/ContentCounter';
import LockedPost from '@/components/landing/LockedPost';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

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
      <ContentCounter />
      {lockedPosts.map((post, i) => (
        <LockedPost key={i} {...post} />
      ))}
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
