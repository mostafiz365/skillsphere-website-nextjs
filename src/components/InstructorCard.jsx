import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const InstructorCard = ({instructor}) => {
    return (
        <Card className="border border-gray-300 rounded-lg">
              <div className="relative w-full aspect-square">
                    <Image src={instructor.image}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt={instructor.name}
                                    className="object-cover rounded-xl"></Image>
                    </div>
              <div className="space-y-2">
                <h2 className=" font-semibold text-xl text-[#4737b0]">{instructor.name}</h2>
                <h4 className="text-xl font-medium">{instructor.expertise}</h4>
                <p className="font-medium text-[#4737b0] flex items-center gap-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />{instructor.rating}</p>
              </div>
                <Button className={'w-full font-semibold bg-[#4737b0]'}>View Details </Button>
            </Card>
    );
};

export default InstructorCard;