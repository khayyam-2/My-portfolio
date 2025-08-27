import CustomCursor from '@/components/CustomCursor';
import LeftPanel from '@/components/LeftPanel';
import RightPanel from '@/components/RightPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />
      <div className="flex flex-col lg:flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default Index;
