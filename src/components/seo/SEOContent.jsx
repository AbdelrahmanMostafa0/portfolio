import { siteConfig } from "@/lib/site";
import { DEVELOPMENT, TOOLS } from "@/data/skills";
import projects from "@/data/projects";

export default function SEOContent() {
  return (
    <main className="sr-only" aria-hidden="false">
      <h1>
        {siteConfig.name} — {siteConfig.role} (React &amp; Next.js)
      </h1>
      <p>
        Hi, I&rsquo;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} who
        builds fast, responsive, and interactive web experiences with React,
        Next.js, and Tailwind CSS. I craft smooth interfaces, build responsive
        layouts, focus on performance, accessibility and SEO, and turn designs
        into clean, reusable components.
      </p>

      <section aria-labelledby="seo-skills-heading">
        <h2 id="seo-skills-heading">Skills</h2>

        <h3>Development</h3>
        <ul>
          {DEVELOPMENT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Tools</h3>
        <ul>
          {TOOLS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="seo-work-heading">
        <h2 id="seo-work-heading">Selected Work</h2>
        {projects.map((project) => (
          <article key={project.title}>
            <h3>
              <a href={project.link} rel="noopener" target="_blank">
                {project.title}
              </a>
            </h3>
            <p>{project.description.join(" ")}</p>
            <p>Built with: {project.technologies.join(", ")}.</p>
            {project.github && (
              <p>
                Source code:{" "}
                <a href={project.github} rel="noopener" target="_blank">
                  {project.github}
                </a>
              </p>
            )}
            {project.backendGithub && (
              <p>
                Backend repository:{" "}
                <a href={project.backendGithub} rel="noopener" target="_blank">
                  {project.backendGithub}
                </a>
              </p>
            )}
          </article>
        ))}
      </section>

      <section aria-labelledby="seo-experience-heading">
        <h2 id="seo-experience-heading">Experience &amp; Education</h2>
        <p>
          {siteConfig.role} at{" "}
          <a
            href={siteConfig.employer.url}
            rel="noopener"
            target="_blank"
          >
            {siteConfig.employer.name}
          </a>
          .
        </p>
        <p>
          {siteConfig.education.degree} (graduated {siteConfig.education.graduated}).
        </p>
      </section>

      <section aria-labelledby="seo-languages-heading">
        <h2 id="seo-languages-heading">Languages</h2>
        <ul>
          <li>Arabic — native</li>
          <li>English — professional</li>
        </ul>
      </section>

      <section aria-labelledby="seo-contact-heading">
        <h2 id="seo-contact-heading">Contact</h2>
        <p>
          Email:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
        <ul>
          <li>
            <a href={siteConfig.social.github} rel="noopener" target="_blank">
              GitHub — {siteConfig.social.github}
            </a>
          </li>
          <li>
            <a href={siteConfig.social.linkedin} rel="noopener" target="_blank">
              LinkedIn — {siteConfig.social.linkedin}
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.instagram}
              rel="noopener"
              target="_blank"
            >
              Instagram — {siteConfig.social.instagram}
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
