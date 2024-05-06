
import IndustryCard from './IndustryCard';

const industriesData = [
    { industry: 'Healthcare', imageUrl: '/services/health.svg' },
    { industry: 'eCommerce', imageUrl: '/services/ecommerce.svg' },
    { industry: 'Education', imageUrl: '/services/education.svg' },
    { industry: 'Travel & Hospitality', imageUrl: '/services/travel.svg' },
    { industry: 'Transportation & Logistics', imageUrl: '/services/truck.svg' },
    { industry: 'Social Networking & Entertainment', imageUrl: '/services/network.svg' },
    { industry: 'Banking, Finance & Insurance', imageUrl: '/services/banking.svg' },
    { industry: 'Real Estate', imageUrl: '/services/construction.svg' },
    { industry: 'Manufacturing', imageUrl: '/services/factory.svg' },
    { industry: 'Energy', imageUrl: '/services/power-line.svg' },
];

const IndustryGrid = () => {
    return (
        <div className='text-white p-6'>
            <h2 className="text-2xl text-center font-bold mb-4">
                Developing software solutions for a broad spectrum of industries.
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 p-4">
                {industriesData.map((data, index) => (
                    <IndustryCard key={index} {...data} />
                ))}
            </div>
        </div>

    );
};

export default IndustryGrid;
