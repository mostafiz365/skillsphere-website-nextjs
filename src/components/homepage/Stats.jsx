"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const StatItem = ({ value, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + "+";
      }
    });
  }, [spring]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="space-y-3.5 text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
    >
      <h3
        ref={ref}
        className="text-6xl font-extrabold text-white"
      >
        0+
      </h3>
      <h5 className="text-2xl font-medium text-white/80">
        {label}
      </h5>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className='bg-[#292654] mb-28'
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-4'>

        <StatItem value={12} label="Years Experience" />
        <StatItem value={2000} label="Premium Students" />
        <StatItem value={40} label="Course Subjects" />
        <StatItem value={13} label="Course Instructors" />

      </div>
    </motion.div>
  );
};

export default Stats;




// const Stats = () => {
//     return (
//         <div className='bg-[#292654] mb-28'>
//             <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 justify-between py-16'>
//                 <div className='space-y-3.5 text-center'>
//                     <h3 className='text-6xl font-extrabold text-white'>12+</h3>
//                     <h5 className='text-2xl font-medium text-white'>Years Experience</h5>
//                 </div>
//                 <div className='space-y-3.5 text-center'>
//                     <h3 className='text-6xl font-extrabold text-white'>2000+</h3>
//                     <h5 className='text-2xl font-medium text-white'>Premium Students</h5>
//                 </div>
//                 <div className='space-y-3.5 text-center'>
//                     <h3 className='text-6xl font-extrabold text-white'>40+</h3>
//                     <h5 className='text-2xl font-medium text-white'>Course Subjects</h5>
//                 </div>
//                 <div className='space-y-3.5 text-center'>
//                     <h3 className='text-6xl font-extrabold text-white'>13+</h3>
//                     <h5 className='text-2xl font-medium text-white'>Course Instructors</h5>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Stats;