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
    mediaUrl: 'https://images.unsplash.com/photo-1515347619362-75d194cbf5e7?q=80&w=600&auto=format&fit=crop',
  },
  {
    likes: '45.2K',
    comments: '982',
    mediaType: 'video' as const,
    mediaUrl: 'https://drive.google.com/uc?export=download&id=1JoDjac51C2wlLT93_WHm_eKV76BT9Z5F',
  },
  {
    likes: '52.1K',
    comments: '1.4K',
    mediaType: 'image' as const,
    mediaUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop',
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
