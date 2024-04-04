import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import '@/styles/embla.css';
import '@/styles/sanbox.css';

type PropType = {
  options?: EmblaOptionsType;
  data: string[];
  mapContainer: (item: string, index: number) => ReactNode;
  mapThumb: (item: string, index: number) => ReactNode;
};

export const imageByIndex = (array: string[], index: number): string =>
  array?.[index % array.length];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, data, mapContainer, mapThumb } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div
        className="embla__viewport rounded-xl overflow-hidden"
        ref={emblaMainRef}
      >
        <div className="embla__container rounded-xl">
          {data.map(mapContainer)}
        </div>
      </div>

      <div className="embla-thumbs max-w-xs sm:max-w-md">
        <div
          className="embla-thumbs__viewport text-center my-4"
          ref={emblaThumbsRef}
        >
          <div className="embla-thumbs__container">
            {data.map((item, index) => (
              <div
                key={index}
                className={`embla-thumbs__slide px-1 ${
                  index === selectedIndex ? 'embla-thumbs__slide--selected' : ''
                }`}
              >
                <button
                  onClick={() => onThumbClick(index)}
                  className={`${
                    index === selectedIndex ? '!opacity-100' : ''
                  } appearance-none bg-transparent touch-action-manipulation block text-decoration-none cursor-pointer border-0 p-0 m-0 w-full opacity-20 transition-opacity duration-200`}
                  type="button"
                >
                  {mapThumb(item, index)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
