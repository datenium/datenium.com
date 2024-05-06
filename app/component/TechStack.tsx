import Image from 'next/image';

const TechStack = () => {
  const techStackItems = [
    { src: '/techstack/logo-salesforce.svg', alt: 'Salesforce' },
    { src: '/techstack/python.svg', alt: 'Python' },
    { src: '/techstack/javascript-logo.svg', alt: 'JavaScript' },
    { src: '/techstack/aws-logo.svg', alt: 'Amazon Web Services' },
    { src: '/techstack/logo-shopify-white.svg', alt: 'Shopify' },
    { src: '/techstack/azure.svg', alt: 'Azure' },
    { src: '/techstack/logo-react.svg', alt: 'React' },
    { src: '/techstack/django-logo-positive.svg', alt: 'Django' },
    { src: '/techstack/flask.svg', alt: 'Flask' },
    { src: '/techstack/next-js.svg', alt: 'Next.js' },
  ];

  return (
    <div className="mx-auto my-10 px-4 py-10 sm:my-16 sm:px-6 lg:px-8 xl:px-12">
      <h2 className="text-3xl font-bold text-center sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
        We work with some pretty amazing technologies and platforms
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {techStackItems.map((item, index) => (
          <div key={index} className="group overflow-hidden flex justify-center items-center">
            <Image
              priority
              src={item.src}
              height={0}
              width={0}
              style={{ width: '50%', height: '50%', objectFit: 'contain'}}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
