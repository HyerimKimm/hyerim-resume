import { useEffect, useState } from 'react';
import { TABLET_WIDTH } from 'constants/constants';

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
        // 태블릿, 스마트폰의 경우 컴포넌트들의 height가 높아지므로 더 일찍 출력되도록 설정..
        threshold: window.innerWidth > Number(TABLET_WIDTH) ? 0.7 : 0.3,
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
