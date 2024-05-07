/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { ReactNode } from 'react';


interface ServiceProps {
  id: number;
  title: string;
  description: string | ReactNode;
  icon: string;
}


const ServiceCard = ({ service }: {service:ServiceProps}) => {
  const { id, title, description, icon } = service;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex items-center justify-center mb-4">
      <img src={icon} alt={title} width={250} height={100} />
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <p className="text-gray-700 text-left mb-4">{description}</p>
      <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Generative AI Solutions',
      description: 'Strategic Expert Guidance for Business-Centric R&D in Generative AI Projects',
      icon: '/public/multimodal-ai3.jpg',
    },
    {
      id: 2,
      title: 'Full Stack Solutions',
      description: 'End-to-End Mobile and Web App Development by Full Stack Experts',
      icon: '/public/full-stack.png',
    },
    {
      id: 3,
      title: 'Saas Product Solutions',
      description: 'Expertly Crafted SaaS Applications for Your Unique Business Requirements',
      icon: '/public/bg-featured_img.png',
    },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <p className="text-gray-600 text-center">
          We offer a wide range of services to meet your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;



