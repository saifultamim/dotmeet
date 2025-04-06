// "use client";

// import { useEffect, useRef, useState } from "react";

// const useInViewScrollRotate = (options = { threshold: 0.3 }) => {
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

// export default useInViewScrollRotate;
"use client";

import { useEffect, useRef, useState } from "react";

const useInViewWithRotate = (options = { threshold: 0.3 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.3,
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options.threshold]);

  return [ref, isVisible] as const;
};

export default useInViewWithRotate;
