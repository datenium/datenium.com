import Image from "next/image";
interface IndustryCard {
    industry: string;
    imageUrl: string;
}

const IndustryCard: React.FC<IndustryCard> = ({ industry, imageUrl }) => {
    return (
        <div className="group overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
            <Image
                priority
                src={imageUrl}
                height={0}
                width={0}
                style={{ width: '50%', height: '50%',  objectFit: 'contain', marginTop: '1rem'  }}
                alt={`${industry} Image`}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-black">{industry}</h2>
                {/* <p className="text-gray-600">{description}</p> */}
            </div>
        </div>

    );
};

export default IndustryCard;
