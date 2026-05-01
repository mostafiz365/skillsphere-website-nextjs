"use client";

import { motion } from "framer-motion";
import UserImg from '@/assets/images/user.png';
import PackageImg from '@/assets/images/package.png';
import RocketImg from '@/assets/images/rocket.png';
import Image from 'next/image';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const GuideSection = () => {
  return (
    <div className='bg-[#F9FAFC]'>
      <div className='py-28'>

        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center space-y-5'
        >
          <h3 className='text-5xl font-bold text-[#4737b0]'>
            Get Started in 3 Steps
          </h3>
          <p className='text-[#627382]'>
            Start using premium digital tools in minutes, not hours.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-right mt-10 px-4'
        >

          {/* Card 1 */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.05 }}
            className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'
          >
            <div className="badge bg-[#4737b0] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">01</div>
            <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>
              <Image src={UserImg} alt="" />
            </div>
            <h4 className='text-2xl font-bold text-[#101727] text-center'>Create Account</h4>
            <p className='text-[#627382] text-center'>
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.05 }}
            className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'
          >
            <div className="badge bg-[#4737b0] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">02</div>
            <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>
              <Image src={PackageImg} alt="" />
            </div>
            <h4 className='text-2xl font-bold text-[#101727] text-center'>Choose Courses</h4>
            <p className='text-[#627382] text-center'>
              Browse our best courses and select the course that fit your interest.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.05 }}
            className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'
          >
            <div className="badge bg-[#4737b0] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">03</div>
            <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>
              <Image src={RocketImg} alt="" />
            </div>
            <h4 className='text-2xl font-bold text-[#101727] text-center'>Start Learning</h4>
            <p className='text-[#627382] text-center'>
              Download and start watching your premium course classes immediately.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default GuideSection;


// import UserImg from '@/assets/images/user.png';
// import PackageImg from '@/assets/images/package.png';
// import RocketImg from '@/assets/images/rocket.png';
// import Image from 'next/image';

// const GuideSection = () => {
//     return (
//         <div className='bg-[#F9FAFC]'>
//             <div className='py-28'>
//                 <div className='text-center space-y-5'>
//                     <h3 className='text-5xl font-bold text-[#4737b0]'>Get Started in 3 Steps</h3>
//                     <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
//                 </div>
//                 <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-right mt-10 px-4'>
//                     <div className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'>
//                         <div className="badge bg-[#4737b0] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">01</div>
//                         <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>                           
//                             <Image className='mx-auto items-center' src={UserImg} alt="" />
//                         </div>
//                         <h4 className='text-2xl font-bold text-[#101727] text-center'>Create Account</h4>
//                         <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
//                     </div>
//                     <div className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'>
//                         <div className="badge bg-[#4737b0] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">02</div>
//                         <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>                           
//                             <Image className='mx-auto items-center' src={PackageImg} alt="" />
//                         </div>
//                         <h4 className='text-2xl font-bold text-[#101727] text-center'>Choose Courses</h4>
//                         <p className='text-[#627382] text-center'>Browse our best courses and select the course that fit your interest.</p>
//                     </div>
//                     <div className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'>
//                         <div className="badge bg-[#4737b0] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">03</div>
//                         <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>                           
//                             <Image className='mx-auto items-center' src={RocketImg} alt="" />
//                         </div>
//                         <h4 className='text-2xl font-bold text-[#101727] text-center'>Start Learning</h4>
//                         <p className='text-[#627382] text-center'>Download and start watching your premium course classes immediately.</p>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default GuideSection;