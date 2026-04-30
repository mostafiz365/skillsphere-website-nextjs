import InstructorCard from "../InstructorCard";

const Instructors = async() => {
    const res = await fetch('https://skillsphere-website-nextjs.vercel.app/instuctor.json');
    const instructors = await res.json();
    return (
        <div className="max-w-7xl mx-auto my-10 space-y-5">
            <h2 className="text-5xl font-bold text-[#4737b0] text-center">Our Best Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    instructors.map(instructor => <InstructorCard key={instructor.id} instructor={instructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;