import { MutableRefObject, useEffect, useState, useRef } from 'react';

export default function useIntersectionObserver(callback: Function) {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 }
    )
  );

  const observe = (element: Element) => {
    observer.current.observe(element);
  };

  const unobserve = (element: Element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
