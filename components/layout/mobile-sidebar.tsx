'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sideLinks } from '@/constants/data';
import { useSidebar } from '@/hooks/useSidebar';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import AdminNav from './admin/admin-nav';

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <>
      <Sheet open={status} onOpenChange={setStatus}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="w-60 !px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
                <AdminNav
                  id="sidebar-menu"
                  className={`z-40 h-full flex-1 ${
                    isMinimized
                      ? 'max-h-screen'
                      : 'max-h-0 py-0 md:max-h-screen md:py-2'
                  }`}
                  closeNav={() => handleToggle}
                  links={sideLinks}
                  isCollapsed={isMinimized}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
