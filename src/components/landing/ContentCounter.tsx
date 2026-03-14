import { LayoutGrid, Image as ImageIcon } from 'lucide-react';

const ContentCounter = () => (
  <div className="mx-5 mt-6 mb-4 flex items-center justify-between bg-card border border-border rounded-xl p-3 shadow-sm">
    <div className="flex-1 flex items-center justify-center gap-2 border-r border-border text-primary font-medium text-sm">
      <LayoutGrid className="h-4 w-4" />
      <span>33 Postagens</span>
    </div>
    <div className="flex-1 flex items-center justify-center gap-2 text-muted-foreground font-medium text-sm">
      <ImageIcon className="h-4 w-4" />
      <span>25 Mídias</span>
    </div>
  </div>
);

export default ContentCounter;
