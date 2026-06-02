export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

export const siteConfig = {
  name: "Abdelrahman Mostafa",
  shortName: "Abdelrahman",
  role: "Frontend Developer",
  title: "Abdelrahman Mostafa — Frontend Developer · React & Next.js",
  description:
    "Frontend developer crafting fast, accessible React and Next.js apps. Selected work, resume, and contact — plus the side projects I can't stop shipping.",
  ogDescription:
    "Dev by day, side-project goblin by night. Frontend dev shipping with React, Next.js & Tailwind.",
  keywords: [
    "Abdelrahman Mostafa",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Web Developer Egypt",
    "Portfolio",
    "Frontend Engineer",
    "UI Developer",
  ],
  email: "abdelrahmanmostafa.developer@gmail.com",
  locale: "en_US",
  language: "en",
  themeColor: "#0f172a",
  social: {
    github: "https://github.com/AbdelrahmanMostafa0",
    linkedin: "https://www.linkedin.com/in/abdelrahmanmostafa0/",
    instagram: "https://www.instagram.com/abdelrahman_mostafaa0/",
  },
  employer: {
    name: "Lesoll",
    url: "https://lesoll.com",
  },
  education: {
    degree: "BSc in Computer Science & Artificial Intelligence",
    graduated: "2023",
  },
};
