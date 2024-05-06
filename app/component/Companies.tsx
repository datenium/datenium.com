import React from 'react';
import Image from 'next/image';

const remotePlatform = {
    "jobPlatforms": [
      {
        "name": "Toptal",
        "description": "Toptal is an exclusive network of the top freelance software developers, designers, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their projects.",
        "url": "https://www.toptal.com/",
        "image": "https://www.toptal.com/designers/subtlepatterns/patterns/sayagata.png"
      },
      {
        "name": "X-Team",
        "description": "X-Team is a community for developers where you can get long-term remote jobs with leading brands.",
        "url": "https://x-team.com/",
        "image": "https://www.x-team.com/wp-content/uploads/2020/03/X-Team-Logo-RGB.png"
      },
      {
        "name": "Turing",
        "description": "Find remote software jobs with companies based in the US on Turing. Join a network of the world's best developers & get full-time, long-term remote software jobs with better compensation and career growth.",
        "url": "https://turing.com/",
        "image": "https://turing.com/logo.png"
      },
      {
        "name": "Gun.io",
        "description": "Gun.io helps you find freelance and salaried jobs for tech professionals.",
        "url": "https://gun.io/",
        "image": "https://gun.io/assets/img/gunio-logo.svg"
      },
      {
        "name": "Lemon.io",
        "description": "Lemon.io is the perfect place for English speaking professionals who have three or more years of experience with a particular technology.",
        "url": "https://lemon.io/",
        "image": "https://lemon.io/wp-content/themes/lemon-theme/images/logo-lemon.svg"
      },
      {
        "name": "Freeup",
        "description": "Find remote job openings on Freeup.",
        "url": "https://freeup.net/",
        "image": "https://freeup.net/wp-content/uploads/2018/08/FreeUp-Logo-Black-small.png"
      },
      {
        "name": "Dribbble",
        "description": "Dribbble's project board is an exclusive resource for contract graphic design work. It's perfect for freelancers, agencies, and moonlighters. Dribbble also has a remote job board and a full-time job board.",
        "url": "https://dribbble.com/",
        "image": "https://cdn.dribbble.com/assets/dribbble-ball-2bd3eb76fbff378d3193a5a977d579c1d05ac6c272bdf012b21a8a7d59d81c02.svg"
      },
      {
        "name": "Women Who Code",
        "description": "Women Who Code has a job board which has listings for roles of all experiences and you can find remote jobs there as well!",
        "url": "https://www.womenwhocode.com/jobs",
        "image": "https://womenwhocode.com/images/logo-transparent-bgcolor%3Awhite%3Bsize%3A12x12.png"
      },
      {
        "name": "No Desk",
        "description": "Find remote jobs on NoDesk and connect with companies that offer you freedom to work remotely from home or places around the world.",
        "url": "https://nodesk.co/",
        "image": "https://nodesk.co/images/nd-logo-symbol.svg"
      },
      {
        "name": "Remoters",
        "description": "Find your dream remote based job on Remoters and start working from home.",
        "url": "https://remoters.net/",
        "image": "https://remoters.net/wp-content/uploads/2022/05/remoters_logo_square.svg"
      },
      {
        "name": "Just Remote",
        "description": "Discover remote jobs from around the world on JustRemote. Give up the commute, work remotely and do what you love, daily, from anywhere.",
        "url": "https://justremote.co/",
        "image": "https://justremote.co/images/justremote-logo.svg"
      },
      {
        "name": "LinkedIn",
        "description": "Did you know that you can set the location filter to remote and find remote-based jobs on LinkedIn as well?",
        "url": "https://www.linkedin.com/jobs/",
        "image": "https://brand.linkedin.com/assets/img/linkedin-full-logo-rgb.png"
      },
      {
        "name": "React-Jobs",
        "description": "React-Jobs help you find remote ReactJS jobs and work remotely with React, React Native, GraphQL and more.",
        "url": "https://reactjobsboard.com/",
        "image": "https://reactjobsboard.com/static/images/logo.png"
      },
      {
        "name": "Remote In Tech",
        "description": "RemoteInTech is a list of semi to fully remote-friendly companies in or around tech.",
        "url": "https://remoteintech.company/",
        "image": "https://remoteintech.company/img/logo.png"
      },
      {
        "name": "Remote.co",
        "description": "Discover the best remote developer jobs. Whether you're a front end programmer or a back end engineer, you can find developer job opportunities on Remote.co that allow remote work.",
        "url": "https://remote.co/",
        "image": "https://remote.co/wp-content/uploads/2021/02/Remote.co-Logo-1.png"
      },
      {
        "name": "Remote OK",
        "description": "Remote OK is a remote job board that connects employers with flexible job seekers. Their audience reach is more than 1 million, granting employers access to a large global community of remote professionals.",
        "url": "https://remoteok.io/",
        "image": "https://remoteok.io/assets/remoteok-09f49725e5ba383adcf2e32b4b550bd5f524ee0c3511f23a409f99d1c871d0d9.png"
      },
      {
        "name": "Wellfound (formerly AngelList Talent)",
        "description": "Find startup jobs near you as well as remote jobs around the world on Wellfound.",
        "url": "https://wellfound.talent.com/",
        "image": "https://assets.talent.com/static/logos/logo.svg"
      },
      {
        "name": "We Work Remotely",
        "description": "We Work Remotely is the largest remote work community in the world. With over 3 million visitors, WWR is the number one destination to find and list incredible remote jobs.",
        "url": "https://weworkremotely.com/",
        "image": "https://weworkremotely.com/assets/logo-4f63bcb69b5f17f9df3f3d707ae90a7a5c3f94980f64cbfbb7a8d3eb71edbd30.png"
      },
      {
        "name": "JS Remotely",
        "description": "Find new remote JavaScript, Node.js, Angular, React, Vue or Electron jobs from 200+ posted jobs on JS Remotely.",
        "url": "https://jsremotely.com/",
        "image": "https://jsremotely.com/static/logo-13b823a5ef22e0fb162cc4cb3d6a2842.png"
      },
      {
        "name": "Stack Overflow",
        "description": "Stack Overflow's job board has no fake job listings and will never send you recruiter spam.",
        "url": "https://stackoverflow.com/jobs",
        "image": "https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-logo.png?v=da115cc2f4b2"
      },
      {
        "name": "G2i",
        "description": "G2i is a hiring platform created by developers that connects you to high-quality remote jobs focused on React, React Native, and Node.js.",
        "url": "https://www.g2i.co/",
        "image": "https://pbs.twimg.com/profile_images/1166891156329831936/vqG30jo5_400x400.png"
      },
      {
        "name": "Remotive",
        "description": "Remotive helps you find your dream remote job without the hassle.",
        "url": "https://remotive.io/",
        "image": "https://remotive.io/remote-jobs/remote-companies/images/1/508d0b618938af9a03a0846414a3c6bf.png"
      },
      {
        "name": "Lancerlist",
        "description": "Lancerlist is a directory of freelancers that aims to search and connect businesses and individuals to freelance professionals in their city.",
        "url": "https://lancerlist.com/",
        "image": "https://lancerlist.com/wp-content/uploads/2022/02/lancerlist_logo-1.png"
      }
    ]
  }
  

const Companies = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <h1 className="text-3xl font-semibold mb-4">Featured Companies</h1>
      {remotePlatform.jobPlatforms.map((company, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md">
          <Image src={company.image}
             className="w-full h-20 object-contain mb-4"
            property='true'
            alt={`${company.name} Logo`} />
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <h3 className="text-lg font-semibold">{company.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Companies;
