import Link from "next/link";
import CourseCard from "../CourseCard";

const Courses = async() => {
    const res = await fetch('https://skillsphere-website-nextjs.vercel.app/data.json');
    const courses = await res.json();
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="space-y-6">
                <div className="space-y-3">
                    <h2 className="text-5xl font-semibold text-[#4737b0] text-center">Popular Courses</h2>
                    <p className="text-gray-500 text-center text-lg">
                     Discover most popular courses to boost your skills effectively
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        courses.slice(0,3).map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>
                <div className="flex justify-center">
                <Link href="/courses"><button className="bg-[#4737b0] text-white font-semibold rounded-full py-4 px-8">All Courses</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;