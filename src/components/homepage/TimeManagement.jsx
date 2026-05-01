"use client";

import { Card } from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";
import TimeImg from "@/assets/images/time-2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const tips = [
  "Set clear daily study goals",
  "Prioritize important tasks first",
  "Use time blocking for deep work",
  "Avoid multitasking to stay focused"
];

// container for list
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// list item animation (different style)
const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

export default function TimeManagement() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-[#4737b0]">
            Time Management
          </h2>

          <p className="text-gray-500 mb-8">
            Manage your study time efficiently and boost productivity
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="space-y-4"
          >
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="p-4 border border-gray-200 shadow-sm rounded-xl group hover:shadow-md transition">

                  <div className="flex items-center gap-3 text-gray-700 text-lg">
                    
                    {/* icon animation */}
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-green-500"
                    >
                      <FaCheckCircle />
                    </motion.span>

                    {tip}
                  </div>

                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (parallax tilt effect) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              rotateY: 10,
              rotateX: 5,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 150 }}
            className="perspective-[1000px]"
          >
            <Image
              src={TimeImg}
              alt="Time Management Image"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}



// import { Card } from "@heroui/react";
// import { FaCheckCircle } from "react-icons/fa";
// import TimeImg from '@/assets/images/time-2.jpg';
// import Image from "next/image";

// const tips = [
//   "Set clear daily study goals",
//   "Prioritize important tasks first",
//   "Use time blocking for deep work",
//   "Avoid multitasking to stay focused"
// ];

// export default function TimeManagement() {
//   return (
//     <section className="py-16 px-6 bg-white">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
//         {/* Left Content */}
//         <div>
//           <h2 className="text-5xl font-bold mb-4 text-[#4737b0]">
//             Time Management
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Manage your study time efficiently and boost productivity
//           </p>

//           <div className="space-y-4">
//             {tips.map((tip, i) => (
//               <Card key={i} className="border shadow-sm border-gray-300">
//                 <h3 className="flex items-center gap-3 text-gray-600 text-xl">
//                   <span className="text-green-600">
//                     <FaCheckCircle />
//                   </span>
//                   {tip}
//                 </h3>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Right Visual */}
//         <div className="rounded-2xl h-80 flex items-center justify-center text-gray-400">
//           <Image src={TimeImg} alt="Time Management Image" width={600} height={500} className="rounded-xl"></Image>
//         </div>
//       </div>
//     </section>
//   );
// }
