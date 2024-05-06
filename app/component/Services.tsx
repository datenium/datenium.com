import React, { ReactNode } from 'react';

interface ServiceProps {
  uid: string;
  category: string;
  description: string | ReactNode;
  image: string;
}

const servicesData = [
  {
    "uid":'1',
    "category": "AI/ML Consulting",
    "description": (
      <>
      <p></p>
      <ul className="list-disc ml-6">
        <li>Generative AI for innovative content creation.</li>
        <li>Machine Learning, offering tailored solutions for various business challenges.</li>
        <li>Deep Learning techniques for extracting valuable insights from large datasets.</li>
      </ul>
      </>
    ),
    "image":"/multimodal-ai3.jpg"
  }, 
  {
    "uid":'2',
    "category": "Web Development",
    "description": (
      <>
      <p> We deliver high-quality, scalable, and secure website and web applications which is perfectly aligned with your business goals.</p>
      <ul className="list-disc ml-6 p-3">
        <li>Web development and design.</li>
        <li>eCommerce website design.</li>
        <li>Website audit and QA.</li>
      </ul>
      </>
    ),"image":"/web-developer.jpg"
   
  },
  {
    "uid":'6',
    "category": "Mobile App Development",
    "description": (
      <>
      <p> Our experienced team of developers uses the latest technologies and best practices to create custom mobile apps that are user-friendly, efficient, and scalable.</p>
      <ul className="list-disc ml-6 p-3">
        <li>iOS App Development.</li>
        <li>Android App Development</li>
        <li> Cross-platform Development</li>
      </ul>
      </>
    ),"image":"/mobile.webp"
   
  },
  {
    "uid":'3',
    "category": "Cloud & DevOps",
    "description": (
      <>
      <p> Expert DevOps services to help businesses optimize their software development processes and achieve better business outcomes. Continuous integration, delivery, deployment, and monitoring.</p>
      <ul className="list-disc ml-6 p-3">
        <li> CI/CD Pipeline.</li>
        <li> Pilot Framework Creation.</li>
        <li> Assessment and Planning.</li>
      </ul>
      </>
    ),"image":"/cloud-devops.webp"
  },
  {
    "uid":'4',
    "category": "Data Science",
    "description": (
      <>
        <p>Our experienced team of data analysts uses cutting-edge technologies and tools to collect, analyze, and interpret data, providing our clients with valuable insights that can help them improve their operations.</p>
        <ul className="list-disc ml-6">      
          <li>Data analytics consultation.</li>
          <li> Data analytics implementation.</li>
        </ul>
      </>
    ),"image":"/data-science.webp"
  },
  {
     "uid":'5',
    "category": "Software Engineering",
    "description": (
      <>
        <p> We have over a decade of experience providing top-notch custom software development services for startups, mid-sized, and enterprise customers.</p>
        Managed delivery model.
        <ul className="list-disc ml-6 p-3">
          <li>Managed delivery model.</li>
          <li>Enterprise software development.</li>
          <li>Startups Software Development (MVP).</li>
        </ul>
      </>
    ),"image":"/software-development.webp"
  },
]


const OurService: React.FC<ServiceProps> = ({ uid, category, description, image }) => {
  const uuid = Number(uid);
  const isEven = uuid % 2 === 0;

  return (
    <div className="flex bg-white text-black flex-col md:flex-row items-center shadow-inner hover:shadow-lg ">
      <div className= "order-1 md:w-1/2 m-4 ">
        <img src={image} alt={category} className="w-full h-auto md:max-w-full mx-auto" />
      </div>
      <div className="flex flex-col text-center justify-center md:w-1/2 m-4 bg-white text-black">
        <h2 className="text-center bg-white text-black text-lg md:text-l lg:text-xl xl:text-2xl">
          {category}
        </h2>
        <div className="text-left bg-white text-black whitespace-no-wrap my-2">
          {description}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = () => {
  return (
    <div className='mx-auto max-w-screen-2xl px-4 my-16 sm:px-6 lg:px-8'>
      <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
      <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2 lg:gap-8 my-16 '>
        {servicesData.map((service, index) => (
          <OurService key={index} {...service} />
        ))}
      </div>
    </div>
  );
};


export default ServiceCard;

