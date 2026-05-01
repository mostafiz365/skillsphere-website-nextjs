
import { Card } from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";
import TimeImg from '@/assets/images/time-2.jpg';
import Image from "next/image";

const tips = [
  "Set clear daily study goals",
  "Prioritize important tasks first",
  "Use time blocking for deep work",
  "Avoid multitasking to stay focused"
];

export default function TimeManagement() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-bold mb-4 text-[#4737b0]">
            Time Management
          </h2>
          <p className="text-gray-500 mb-6">
            Manage your study time efficiently and boost productivity
          </p>

          <div className="space-y-4">
            {tips.map((tip, i) => (
              <Card key={i} className="border shadow-sm border-gray-300">
                <h3 className="flex items-center gap-3 text-gray-600 text-xl">
                  <span className="text-green-600">
                    <FaCheckCircle />
                  </span>
                  {tip}
                </h3>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="rounded-2xl h-80 flex items-center justify-center text-gray-400">
          <Image src={TimeImg} alt="Time Management Image" width={600} height={500} className="rounded-xl"></Image>
        </div>
      </div>
    </section>
  );
}
