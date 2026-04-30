import Banner from "@/components/Banner";
import Courses from "@/components/homepage/Courses";
import Instructors from "@/components/homepage/Instructors";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <Instructors></Instructors>
    </div>
  );
}
