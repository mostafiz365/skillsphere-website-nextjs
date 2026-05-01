"use client";

import { Card, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";

const techniques = [
  {
    title: "Active Recall",
    desc: "Test yourself instead of passive reading to improve memory retention."
  },
  {
    title: "Spaced Repetition",
    desc: "Review content at increasing intervals for long-term memory."
  },
  {
    title: "Pomodoro Technique",
    desc: "Study 25 minutes, take 5-minute breaks to stay focused."
  },
  {
    title: "Mind Mapping",
    desc: "Visualize concepts and connect ideas effectively."
  }
];

// container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// card animation
const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function StudyTechniques() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold text-[#4737b0]">
            Study Techniques
          </h2>
          <p className="text-gray-500 mt-3">
            Proven methods to learn faster and retain more
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techniques.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group"
            >
              <Card className="p-5 shadow-md border border-gray-200 rounded-2xl bg-white transition-all duration-300 group-hover:shadow-xl group-hover:border-[#4737b0]/30">
                
                <CardHeader className="font-semibold text-xl text-[#4737b0]">
                  {item.title}
                </CardHeader>

                <p className="text-gray-500 text-sm mt-2">
                  {item.desc}
                </p>

                {/* subtle bottom glow line */}
                <div className="h-[2px] w-0 bg-[#4737b0] mt-4 transition-all duration-300 group-hover:w-full"></div>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}




// import { Card, CardHeader } from "@heroui/react";

// const techniques = [
//   {
//     title: "Active Recall",
//     desc: "Test yourself instead of passive reading to improve memory retention."
//   },
//   {
//     title: "Spaced Repetition",
//     desc: "Review content at increasing intervals for long-term memory."
//   },
//   {
//     title: "Pomodoro Technique",
//     desc: "Study 25 minutes, take 5-minute breaks to stay focused."
//   },
//   {
//     title: "Mind Mapping",
//     desc: "Visualize concepts and connect ideas effectively."
//   }
// ];

// export default function StudyTechniques() {
//   return (
//     <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto ">

//       <div className="text-center mb-12">
//         <h2 className="text-5xl font-bold text-[#4737b0]">Study Techniques</h2>
//         <p className="text-gray-500 mt-3">
//           Proven methods to learn faster and retain more
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {techniques.map((item, i) => (
//           <Card key={i} className="shadow-md border border-gray-300">
//             <CardHeader className="font-semibold text-2xl text-green-500">
//               {item.title}
//             </CardHeader>
//             <p className="text-gray-500 text-sm">
//               {item.desc}
//             </p>
//           </Card>
//         ))}
//       </div>
//         </div>
//     </section>
//   );
// }
