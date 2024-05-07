// components/Footer.js
import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

type LinkItem = {
  text: string;
  href: string;
};

type Props = {
  title: string;
  links: LinkItem[];
};

const LinkList: React.FC<Props> = ({ title, links }) => {
  return (
    <div className="space-y-2 my-4">
      <h3 className="font-bold">{title}</h3>
      {links.map(({ text, href }) => (
        <li key={href} className="list-none">
          <Link href={href} className="text-gray-400 hover:text-white transition duration-200 ease-in-out">
            {text}
          </Link>
        </li>
      ))}
    </div>
  );
};

const resourcesLinks = [
  { text: 'Case Studies', href: '/case-studies' },
  { text: 'White Papers', href: '/white-papers' },
  { text: 'FAQ', href: '/faq' },
];

const servicesLinks = [
  { text: 'Generative AI', href: '/generative-ai' },
  { text: 'Full Stack Solutions', href: '/full-stack' },
  { text: 'SaaS Solutions', href: '/saas' },
];



const ContactUs = () => {
  return (
    <div className="space-y-2 my-4">
      <h3 className="font-bold">Contact Us</h3>
      <p className="text-gray-400"><a href="mailto:info@datenium.com" className="text-gray-400 hover:text-white transition duration-200 ease-in-out">info@datenium.com</a></p>
      <p className="text-gray-400"><a href="tel:" className="text-gray-400 hover:text-white transition duration-200 ease-in-out">+1 (514)-638-2519</a></p>
    </div>
  );
};


const FollowUs = () => {
  return (
    <div className="space-y-2 my-4">
      <h3 className="font-bold text-center">Follow Us</h3>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        <div className="flex justify-center space-x-4">
          <Link href="https://www.facebook.com" passHref>
            <FaFacebook className="text-2xl text-violet-500 cursor-pointer hover:text-blue-500" />
          </Link>
          <Link href="https://www.linkedin.com" passHref>
            <FaLinkedin className="text-2xl text-violet-500 cursor-pointer hover:text-blue-500" />
          </Link>
          <Link href="https://twitter.com" passHref>
            <FaTwitter className="text-2xl  text-violet-500 cursor-pointer hover:text-blue-500" />
          </Link>
          <Link href="https://www.instagram.com" passHref>
            <FaInstagram className="text-2xl  text-violet-500 cursor-pointer hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="space-y-2 my-4">
            <a href="/" className="hover:underline font-bold text-2xl">
              Datenium
            </a>
            <p className="text-gray-400">Your Gateway to Reliable Data Solutions</p>
          </div>    
          <LinkList title="Resources" links={resourcesLinks} />
          <LinkList title="Services" links={servicesLinks} />
          <ContactUs />
          <FollowUs />
        </div>
        <div className="text-center pt-6 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Datenium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
