import { ExperienceItem, EducationItem, SkillCategory, CertificationItem, Profile } from './types';

export const PROFILE: Profile = {
  name: "Amit Dixit",
  title: "Senior Technical Lead | Backend Architect",
  summary: "Senior Team lead with 9.5 years of Backend development experience specializing in Java, Spring Boot, Microservices, RESTful APIs, AWS, and Kubernetes. Proven track record of leading teams to deliver scalable, high-performance backend systems and migrating legacy applications to cloud-native architectures.",
  email: "amit.amit1804@gmail.com",
  phone: "+91 8745808601",
  location: "Greater Noida, Uttar Pradesh, India",
  linkedin: "linkedin.com/in/amit-dixit",
  linkedinUrl: "https://www.linkedin.com/in/amit-dixit-89775482"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Coforge",
    role: "Senior Technical Lead",
    location: "Greater Noida",
    period: "06/2022 – Present",
    highlights: [
      "Part of the D&S Team under Asset and Wealth Management utilizing Java, Spring Boot, Spring Webflux, AWS and Kubernetes (EKS).",
      "Participated in High-Level Design (HLD) and Low-Level Design (LLD) discussions to develop a transaction processor from scratch using an event-bus architecture.",
      "Contributed to migrating on-prem to AWS cloud Spring Boot-based microservices by using Kubernetes (EKS) service.",
      "Designed and implemented RESTful APIs to replace stored procedures during the migration process, enhancing API consistency and maintainability.",
      "Led a team of developers in backend development and the successful deployment on AWS cloud (EKS Kubernetes), streamlining application scalability.",
      "Implemented Kafka for real-time data streaming, including logging and event processing. Collaborated on OASIS-XACML, LDAP, and OIDC for authentication.",
      "Working on WebClient migration from REST Template and removing blocking code within microservices."
    ]
  },
  {
    company: "IHS MARKIT",
    role: "Senior Software Engineer",
    location: "Gurgaon",
    period: "01/2021 – 12/2021",
    highlights: [
      "Part of the development team for the in-house Spring based platform using Java, Maven, Spring Boot & NoSQL, MySQL.",
      "Migrated an application from Spring MVC to microservices for better scalability and efficiency.",
      "Collaborated with cross-functional teams to optimize system architecture.",
      "Conducted code reviews and provided technical guidance to junior developers.",
      "Improved overall unit test coverage of the project by a significant amount."
    ]
  },
  {
    company: "Publicis Sapient",
    role: "Senior Associate Level - I",
    location: "Gurgaon",
    period: "06/2019 – 09/2020",
    highlights: [
      "Part of the development team for Verizon Project using Java, Maven, Spring Boot, Python, Play, Akka, React, and Oracle.",
      "Collaborated with team members to update legacy code bases to modern microservices architecture.",
      "Designed and developed robust solutions to meet client requirements for functionality, scalability, and performance.",
      "Integrated third-party APIs and created microservices to use data coming from third-party API within the application."
    ]
  },
  {
    company: "Atos Syntel",
    role: "Software Engineer",
    location: "Chennai, Tamil Nadu",
    period: "11/2015 – 03/2018",
    highlights: [
      "Used Java, Akka, Scala, Spring Boot, Mesos, and other relevant technologies for Asset and Wealth Management.",
      "Collaborated with team members to update legacy code bases to modern microservices architecture.",
      "Improved application performance and scalability by optimizing database interactions using efficient indexing, reducing DB calls by 30%."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core & Languages",
    skills: ["Java", "Python", "C", "Scala", "Data Structures", "Algorithms"]
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring Webflux", "Play Framework", "Akka", "React"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes (EKS)", "Docker", "CI/CD Pipelines", "Maven", "Mesos"]
  },
  {
    title: "AI & Productivity",
    skills: ["GitHub Copilot", "ChatGPT", "Claude"]
  },
  {
    title: "Data & Storage",
    skills: ["PostgreSQL", "MySQL", "Oracle", "InfluxDB", "ElasticSearch", "NoSQL"]
  },
  {
    title: "Architecture & Messaging",
    skills: ["Microservices", "RESTful APIs", "Kafka", "Event-Bus", "Reactive Programming"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Institute of Management Studies",
    location: "Ghaziabad",
    year: "01/2015",
    score: "73%"
  },
  {
    degree: "BSc Computer Science",
    institution: "St. John's College",
    location: "Agra",
    year: "01/2011",
    score: "68%"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "AWS Certified Solutions Architect - Associate" },
  { name: "Oracle Certified Associate, Java SE 8 Programmer" }
];