import { ConsultlyLogo, MonitoLogo, ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pedro Brito",
  initials: "PB",
  location: "Porto, Portugal, UTC",
  locationLink: "https://www.google.com/maps/place/Porto",
  about:
    "Full Stack Enginner who loves to learn new things, build some stuff with it.",
  summary: (
    <>
      Full stack engineer currently focusing on front-end technologies like
      React, and React Native. Backend engineer in another life with some Nginx,
      PHP, MySQL and Linux Experience. Dabbled with Docker, Node.js and GraphQL
      to look like the cool kids.
    </>
  ),
  avatarUrl: "/cv_pic.webp",
  personalWebsiteUrl: "https://cv.notagreat.dev",
  contact: {
    email: "pedrobrito14@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PR91",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pbritopt/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Superior de Engenharia do Porto",
      degree: "Masters Degree in Electrical Engineering and Automation Systems",
      start: "2014",
      end: "¯\\_(ツ)_/¯",
    },
    {
      school: "Instituto Superior de Engenharia do Porto",
      degree:
        "Bachelor's Degree in Electrical Engineering and Computer Science",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "O-Pitblast",
      link: "https://o-pitblast.com",
      badges: [
        "JAVA",
        "C#",
        "C++",
        "PHP",
        "Javascript",
        "React",
        "NodeJS",
        "Flutter",
      ],
      title: "Full Stack Developer",
      logo: null,
      start: "2017",
      end: "Present",
      description: (
        <>
          Full Stack Developer at O-Pitblast, a company that develops software
          solutions to be used in the mining sector. Not the crypto type, real
          mining. Across the years, O-Pitblast gave the opportunity to work on a
          lot of different projects with vastly different tech stacks, most
          notably:
          <div className="h-2" />
          <ul className="list-inside list-disc">
            <li>
              O-PitDev, a borehole measurement device that revolutionized the
              mining industry bringing a ease of use, price point and business
              model never before seen and often imitated.
            </li>
            <li>
              O-PitApp, a mobile app that retired pen and paper for the field
              opperators by allowing them to digitally register field
              measurements of various parameters required to propperly follow
              and improve the blast design.
            </li>
            <li>
              O-PitAnalytics, a web dashboard that allows for an easy overview
              of the drill and blast opperation by providing various real time
              data and visualizations.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Politécnico do Porto",
      link: "https://www.ipp.pt/",
      badges: ["SCCM", "IT Onboarding", "Updating Java"],

      title: "IT Intern",
      logo: ParabolLogo,
      start: "2016",
      end: "2017",
      description: (
        <>
          IT Intern if the presidential services of Instituto Politécnico do
          Porto. As an intern I did what no one else wanted to do, it included
          serving coffee, formating and configuring computers for the new hires,
          and most importantly, updating JAVA so Public Servants could use work
          time to do their taxes.
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "React Native",
    "Flutter",
    "C#",
    "JAVA",
    "Node.js",
    "GraphQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Database Modeling",
    "System Architecture",
  ],
  projects: [
    {
      title: "O-PitSurface",
      techStack: ["C#"],
      description:
        "O-Pitblast's Hero Product, a Blast Design Software around which everything else was built. I handled most of the integrations with external products through DLL development.",
      logo: null,
      link: {
        label: "O-PitSurface",
        href: "https://www.o-pitblast.com/products/o-pitsurface-drill-blast-design-software",
      },
    },
    {
      title: "O-PitDev",
      techStack: ["C++", "JAVA", "PHP", "MYSQL"],
      description:
        "Borehole measurement device, companion android application and backend for licence management.",
      logo: null,
      link: {
        label: "O-PitDev",
        href: "https://www.o-pitblast.com/products/o-pitdev-borehole-deviation-measurement",
      },
    },
    {
      title: "O-PitApp",
      techStack: ["JAVA"],
      description:
        "An Android application developed for field opperators to register measurements of various parameters required to propperly follow and improve the blast design.",
      logo: null,
      link: {
        label: "O-PitApp",
        href: "https://www.o-pitblast.com/products/o-pitapp",
      },
    },
    {
      title: "O-PitAnalytics",
      techStack: ["PHP", "MYSQL", "HTML", "CSS", "Javascript"],
      description:
        "A web dashboard that displays usefull information regarding for the drill and blast opperation in real time.",
      logo: null,
      link: {
        label: "O-PitAnalytics",
        href: "https://www.o-pitblast.com/products/analytics",
      },
    },
    {
      title: "O-PitCloud",
      techStack: ["Nginx", "PHP", "MYSQL", "Linux", "SysOps"],
      description:
        "The glue that holds all the other products together. I mainly mantain the server environment, occasionaly write some PHP.",
      logo: null,
      link: {
        label: "O-PitCloud",
        href: "",
      },
    },
    {
      title: "Vipnordic App",
      techStack: ["Flutter", "Dart"],
      description:
        "A Flutter multiplatform mobile application that brings the Vipnordic service to mobile devices. Available on Google Play and App Store.",
      logo: null,
      link: {
        label: "Vipnordic App",
        href: "https://play.google.com/store/apps/details?id=fi.forcit.consulting.vipnordic.vipnordic_mobile_app",
      },
    },
    // {
    //   title: "4Globe",
    //   techStack: ["React"],
    //   description:
    //     "The next generation of ",
    //   logo: null,
    //   link: {
    //     label: "Vipnordic App",
    //     href: null,
    //   },
    // },
  ],
} as const;
