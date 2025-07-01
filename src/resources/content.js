import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Erwan",
  lastName: "Gautier",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/persons/me.jpeg",
  email: "goatier.email@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/erwan-g-8a4059197/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tryopz",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm Erwan</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: <>Software Engineer / 3D engineer.</>,
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://kmeet.infomaniak.com/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a software engineer who loves solving problems with technology. I
        have experience in cybersecurity, cloud systems, and full stack
        development. I enjoy building secure systems and user-friendly
        applications. I studied at ESIEE Paris and have a strong background in
        engineering and computing. I like taking on challenges, automating
        workflows, and creating solutions that make a real difference through
        code and teamwork.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Triple-A",
        timeframe: "March 2025 - August 2025",
        role: "Cyber Security & Cloud Infrastructure Intern",
        achievements: [
          <>
            Led the migration of enterprise infrastructure from OVH to AWS,
            enhancing system scalability and reliability
          </>,
          <>
            Remediated application vulnerabilities in compliance with
            penetration test reports, improving the security
          </>,
          <>
            Designed and deployed CI/CD pipelines using GitHub Actions to
            automate testing and deployment workflows
          </>,
          <>
            Managed containerized applications using Kubernetes for efficient
            orchestration and production-grade deployment
          </>,
        ],
        images: [],
      },
      {
        company: "OGF",
        timeframe: "September 2022 - March 2025",
        role: "Full Stack .NET/Angular Developer Apprentice",
        achievements: [
          <>
            Developed and maintained scalable RESTful APIs using C#/.NET in a
            microservices architecture
          </>,
          <>
            Designed and deployed modular, reusable UI components within a
            company-wide Angular library
          </>,
          <>
            Contributed to the architecture of a service-oriented system with a
            focus on performance, modularity, and long-term maintainability
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "ESIEE Paris / Gustave Eiffel University",
        timeframe: "2022 - 2025",
        description: (
          <>
            MSc in Computer Science – Dual academic & professional training
            (apprenticeship)
          </>
        ),
      },
      {
        name: "Lycée Yves Thépot",
        timeframe: "2021 - 2022",
        description: (
          <>
            Intensive one-year engineering preparatory program (Classe
            préparatoire ATS)
          </>
        ),
      },
      {
        name: "University Institute of Technology",
        timeframe: "2019 - 2021",
        description: (
          <>
            Two-year University Diploma in Electrical Engineering and Industrial
            Computing (DUT GEII)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Python, C, C++, C# JavaScript, Go</>,
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>
            Keras, scikit-learn, NumPy, pandas, OpenCV, OpenGL, OpenImageIO,
            Angular, Vue.js, Node.js, Bun, GStreamer
          </>
        ),
        images: [],
      },
      {
        title: "Tools & Environments",
        description: <>Git, Docker, Kubernetes, Terraform, Linux, Unity</>,
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>
            MySQL, PostgreSQL, SQLite (relational); Neo4j (graph); FAISS (vector
            similarity)
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
