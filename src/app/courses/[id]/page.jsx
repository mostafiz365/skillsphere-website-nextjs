import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const CourseDetailPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://skillsphere-website-nextjs.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(item => item.id == id);
    return (
        <div>
      <div className="max-w-4xl mx-auto py-10 space-y-4">
        <h2 className="text-3xl font-bold text-[#4737b0] text-center">Course Detail Page</h2>

        <div className="border border-[#E7E7E7] rounded-lg">
            <div className='px-4 py-5 space-y-2'>
                <h2 className="text-2xl font-bold text-[#4737b0]">
                    {course.title}
                </h2>
                <h4 className='text-lg font-medium text-gray-500'>{course.instructor}</h4>
            </div>
          <div className="px-4 space-y-5">
            <Image
              src={course.image}
              alt={course.title}
              height={250}
              width={400}
              className="w-full rounded-xl"
            ></Image>
            <p className="text-[#706F6F]">{course.description}</p>
            
            <div className="divider"></div>
          </div>
          <div className='px-4 space-y-2'>
            <p className='text-[#706F6F] font-medium text-xl'>Course Duration: {course.duration}</p>
            <p className='text-[#706F6F] font-medium text-xl'>Course Level: {course.level}</p>
          </div>
          <div className="flex justify-between items-center px-4 pb-5">          
            <div className="flex items-center gap-2">
              <FaStar className="text-[#4737b0]" />
              <FaStar className="text-[#4737b0]" />
              <FaStar className="text-[#4737b0]" />
              <FaStar className="text-[#4737b0]" />
              <FaStar className="text-[#4737b0]" />
              <p className="text-[#706F6F] font-medium">{course.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CourseDetailPage;