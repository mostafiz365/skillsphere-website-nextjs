import CourseCard from "@/components/CourseCard";

const CoursesPage = async() => {
    const res = await fetch('https://skillsphere-website-nextjs.vercel.app/data.json');
    const courses = await res.json();
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="space-y-6">
                <h2 className='text-5xl text-[#4737b0] text-center font-bold'>Our All Courses</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                    {
                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;