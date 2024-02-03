import { useEffect, useState } from 'react';

type useInViewPropsType = {
  target: React.RefObject<HTMLElement>;
};

export const useInView = ({ target }: useInViewPropsType) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, [target]);

  return [inView];
};
