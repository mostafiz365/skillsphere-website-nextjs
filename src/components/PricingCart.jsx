import CheckImg from '@/assets/images/Check.png'
import Image from 'next/image';

const PricingCart = ({data}) => {
    return (
        <div className='relative'>
            <div className='bg-[#F9FAFC] p-6 border-2 border-[#F2F2F2] space-y-6 rounded-2xl hover:bg-[#4737b0] duration-1000 text-black hover:text-white hover:duration-300 hover:scale-105'>
                <div>
                    <h3 className='text-2xl font-bold'>{data.name}</h3>
                    <p className=''>{data.description}</p>

{/* text-[#101727] text-[#627382] */}
                </div>
                <h3 className='text-[40px] font-bold'>${data.price}<span className='text-xl'>/{data.period}</span></h3>
                <div className=''>

                    {
                        (data.features).map((feature, index) => <li key={index} className='flex items-center gap-2.5 font-medium'> <Image src={CheckImg} alt="" />{feature}</li>)
                    }

                </div>
                <button className="btn font-semibold text-white w-full rounded-full px-4 py-5 bg-[#4737b0]">{data.buttonText}</button>
                <div>
                    {
                    data.tag === 'Most Popular' && <div className="badge bg-[#FEF3C6] text-[#BB4D00] font-medium rounded-full px-3 py-3 absolute -top-3 left-36">Most Popular</div>
                    }
                </div>
                
                             

            </div>
        </div>
    );
};

export default PricingCart;