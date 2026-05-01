import { Card, CardHeader } from "@heroui/react";


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

export default function StudyTechniques() {
  return (
    <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto ">

      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#4737b0]">Study Techniques</h2>
        <p className="text-gray-500 mt-3">
          Proven methods to learn faster and retain more
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techniques.map((item, i) => (
          <Card key={i} className="shadow-md border border-gray-300">
            <CardHeader className="font-semibold text-2xl text-green-500">
              {item.title}
            </CardHeader>
            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
        </div>
    </section>
  );
}
