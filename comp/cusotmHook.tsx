// hooks/useInView.js
import { useEffect, useRef, useState } from "react";

const useInView = (options: any) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect(); // Only once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

export default useInView;

// import { useEffect, useRef, useState } from "react";

// const useInView = (options: IntersectionObserverInit = {}) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsVisible(entry.isIntersecting);
//     }, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, options]);

//   return [ref, isVisible] as const;
// };

// export default useInView;

// "use client";

// import { useEffect, useRef, useState } from "react";

// const useInViewScrollDown = (options = { threshold: 0.3 }) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const prevScrollY = useRef(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const currentScrollY = window.scrollY;

//         const isScrollingDown = currentScrollY > prevScrollY.current;
//         prevScrollY.current = currentScrollY;

//         if (entry.isIntersecting && isScrollingDown) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: options.threshold || 0.3,
//       }
//     );

//     const el = ref.current;
//     if (el) observer.observe(el);

//     return () => {
//       if (el) observer.unobserve(el);
//     };
//   }, [options.threshold]);

//   return [ref, isVisible] as const;
// };

// export default useInViewScrollDown;
