import React from 'react';
import SEO from '../components/SEO';
import PricingBlock from "../components/mvpblocks/designer-pricing";

const Pricing = () => {
    return (
        <div className="pt-20">
            <SEO 
                title="Pricing"
                description="Choose the perfect eventone plan for your needs. Flexible pricing for individual organizers and businesses of all sizes."
                url="/pricing"
            />
            <PricingBlock />
        </div>
    );
};

export default Pricing;
