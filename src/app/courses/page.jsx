"use client";
import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Button, SearchField } from "@heroui/react";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  // data fetch
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch(
        "https://skillsphere-website-nextjs.vercel.app/data.json"
      );
      const data = await res.json();
      setCourses(data);
      setFilteredCourses(data);
    };
    fetchCourses();
  }, []);

  // search function
  const handleSearch = () => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="space-y-6">
        <div className="flex justify-between flex-col md:flex-row gap-2.5">
          <h2 className="text-4xl text-[#4737b0] text-center font-bold">
            Our All Courses
          </h2>

          <div className="flex gap-2 items-center justify-center">
            <SearchField>
              <SearchField.Group className="bg-gray-200">
                <SearchField.SearchIcon />
                <SearchField.Input
                  className="w-40"
                  placeholder="Search..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>

            <Button onClick={handleSearch} className="bg-[#4737b0] text-white">
              Search
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No courses found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;




// import CourseCard from "@/components/CourseCard";
// import { Button, SearchField } from "@heroui/react";

// const CoursesPage = async () => {
//   const res = await fetch(
//     "https://skillsphere-website-nextjs.vercel.app/data.json",
//   );
//   const courses = await res.json();
//   return (
//     <div className="max-w-7xl mx-auto my-10">
//       <div className="space-y-6">
//         <div className="flex justify-between flex-col md:flex-row gap-2.5">
//           <h2 className="text-4xl text-[#4737b0] text-center font-bold">
//             Our All Courses
//           </h2>
//           <div className="flex gap-2 items-center justify-center">
//             <SearchField name="search">
//             <SearchField.Group className="bg-gray-200">
//               <SearchField.SearchIcon />
//               <SearchField.Input
//                 className="w-36"
//                 placeholder="Search..."
//               />
//               <SearchField.ClearButton />
//             </SearchField.Group>
//           </SearchField>
//           <Button className="bg-[#4737b0]">Search</Button>
//           </div>
          
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course}></CourseCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursesPage;
