import Banner from "@/components/Banner";
import Courses from "@/components/homepage/Courses";
import GuideSection from "@/components/homepage/GuideSection";
import Instructors from "@/components/homepage/Instructors";
import Stats from "@/components/homepage/Stats";
import StudyTechniques from "@/components/homepage/StudyTechniques";
import TimeManagement from "@/components/homepage/TimeManagement";
import TrendingCourses from "@/components/homepage/TrendingCourses";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <Stats></Stats>
      <StudyTechniques></StudyTechniques>
      <TimeManagement></TimeManagement>
      <Instructors></Instructors>
      <TrendingCourses></TrendingCourses>
      <GuideSection></GuideSection>
    </div>
  );
}
