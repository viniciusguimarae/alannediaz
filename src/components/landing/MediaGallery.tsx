import { useState } from 'react';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const TABS = ['Todos', 'Fotos', 'Vídeos', 'Pagos'];

const MEDIA_MOCKS = [
  ...Array(3).fill('/post_img_1.jpg.jpeg'),
  ...Array(3).fill('/post_img_2.jpg.jpeg'),
  ...Array(3).fill('/post_img_1.jpg.jpeg'),
];

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('Todos');

  return (
    <div className="mt-4 mx-5 mb-10 bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      {/* Tabs Menu */}
      <div className="flex items-center justify-between px-2 pt-2 pb-2 border-b border-border overflow-x-auto gap-4 hide-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-colors rounded-full',
              activeTab === tab
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
            style={{ fontFamily: 'Outfit' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid 3x3 */}
      <div className="p-2 grid grid-cols-3 gap-1.5">
        {MEDIA_MOCKS.map((imgSrc, index) => (
          <div key={index} className="relative aspect-square rounded-md overflow-hidden bg-muted flex items-center justify-center group shadow-sm">
            {/* Background Image Blurred */}
            <img 
              src={imgSrc} 
              alt="Locked content" 
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              style={{ filter: 'blur(10px) brightness(80%)' }}
            />
            {/* Lock Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center backdrop-blur-sm shadow-md border border-white/20">
                <Lock className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
