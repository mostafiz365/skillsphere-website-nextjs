import Banner from "@/components/Banner";
import Courses from "@/components/homepage/Courses";
import GuideSection from "@/components/homepage/GuideSection";
import Instructors from "@/components/homepage/Instructors";
import Pricing from "@/components/homepage/Pricing";
import Stats from "@/components/homepage/Stats";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <Stats></Stats>
      <Instructors></Instructors>
      <Pricing></Pricing>
      <GuideSection></GuideSection>
    </div>
  );
}
