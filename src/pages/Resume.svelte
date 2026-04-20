<script>
  import { reveal } from "../lib/reveal.js";

  const contacts = [
    { label: 'Email',    value: 'tinashekupfuwa@gmail.com', href: 'mailto:tinashekupfuwa@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/tinashekupfuwa', href: 'https://linkedin.com/in/tinashekupfuwa' },
    { label: 'Location', value: 'Kerrville, TX' },
  ];

  const skillGroups = [
    { title: 'UX & Product',   items: ['User Research', 'Wireframing', 'Prototyping', 'Interaction Design', 'Usability Testing', 'Journey Mapping'] },
    { title: 'UI & Visual',    items: ['Visual Design', 'Layout & Composition', 'High-Fidelity Design', 'Design Systems'] },
    { title: 'Tools & Tech',   items: ['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'Svelte'] },
    { title: 'Core Strengths', items: ['Problem Solving', 'Communication', 'Collaboration', 'Critical Thinking'] },
  ];

  const experiences = [
    {
      company: 'Freelance',
      role: 'UX Research & Usability Testing',
      period: '2022 – 2023',
      location: 'Bulawayo, Zimbabwe',
      bullets: [
        'Analyzed user journeys and identified friction points to improve usability and task completion.',
        'Conducted heuristic evaluations and delivered actionable recommendations for product improvement.',
        'Translated business goals and user needs into clear, structured design solutions.',
        'Advised on design systems, interaction patterns, and consistency across platforms.',
        'Simplified complex workflows into intuitive and scalable user experiences.',
      ],
    },
    {
      company: 'Universal Communications Network Africa',
      role: 'UX Designer & Front-end Developer',
      period: '2022 – 2023',
      location: 'Bulawayo, Zimbabwe',
      bullets: [
        'Informed design decisions through user research and usability insights.',
        'Translated concepts into wireframes, prototypes, and high-fidelity designs.',
        'Designed intuitive, visually engaging interfaces across digital platforms.',
        'Bridged design and development by converting UI designs into functional code.',
        'Conducted usability testing and iterated designs based on user feedback.',
      ],
    },
    {
      company: 'GEMS Medical Aid',
      role: 'UX Designer & Front-end Developer',
      period: '2023',
      location: 'Gauteng, South Africa',
      bullets: [
        'Conducted user research to identify pain points and improve overall user experience.',
        'Designed user-centered, accessible interfaces for digital healthcare products.',
        'Collaborated closely with product managers and developers to deliver effective solutions.',
        'Performed usability testing and refined designs based on data and feedback.',
      ],
    },
    {
      company: 'Charisma Design Agency',
      role: 'Intern Graphic Designer & Web Developer',
      period: '2014 – 2015',
      location: 'Bulawayo, Zimbabwe',
      bullets: [
        'Designed graphics, logos, brochures, and digital content for multiple clients.',
        'Developed and maintained brand guidelines to ensure visual consistency.',
        'Created digital assets including social media graphics and email templates.',
        'Collaborated with teams to deliver high-quality, client-focused design solutions.',
      ],
    },
  ];
</script>

<div class="resume-page">

  <!-- Page header -->
  <header class="resume-header" use:reveal={{ duration: 500 }}>
    <div>
      <span class="section-label">Resume</span>
      <h1 class="resume-name">Tinashe Kupfuwa</h1>
      <p class="resume-role">Product Designer</p>
    </div>
    <div class="resume-contacts">
      {#each contacts as c}
        {#if c.href}
          <a href={c.href} class="contact-pill" target={c.label === 'LinkedIn' ? '_blank' : undefined} rel={c.label === 'LinkedIn' ? 'noreferrer' : undefined}>
            <span class="contact-label">{c.label}</span>
            <span class="contact-val">{c.value}</span>
          </a>
        {:else}
          <div class="contact-pill">
            <span class="contact-label">{c.label}</span>
            <span class="contact-val">{c.value}</span>
          </div>
        {/if}
      {/each}
    </div>
  </header>

  <div class="resume-body">

    <!-- Sidebar -->
    <aside class="resume-sidebar" use:reveal={{ duration: 500, delay: 60 }}>

      <section class="sidebar-block">
        <h2 class="sidebar-heading">Education</h2>
        <div class="edu-card">
          <p class="edu-degree">Bachelor of Software Engineering (Hons)</p>
          <p class="edu-school">Zimbabwe Open University</p>
          <p class="edu-meta">Bulawayo, Zimbabwe · 2018 – 2020</p>
        </div>
      </section>

      <section class="sidebar-block">
        <h2 class="sidebar-heading">Skills</h2>
        {#each skillGroups as group}
          <div class="skill-block">
            <h3 class="skill-group-title">{group.title}</h3>
            <div class="skill-tags">
              {#each group.items as item}
                <span class="skill-tag">{item}</span>
              {/each}
            </div>
          </div>
        {/each}
      </section>

    </aside>

    <!-- Main content -->
    <div class="resume-main">

      <section class="main-block" use:reveal={{ duration: 500, delay: 80 }}>
        <h2 class="main-heading">Profile</h2>
        <p class="profile-text">
          Product Designer with a strong foundation in UX/UI design, focused on solving
          real-world problems through structured thinking and user-centered solutions.
          Experienced in translating complex systems into intuitive, accessible experiences
          using Figma and modern design frameworks.
        </p>
      </section>

      <section class="main-block" use:reveal={{ duration: 500, delay: 100 }}>
        <h2 class="main-heading">Experience</h2>
        <div class="exp-list">
          {#each experiences as exp, i}
            <article class="exp-card" use:reveal={{ duration: 420, delay: i * 60 }}>
              <div class="exp-header">
                <div>
                  <h3 class="exp-company">{exp.company}</h3>
                  <p class="exp-role">{exp.role}</p>
                </div>
                <div class="exp-right">
                  <span class="exp-period">{exp.period}</span>
                  <span class="exp-location">{exp.location}</span>
                </div>
              </div>
              <ul class="exp-bullets">
                {#each exp.bullets as bullet}
                  <li>{bullet}</li>
                {/each}
              </ul>
            </article>
          {/each}
        </div>
      </section>

    </div>
  </div>

</div>

<style>
  .resume-page {
    padding: 3.5rem 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* Header */
  .resume-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid var(--border);
  }
  .resume-name {
    font-size: clamp(2rem, 5vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .resume-role {
    font-size: 1rem;
    color: var(--muted);
    font-weight: 500;
  }
  .resume-contacts {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
  }
  .contact-pill {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    transition: opacity 0.15s ease;
  }
  .contact-pill:hover { opacity: 0.75; }
  .contact-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--subtle);
    min-width: 52px;
    text-align: right;
  }
  .contact-val {
    font-size: 0.85rem;
    color: var(--text);
    font-weight: 500;
  }

  /* Body layout */
  .resume-body {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 3rem;
    align-items: start;
  }

  /* Sidebar */
  .resume-sidebar { display: flex; flex-direction: column; gap: 2rem; }
  .sidebar-block { display: flex; flex-direction: column; gap: 1rem; }
  .sidebar-heading {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--subtle);
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--border);
  }

  /* Education */
  .edu-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 1rem 1.1rem;
  }
  .edu-degree {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
    line-height: 1.4;
    margin-bottom: 0.25rem;
  }
  .edu-school {
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 0.15rem;
  }
  .edu-meta { font-size: 0.75rem; color: var(--subtle); }

  /* Skills */
  .skill-block { display: flex; flex-direction: column; gap: 0.5rem; }
  .skill-block + .skill-block { margin-top: 0.25rem; }
  .skill-group-title {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .skill-tag {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--muted);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-xs);
    padding: 0.2rem 0.5rem;
  }

  /* Main */
  .resume-main { display: flex; flex-direction: column; gap: 2.25rem; }
  .main-block  { display: flex; flex-direction: column; gap: 1.25rem; }
  .main-heading {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--subtle);
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--border);
  }

  /* Profile */
  .profile-text {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.75;
  }

  /* Experience */
  .exp-list { display: flex; flex-direction: column; gap: 0; }
  .exp-card {
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border);
  }
  .exp-card:first-child { padding-top: 0; }
  .exp-card:last-child  { border-bottom: none; padding-bottom: 0; }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 0.875rem;
    flex-wrap: wrap;
  }
  .exp-company {
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--text);
    margin-bottom: 0.15rem;
  }
  .exp-role {
    font-size: 0.85rem;
    color: var(--accent-text);
    font-weight: 500;
  }
  .exp-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.1rem;
    flex-shrink: 0;
  }
  .exp-period {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text);
  }
  .exp-location {
    font-size: 0.75rem;
    color: var(--subtle);
  }
  .exp-bullets {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding-left: 1rem;
    list-style: disc;
  }
  .exp-bullets li {
    font-size: 0.875rem;
    color: var(--muted);
    line-height: 1.65;
    padding-left: 0.25rem;
  }

  /* Responsive */
  @media (max-width: 700px) {
    .resume-page { padding: 2.5rem 0 3rem; }
    .resume-header { flex-direction: column; }
    .resume-contacts { align-items: flex-start; }
    .contact-label { text-align: left; }
    .resume-body { grid-template-columns: 1fr; gap: 2rem; }
    .exp-header { flex-direction: column; gap: 0.25rem; }
    .exp-right { align-items: flex-start; }
  }
</style>
