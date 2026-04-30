import React from 'react';

const CourseDetailPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://skillsphere-website-nextjs.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(item => item.id == id)
    console.log(course);
    return (
        <div>
            <h2>Here is Your Course Details</h2>
            <h2>{course.title}</h2>
        </div>
    );
};

export default CourseDetailPage;