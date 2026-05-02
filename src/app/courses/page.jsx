"use client";
import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Button, SearchField } from "@heroui/react";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className='flex h-[80vh] justify-center items-center'>
            All Courses Loading
            <span className="loading loading-dots loading-xl"></span>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;