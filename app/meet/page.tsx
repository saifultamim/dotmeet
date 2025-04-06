// import Image from "next/image";
// import React from "react";
// import logo from "@/public/images/meet.png";

// const page = () => {
//   return (
//     <div>
//       <p>meet</p>
//       {/* <div>
//         <Image
//           src={logo}
//           alt="title"
//           className="border border-red-600 w-96 animate-spin"
//         />
//       </div>
//       <div>
//         <Image
//           src={logo}
//           alt="title"
//           className="border border-red-600 w-96 transition-transform duration-500 hover:rotate-180"
//         />
//       </div> */}

//       <div>
//         <Image
//           src={logo}
//           alt="title"
//           className="border border-red-600 w-96 rotate-90"
//         />
//       </div>
//     </div>
//   );
// };

// export default page;
// "use client";

// import Image from "next/image";
// import React from "react";
// import logo from "@/public/images/meet.png";
// import useInViewScrollRotate from "@/comp/meet";

// const Page = () => {
//   const [ref, isVisible] = useInViewScrollRotate({ threshold: 0.3 });

//   return (
//     <div className="w-11/12 mx-auto">
//       <div className="grid grid-cols-1 justify-center gap-6 p-4">
//         <div
//           ref={ref}
//           className={`transition-transform duration-700 ease-out ${
//             isVisible ? "rotate-180" : "rotate-0"
//           }`}
//         >
//           <Image
//             src={logo}
//             alt="title"
//             className="border border-red-600 w-96 rotate-60"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
// "use client";

// import Image from "next/image";
// import React from "react";

// import logo from "@/public/images/meet.png";
// import useInViewWithRotate from "@/comp/meet";
// const Page = () => {
//   const [ref, isVisible] = useInViewWithRotate({ threshold: 0.3 });

//   return (
//     <div className="w-11/12 mx-auto mb-[1000px] mt-[1000px]">
//       <div className="">
//         <div ref={ref}>
//           <Image
//             src={logo}
//             alt="title"
//             className={`border border-red-600 w-96 transition-transform duration-700 ease-out ${
//               isVisible ? "-rotate-30" : "rotate-0"
//             }`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import logo from "@/public/images/meet.png";
// import useInViewWithRotate from "@/comp/meet";

// const Page = () => {
//   const [ref, isVisible] = useInViewWithRotate({ threshold: 0.3 });
//   const [scrollDirection, setScrollDirection] = useState<string | null>(null);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         // Scrolling down
//         setScrollDirection("down");
//       } else if (window.scrollY < lastScrollY) {
//         // Scrolling up
//         setScrollDirection("up");
//       }

//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="w-11/12 mx-auto mb-[1000px] ">
//       <div ref={ref}>
//         <Image
//           src={logo}
//           alt="title"
//           className={`border border-red-600 w-96 transition-transform duration-700 ease-out ${
//             isVisible && scrollDirection === "up" ? "-rotate-30" : "rotate-0"
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/meet.png";
import useInViewWithRotate from "@/comp/meet";

const Page = () => {
  const [ref, isVisible] = useInViewWithRotate({ threshold: 0.3 });
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Rotate the image on page reload
    setInitialLoad(true);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection("down");
      } else if (window.scrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection("up");
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Disable initial rotation once the page is scrolled or the component is mounted
    setInitialLoad(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-11/12 mx-auto mb-[1000px] ">
      <div ref={ref}>
        <Image
          src={logo}
          alt="title"
          className={`w-96 transition-transform duration-700 ease-out ${
            initialLoad
              ? "rotate-0"
              : isVisible && scrollDirection === "up"
              ? "rotate-107"
              : "-rotate-12"
          }`}
        />
      </div>
    </div>
  );
};

export default Page;
