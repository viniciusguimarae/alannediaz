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
  { likes: '67.4K', comments: '1.9K', gradientFrom: 'hsl(18, 100%, 55%)', gradientTo: 'hsl(35, 100%, 70%)' },
  { likes: '45.2K', comments: '982', gradientFrom: 'hsl(340, 80%, 60%)', gradientTo: 'hsl(18, 100%, 55%)' },
  { likes: '52.1K', comments: '1.4K', gradientFrom: 'hsl(270, 60%, 60%)', gradientTo: 'hsl(340, 80%, 60%)' },
  { likes: '38.7K', comments: '756', gradientFrom: 'hsl(18, 100%, 45%)', gradientTo: 'hsl(45, 100%, 65%)' },
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
