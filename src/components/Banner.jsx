"use client";

import Image from "next/image";
import BannerImg from "@/assets/images/banner.png";
import { motion } from "framer-motion";

// text container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// each text item
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Banner = () => {
  return (
    <div className="bg-[#292654] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-20 px-4 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-5"
        >
          <motion.h2
            variants={item}
            className="text-5xl font-bold text-white leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Invest In Your Future With <br />
            </motion.span>

            {/* Animated Highlight Text */}
            <motion.span
              initial={{ backgroundPosition: "200% center" }}
              animate={{ backgroundPosition: "0% center" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="bg-gradient-to-r from-pink-400 via-[#ed5cac] to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              High-Quality
            </motion.span>

            <br />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Online Education
            </motion.span>
          </motion.h2>

          <motion.p variants={item} className="text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia ab,
            totam tempore iure temporibus.
          </motion.p>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4737b0] text-white font-semibold rounded-full py-3 px-6 shadow-lg"
          >
            Join Us Now
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={BannerImg}
              alt="banner Image"
              height={800}
              width={600}
              className="mx-auto rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

// import Image from "next/image";
// import BannerImg from '@/assets/images/banner.png';

// const Banner = () => {
//   return (
//     <div className="bg-[#292654]">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-16 px-4">
//             <div className="justify-center space-y-4 my-auto">
//                 <h2 className="text-5xl font-bold text-white">Invest In Your Future With <br /> <span className="text-[#ed5cac]">High-Quality</span> Online Education</h2>
//                 <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia ab, totam tempore iure temporibus.</p>
//                 <button className="bg-[#4737b0] text-white font-semibold rounded-full py-3 px-5">Join Us Now</button>
//             </div>
//             <div>
//                 <Image src={BannerImg} alt="banner Image" height={800} width={600} className="mx-auto rounded-lg"></Image>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Banner;
