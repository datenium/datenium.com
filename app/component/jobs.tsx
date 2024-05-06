// import Link from 'next/link';

// const RemoteJobsPlatformPage = () => {
//     const jobsData = {
//         "jobPlatforms": [
//             {
//                 "name": "Toptal",
//                 "description": "Toptal is an exclusive network of the top freelance software developers, designers, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their projects.",
//                 "url": "https://www.toptal.com/"
//             },
//             {
//                 "name": "X-Team",
//                 "description": "X-Team is a community for developers where you can get long-term remote jobs with leading brands.",
//                 "url": "https://x-team.com/"
//             },
//             {
//                 "name": "Turing",
//                 "description": "Find remote software jobs with companies based in the US on Turing. Join a network of the world's best developers & get full-time, long-term remote software jobs with better compensation and career growth.",
//                 "url": "https://turing.com/"
//             },
//             {
//                 "name": "Gun.io",
//                 "description": "Gun.io helps you find freelance and salaried jobs for tech professionals.",
//                 "url": "https://gun.io/"
//             },
//             {
//                 "name": "Lemon.io",
//                 "description": "Lemon.io is the perfect place for English speaking professionals who have three or more years of experience with a particular technology.",
//                 "url": "https://lemon.io/"
//             },
//             {
//                 "name": "Freeup",
//                 "description": "Find remote job openings on Freeup.",
//                 "url": "https://freeup.net/"
//             },
//             {
//                 "name": "Dribbble",
//                 "description": "Dribbble's project board is an exclusive resource for contract graphic design work. It's perfect for freelancers, agencies, and moonlighters. Dribbble also has a remote job board and a full-time job board.",
//                 "url": "https://dribbble.com/"
//             },
//             {
//                 "name": "Women Who Code",
//                 "description": "Women Who Code has a job board which has listings for roles of all experiences and you can find remote jobs there as well!",
//                 "url": "https://www.womenwhocode.com/jobs"
//             },
//             {
//                 "name": "No Desk",
//                 "description": "Find remote jobs on NoDesk and connect with companies that offer you freedom to work remotely from home or places around the world.",
//                 "url": "https://nodesk.co/"
//             },
//             {
//                 "name": "Remoters",
//                 "description": "Find your dream remote based job on Remoters and start working from home.",
//                 "url": "https://remoters.net/"
//             },
//             {
//                 "name": "Just Remote",
//                 "description": "Discover remote jobs from around the world on JustRemote. Give up the commute, work remotely and do what you love, daily, from anywhere.",
//                 "url": "https://justremote.co/"
//             },
//             {
//                 "name": "LinkedIn",
//                 "description": "Did you know that you can set the location filter to remote and find remote-based jobs on LinkedIn as well?",
//                 "url": "https://www.linkedin.com/jobs/"
//             },
//             {
//                 "name": "React-Jobs",
//                 "description": "React-Jobs help you find remote ReactJS jobs and work remotely with React, React Native, GraphQL and more.",
//                 "url": "https://reactjobsboard.com/"
//             },
//             {
//                 "name": "Remote In Tech",
//                 "description": "RemoteInTech is a list of semi to fully remote-friendly companies in or around tech.",
//                 "url": "https://remoteintech.company/"
//             },
//             {
//                 "name": "Remote.co",
//                 "description": "Discover the best remote developer jobs. Whether you're a front end programmer or a back end engineer, you can find developer job opportunities on Remote.co that allow remote work.",
//                 "url": "https://remote.co/"
//             },
//             {
//                 "name": "Remote OK",
//                 "description": "Remote OK is a remote job board that connects employers with flexible job seekers. Their audience reach is more than 1 million, granting employers access to a large global community of remote professionals.",
//                 "url": "https://remoteok.io/"
//             },
//             {
//                 "name": "Wellfound (formerly AngelList Talent)",
//                 "description": "Find startup jobs near you as well as remote jobs around the world on Wellfound.",
//                 "url": "https://wellfound.talent.com/"
//             },
//             {
//                 "name": "We Work Remotely",
//                 "description": "We Work Remotely is the largest remote work community in the world. With over 3 million visitors, WWR is the number one destination to find and list incredible remote jobs.",
//                 "url": "https://weworkremotely.com/"
//             },
//             {
//                 "name": "JS Remotely",
//                 "description": "Find new remote JavaScript, Node.js, Angular, React, Vue or Electron jobs from 200+ posted jobs on JS Remotely.",
//                 "url": "https://jsremotely.com/"
//             },
//             {
//                 "name": "Stack Overflow",
//                 "description": "Stack Overflow's job board has no fake job listings and will never send you recruiter spam.",
//                 "url": "https://stackoverflow.com/jobs"
//             },
//             {
//                 "name": "G2i",
//                 "description": "G2i is a hiring platform created by developers that connects you to high-quality remote jobs focused on React, React Native, and Node.js.",
//                 "url": "https://www.g2i.co/"
//             },
//             {
//                 "name": "Remotive",
//                 "description": "Remotive helps you find your dream remote job without the hassle.",
//                 "url": "https://remotive.io/"
//             },
//             {
//                 "name": "Lancerlist",
//                 "description": "Lancerlist is a directory of freelancers that aims to search and connect businesses and individuals to freelance professionals in their city.",
//                 "url": "https://lancerlist.com/"
//             }
//         ]
//     };
//     return (

//             <Stack spacing={3} padding={3}>
//                 <h1>Search Remote jobs on below platforms</h1>
//                 {jobsData.jobPlatforms.map((platform, index) => (
//                     <Card key={index}>
//                         <CardContent>
//                             <Link href={platform.url} passHref>
//                                 <Typography variant="h4" component="a" target="_blank" rel="noopener noreferrer" color="textPrimary">
//                                     {platform.name}
//                                 </Typography>
//                             </Link>
//                             <Typography variant="body1" color="text.secondary">
//                                 {platform.description}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </Stack>
//     );
// };


// export default RemoteJobsPlatformPage;
