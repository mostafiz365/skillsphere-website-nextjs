
import CourseCard from "@/components/CourseCard";
import { Button, SearchField } from "@heroui/react";

const CoursesPage = async () => {
  const res = await fetch(
    "https://skillsphere-website-nextjs.vercel.app/data.json",
  );
  const courses = await res.json();
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="space-y-6">
        <div className="flex justify-between">
          <h2 className="text-5xl text-[#4737b0] text-center font-bold">
            Our All Courses
          </h2>
          <div className="flex gap-2 items-center">
            <SearchField name="search">
            <SearchField.Group className="bg-gray-200">
              <SearchField.SearchIcon />
              <SearchField.Input
                className="w-70"
                placeholder="Search..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <Button className="bg-[#4737b0]">Search</Button>
          </div>
          
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
