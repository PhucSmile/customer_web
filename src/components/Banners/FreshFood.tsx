'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const FreshFood = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 50,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className="relative flex justify-between items-center overflow-hidden"
    >
      <Image
        src="/img/banner/banner-fresh-food.jpg"
        alt=""
        height={0}
        width={0}
        priority
        sizes="100vw"
        className="w-full h-[30vh] md:h-[50vh] object-cover"
      />
      <motion.div
        variants={cardVariants}
        className="absolute px-[5vh] text-white animate-slideUp"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
          Fresh Food to
        </h1>
        <div className="pl-[5vw]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold ">
            Your Home
          </h1>
          <h1 className="text-base sm:text-lg md:text-xl font-semibold max-w-sm">
            We only use fresh and ingredients from our network of trusted
            partners
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FreshFood;
