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
  const [activeMainTab, setActiveMainTab] = useState('Postagens');
  const [activeFilterTab, setActiveFilterTab] = useState('Todos');

  return (
    <div className="mt-8 mx-5 mb-10 bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      {/* Top Switcher (Postagens / Mídias) */}
      <div className="flex px-4 pt-1 border-b border-border">
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
