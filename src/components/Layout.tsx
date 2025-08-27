import { ReactNode } from 'react';
import Header from './Header';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Header />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;