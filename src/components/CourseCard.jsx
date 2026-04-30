import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CourseCard = ({course}) => {
    return (
        <Card className="border border-gray-300 rounded-lg">
      <div className="relative w-full aspect-square">
            <Image src={course.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={course.title}
                className="object-cover rounded-xl"></Image>

                <Chip size="sm" className="absolute right-2 top-2">{course.category}</Chip>
            </div>
      <div className="space-y-2">
        <h2 className=" font-semibold text-xl text-[#4737b0]">{course.title}</h2>
        <h4 className="text-xl font-medium">{course.instructor}</h4>
        <p className="font-medium text-[#4737b0] flex items-center gap-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />{course.rating}</p>
      </div>
      <Link href={``}>
        <Button className={'w-full font-semibold bg-[#4737b0]'}>View Details </Button>
      </Link>
    </Card>
    );
};

export default CourseCard;