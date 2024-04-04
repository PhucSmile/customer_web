import Image from 'next/image';
import React from 'react';

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={`embla-thumbs__slide ${
        selected ? 'embla-thumbs__slide--selected' : ''
      }`}
    >
      <button
        onClick={onClick}
        className={`${
          selected ? '!opacity-100' : ''
        } appearance-none bg-transparent touch-action-manipulation block text-decoration-none cursor-pointer border-0 p-0 m-0 w-full opacity-20 transition-opacity duration-200`}
        type="button"
      >
        <Image
          className="w-full h-20 bg-underground rounded-md object-fit"
          src={imgSrc}
          alt="Your alt text"
          width={0}
          height={0}
          sizes="100vw"
        />
      </button>
    </div>
  );
};
