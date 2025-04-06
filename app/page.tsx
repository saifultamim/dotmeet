// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const page = () => {
//   return (
//     <div className="w-11/12 mx-auto mb-[500px]">
//       <p className="mb-[600px]">dot meet</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-6 p-4">
//         {[...Array(10)].map((_, index) => (
//           <motion.div
//             key={index}
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.3 }}
//             className=""
//           >
//             <Image
//               className="pb-9 rounded-lg"
//               src="/images/video.png"
//               alt={`video-${index}`}
//               height={350}
//               width={350}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
"use client";
import Image from "next/image";
import React from "react";

import useInView from "@/comp/cusotmHook";
import { cn } from "@/utils";

const Page = () => {
  return (
    <div className="w-11/12 mx-auto mb-[900px]">
      <p className="mb-[600px]">dot meet</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-6 p-4">
        {[...Array(10)].map((_, index) => {
          const [ref, isVisible] = useInView({
            threshold: 0.3,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={cn(
                "transition duration-700 ease-out transform",
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              )}
            >
              <Image
                className="pb-9 rounded-lg"
                src="/images/video.png"
                alt={`video-${index}`}
                height={350}
                width={350}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

// "use client";

// import Image from "next/image";
// import React from "react";
// import cn from "clsx"; // or clsx, same usage
// import useInView from "@/comp/cusotmHook";

// const Page = () => {
//   return (
//     <div className="w-11/12 mx-auto">
//       <p className="mb-[600px]">dot meet</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-6 p-4">
//         {[...Array(10)].map((_, index) => {
//           const [ref, isVisible] = useInView({ threshold: 0.3 });

//           return (
//             <div
//               key={index}
//               ref={ref}
//               className={cn(
//                 "transition duration-700 ease-out transform",
//                 isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
//               )}
//             >
//               <Image
//                 className="pb-9 rounded-lg"
//                 src="/images/video.png"
//                 alt={`video-${index}`}
//                 height={350}
//                 width={350}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Page;
// "use client";

// import Image from "next/image";
// import React from "react";
// import cn from "clsx";
// import useInViewScrollDown from "@/comp/cusotmHook";

// const Page = () => {
//   return (
//     <div className="w-11/12 mx-auto">
//       <p className="mb-[600px]">dot meet</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-around gap-6 p-4">
//         {[...Array(10)].map((_, index) => {
//           const [ref, isVisible] = useInViewScrollDown({ threshold: 0.3 });

//           return (
//             <div
//               key={index}
//               ref={ref}
//               className={cn(
//                 "transition duration-700 ease-out transform",
//                 isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
//               )}
//             >
//               <Image
//                 className="pb-9 rounded-lg"
//                 src="/images/video.png"
//                 alt={`video-${index}`}
//                 height={350}
//                 width={350}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Page;
