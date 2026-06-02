import { siteConfig, siteUrl } from "@/lib/site";
import { ALL_SKILLS } from "@/data/skills";
import projects from "@/data/projects";

export default function StructuredData() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}/avatar-img.png`,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.employer.name,
      url: siteConfig.employer.url,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.education.degree,
    },
    knowsAbout: ALL_SKILLS,
    knowsLanguage: ["Arabic", "English"],
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    author: { "@id": personId },
    publisher: { "@id": personId },
  };

  const portfolio = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${siteConfig.name} — Selected Work`,
    url: siteUrl,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      url: p.link,
      author: { "@id": personId },
      description: p.description[0],
      keywords: p.technologies.join(", "),
      ...(p.imageSrc && { image: `${siteUrl}${p.imageSrc}` }),
      ...(p.github && { codeRepository: p.github }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolio) }}
      />
    </>
  );
}
