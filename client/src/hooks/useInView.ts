import { useEffect, useState } from 'react';

type useInViewPropsType = {
  target: React.RefObject<HTMLElement>;
};

export const useInView = ({ target }: useInViewPropsType) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && setInView(true);
        });
      },
      {
        threshold: 0.8,
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
