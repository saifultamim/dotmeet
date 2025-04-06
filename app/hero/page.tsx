// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import cn from "clsx";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const images = [
//     "/images/video.png",
//     "/images/project4.webp",
//     "/images/video.png",
//   ];

//   // Auto slider functionality with setInterval
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, 3000); // Changes slide every 3 seconds (3000ms)

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [images.length]);

//   // Hero section on scroll visibility
//   const handleScroll = () => {
//     const heroSection = document.getElementById("hero");
//     if (heroSection) {
//       const rect = heroSection.getBoundingClientRect();
//       setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       id="hero"
//       className="relative w-full h-screen bg-gray-800 flex items-center justify-center overflow-hidden"
//     >
//       <div
//         className={cn(
//           "absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out",
//           isVisible ? "scale-110 opacity-100" : "scale-95 opacity-50"
//         )}
//       >
//         <Image
//           src={images[currentSlide]}
//           alt="Hero Image"
//           layout="fill"
//           objectFit="cover"
//           //   priority
//         />
//       </div>
//       <div className="relative z-10 text-center text-white">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
//         <p className="text-xl">
//           We offer the best services for your business needs. Explore more!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cn from "clsx";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    "/images/project4.webp",
    "/images/project4.webp",
    "/images/video.png",
  ];

  // Auto slider functionality with setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Changes slide every 3 seconds (3000ms)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Hero section on scroll visibility
  const handleScroll = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full h-screen bg-gray-800 flex items-center justify-center overflow-hidden"
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out",
          isVisible ? "scale-110 opacity-100" : "scale-95 opacity-50",
          `transform transition-transform duration-1000 ease-in-out`
        )}
        style={{
          transform: `scale(${1 + currentSlide * 0.05})`, // Zoom in effect on each slide change
        }}
      >
        <Image
          src={images[currentSlide]}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl">
          We offer the best services for your business needs. Explore more!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
