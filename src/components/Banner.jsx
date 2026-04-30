import Image from "next/image";
import BannerImg from '@/assets/images/banner.png';

const Banner = () => {
  return (
    <div className="bg-[#292654]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-16 px-4">
            <div className="justify-center space-y-4 my-auto">
                <h2 className="text-5xl font-bold text-white">Invest In Your Future With <br /> <span className="text-[#ed5cac]">High-Quality</span> Online Education</h2>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia ab, totam tempore iure temporibus.</p>
                <button className="bg-[#4737b0] text-white font-semibold rounded-full py-3 px-5">Join Us Now</button>
            </div>
            <div>
                <Image src={BannerImg} alt="banner Image" height={800} width={600} className="mx-auto rounded-lg"></Image>
            </div>
        </div>
    </div>
  );
};

export default Banner;