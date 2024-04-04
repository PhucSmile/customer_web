'use client';
import Footer from '@/components/Footers/Footer';
import Header from '@/components/Headers/Header';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.3 }}
        className="py-20 px-2 md:px-0 min-h-screen select-none "
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
}
