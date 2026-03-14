import PromoBar from '@/components/landing/PromoBar';
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
    likes: '67.4K',
    comments: '1.9K',
    mediaType: 'image' as const,
    mediaUrl: '/post_img_1.jpg.jpeg',
  },
  {
    likes: '45.2K',
    comments: '982',
    mediaType: 'video' as const,
    mediaUrl: '/post_video.mp4.mp4',
  },
  {
    likes: '52.1K',
    comments: '1.4K',
    mediaType: 'image' as const,
    mediaUrl: '/post_img_2.jpg.jpeg',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <PromoBar />
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
