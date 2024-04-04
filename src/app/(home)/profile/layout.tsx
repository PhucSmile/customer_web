'use client';
import { useLoginContext } from '@/components/Context/LoginContext';
import { CheckLogin } from '@/components/Modals/auth/AuthModal';
import SidebarProfile from '@/components/Sidebar/SidebarProfile';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Button } from '@/components/MaterialTailwind';

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const { isLogin } = useLoginContext();
  return (
    <main className="bg-underground pb-20 min-h-screen">
      <div className="container mx-auto w-full flex gap-2 sm:gap-4 p-2 lg:px-5">
        <div className="flex flex-col">
          <SidebarProfile />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.3 }}
          className="grow"
        >
          {isLogin ? (
            children
          ) : (
            <CheckLogin>
              {({ openAuthModal }) => (
                <Button
                  variant="filled"
                  color="green"
                  size="sm"
                  className="hover:!bg-primary p-2 normal-case text-primary hover:text-white !transition-primary"
                  onClick={() => openAuthModal(() => {})}
                >
                  Đăng nhập
                </Button>
              )}
            </CheckLogin>
          )}
        </motion.div>
      </div>
    </main>
  );
}
