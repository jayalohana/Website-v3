import { ArrowUp } from "./ui/ArrowUp";
// @ts-ignore
import Jaya_Lohana_Website from '../public/static/Resume/Jaya_Lohana_Website.pdf';

type Experience = {
  date: string;
  role: string;
  company: string;
  description: string;
  tools: string[];
};

const experience: Experience[] = [
  {
    date: 'September 2022 – April 2025',
    role: 'Software Developer',
    company: 'Schizophrenia Society at York',
    description:
      'Maintained and updated the club website to ensure accessibility and responsiveness. Created digital content to support the club’s mission, resulting in increased engagement and reach.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    date: 'April 2024 – August 2024',
    role: 'Quality Assurance Analyst',
    company: 'Transformers Academy',
    description:
      'Led the deployment of automated testing tools using Selenium and Python, streamlining content validation and reducing manual testing time by 40%. Integrated a real-time feedback system with JavaScript, React.js, and Node.js, improving user satisfaction by 25%.',
    tools: ['Selenium', 'Python', 'JavaScript', 'React.js', 'Node.js'],
  },
  {
    date: 'April 2023 – August 2023',
    role: 'Software Developer Intern',
    company: 'GAOtek Inc.',
    description:
      'Built scalable software features using Java and React.js, enhancing performance and reducing bugs by 20%. Developed a real-time feedback system with Node.js and REST APIs to improve usability and responsiveness.',
    tools: ['Java', 'React.js', 'Node.js', 'REST APIs'],
  },
  {
    date: 'May 2023 – December 2023',
    role: 'Front-End Developer',
    company: 'yuHacks 2023',
    description:
      'Developed modular, scalable components using React.js, TypeScript, and Next.js for the hackathon platform. Integrated real-time features with GraphQL and Vue.js, boosting user engagement and delivering live data updates.',
    tools: ['React.js', 'TypeScript', 'Next.js', 'Vue.js', 'GraphQL'],
  },
  {
    date: 'May 2023 – April 2024',
    role: 'STEMing Up Intern',
    company: 'Her Volution',
    description:
      'Mentored 10 volunteers and coordinated 5 large-scale STEM events with 200+ attendees. Created outreach content and leveraged collaborative tools to strengthen community engagement.',
    tools: ['Canva', 'Zoom', 'Google Workspace'],
  },
  {
    date: 'September 2022 – May 2023',
    role: 'Community Engagement Volunteer',
    company: 'York International',
    description:
      'Promoted events through social media and class visits, reaching over 25 students weekly. Provided peer mentorship and facilitated global outreach sessions that supported personal and academic development.',
    tools: ['Instagram', 'Google Meet', 'Microsoft Teams'],
  },
  {
    date: 'July 2022 – Present',
    role: 'Vice President (Advocacy)',
    company: 'Many Green Hands',
    description:
      'Led digital advocacy initiatives including webinars, blogs, and social campaigns to promote sustainability. Produced and managed online content aligned with the organization’s goals.',
    tools: ['WordPress', 'Instagram', 'Canva'],
  },
];

const Exp = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">experience</h2>
      </div>

      {experience.map((exp, index) => (
        <div key={index} className="group relative grid transition-all sm:grid-cols-7 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:opacity-50 border rounded-lg p-4 pb-4 mb-16">
          <div className="mb-2 mt-1 text-xs font-semibold uppercase tracking-tight text-slate-500 sm:col-span-2">
            {exp.date}
          </div>
          <div className="sm:col-span-5">
            <h3 className="font-medium leading-snug text-zinc-200">
              <div className="inline-flex items-baseline font-medium leading-tight flex-wrap gap-1">
                <span>{exp.role}</span>
                <span>·</span>
                <span className="inline-flex gap-0.5">{exp.company}</span>
              </div>
            </h3>
            <p className="mt-2 text-sm leading-normal tracking-wide text-slate-300">
              {exp.description}
            </p>
            <ul className="mt-2 flex flex-wrap">
              {exp.tools.map((tool, toolIndex) => (
                <li key={toolIndex} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-white/40 px-3 py-1 text-xs font-medium leading-5 text-slate-100">
                    {tool}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <a className="inline-flex items-center text-slate-200 leading-tight font-semibold group" href={Jaya_Lohana_Website}>
        <span className="border-b border-transparent pb-px transition group-hover:text-white/70 flex gap-1">
          View Resume
          <span className="group-hover:-translate-y-1 group-hover:transition-transform group-hover:translate-x-1">
            <ArrowUp />
          </span>
        </span>
      </a>
    </section>
  );
};

export default Exp;
