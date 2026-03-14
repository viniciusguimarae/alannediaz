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
  const [activeFilterTab, setActiveFilterTab] = useState('Todos');

  return (
    <div className="mb-10 w-full bg-white border border-black/5 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">

      {/* Filter Tabs Menu */}
      <div className="flex items-center justify-center pt-4 pb-4 gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilterTab(tab)}
            className={cn(
              'px-4 py-1.5 text-xs font-medium transition-colors rounded-full',
              activeFilterTab === tab
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            )}
            style={{ fontFamily: 'Outfit' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid 3x3 */}
      <div className="p-2 pt-0 grid grid-cols-3 gap-[2px]">
        {MEDIA_MOCKS.map((imgSrc, index) => (
          <div key={index} className="relative aspect-square flex items-center justify-center group overflow-hidden bg-muted">
            {/* Background Image Blurred */}
            <img 
              src={imgSrc} 
              alt="Locked content" 
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              style={{ filter: 'blur(10px) brightness(80%)' }}
            />
            {/* Lock Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center backdrop-blur-sm shadow-sm border border-white/20">
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
