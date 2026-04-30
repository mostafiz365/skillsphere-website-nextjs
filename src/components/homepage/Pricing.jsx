import React from 'react';
import PricingCart from '@/components/PricingCart';

const Pricing = async() => {
    const res = await fetch('https://skillsphere-website-nextjs.vercel.app/pricingData.json');
    const pricingData = await res.json();
    return (
        <div>
            <div className='py-12'>
                <div className='text-center space-y-5 mb-10'>
                    <h3 className='text-5xl font-bold text-[#4737b0]'>Simple, Transparent Pricing</h3>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div >
                    
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-5'>
                    {
                        pricingData.map(data => <PricingCart key={data.id} data={data}></PricingCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;