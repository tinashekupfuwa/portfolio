<script>
  import { reveal } from "../lib/reveal.js";

  const skills = [
    {
      title: "UX Design",
      items: ["User Research", "Wireframing", "Prototyping", "Journey Mapping", "Usability Testing", "Empathy Mapping"],
    },
    {
      title: "UI Design",
      items: ["High-Fidelity Design", "Design Systems", "Visual Design", "Interaction Design", "Layout & Composition"],
    },
    {
      title: "Development",
      items: ["HTML & CSS", "JavaScript", "Svelte / SvelteKit", "React", "Responsive Design"],
    },
    {
      title: "Collaboration",
      items: ["Agile Workflows", "Cross-functional Teams", "Stakeholder Alignment", "Design Handoff"],
    },
  ];
</script>

<div class="home">

  <!-- ── Hero ── -->
  <section class="hero" use:reveal={{ duration: 600 }}>
    <div class="hero-badge">
      <span class="status-dot" aria-hidden="true"></span>
      Open to full-time opportunities
    </div>
    <h1 class="hero-title">Product Designer<br/>who codes.</h1>
    <p class="hero-sub">
      Turning complex problems into clear, usable experiences —
      from research and Figma to production-ready code.
    </p>
    <div class="hero-actions">
      <a href="#/works" class="btn btn-primary">View My Work</a>
      <a href="mailto:tinashekupfuwa@gmail.com" class="btn btn-secondary">Get in Touch</a>
    </div>
  </section>

  <!-- ── About ── -->
  <section class="about" use:reveal={{ duration: 500 }}>
    <span class="section-label">About</span>
    <h2 class="section-title">What I Do</h2>
    <div class="about-cols">
      <p>
        Product Designer with a strong foundation in UX/UI, focused on solving real-world problems
        through structured thinking and user-centered solutions. Experienced in translating complex
        systems into intuitive, accessible experiences using Figma and modern design frameworks.
      </p>
      <p>
        I care about making digital products feel clear and engaging from the first interaction.
        That means balancing design thinking, technical execution, and a genuine understanding
        of how people actually use products.
      </p>
    </div>
  </section>

  <!-- ── Featured Work ── -->
  <section class="featured" use:reveal={{ duration: 500 }}>
    <span class="section-label">Featured Work</span>
    <h2 class="section-title">Selected Case Study</h2>

    <a href="#/works/lost-in-the-aisles" class="case-card" aria-label="Read the Lost in the Aisles case study">
      <div class="case-img-wrap">
        <img src="/images/image.png" alt="Lost in the Aisles — Walmart In-Store Navigation" class="case-img" />
      </div>
      <div class="case-body">
        <span class="tag">UX Design · Mobile App</span>
        <h3 class="case-title">Lost in the Aisles</h3>
        <p class="case-subtitle">Improving Walmart's In-Store Navigation</p>
        <p class="case-desc">
          A mobile app concept helping shoppers find products faster in large retail stores.
          Instead of just showing an aisle number, the redesign guides users step-by-step
          to the exact shelf — reducing friction and associate interruptions.
        </p>
        <span class="case-cta">Read Case Study <span aria-hidden="true">→</span></span>
      </div>
    </a>
  </section>

  <!-- ── Skills ── -->
  <section class="skills-section" use:reveal={{ duration: 500 }}>
    <span class="section-label">Expertise</span>
    <h2 class="section-title">Skills & Tools</h2>
    <div class="skills-grid">
      {#each skills as skill, i}
        <div class="skill-card" use:reveal={{ duration: 420, delay: i * 55 }}>
          <h3 class="skill-title">{skill.title}</h3>
          <ul class="skill-items">
            {#each skill.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- ── CTA ── -->
  <section class="cta-wrap" use:reveal={{ duration: 500 }}>
    <div class="cta-box">
      <h2 class="cta-title">Let's Work Together</h2>
      <p class="cta-body">
        Open to full-time product design roles. Reach out to chat about
        opportunities, collaborations, or new projects.
      </p>
      <div class="cta-actions">
        <a href="mailto:tinashekupfuwa@gmail.com" class="btn btn-primary">Email Me</a>
        <a href="#/resume" class="btn btn-secondary">View Resume</a>
        <a href="https://linkedin.com/in/tinashekupfuwa" target="_blank" rel="noreferrer" class="btn btn-secondary">LinkedIn</a>
      </div>
    </div>
  </section>

</div>

<style>
  .home {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Hero */
  .hero {
    padding: 5rem 0 4rem;
    border-bottom: 1px solid var(--border);
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--green);
    background: var(--green-bg);
    border-radius: var(--r-full);
    padding: 0.3rem 0.8rem;
    margin-bottom: 1.75rem;
  }
  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.45; }
  }
  .hero-title {
    font-size: clamp(2.4rem, 6vw, 3.8rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.1;
    color: var(--text);
    margin-bottom: 1.25rem;
  }
  .hero-sub {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 520px;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
  .hero-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  /* About */
  .about {
    padding: 3.5rem 0;
    border-bottom: 1px solid var(--border);
  }
  .about-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .about-cols p {
    font-size: 0.95rem;
    color: var(--muted);
    line-height: 1.75;
  }

  /* Featured */
  .featured {
    padding: 3.5rem 0;
    border-bottom: 1px solid var(--border);
  }
  .case-card {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 2.5rem;
    align-items: center;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    overflow: hidden;
    text-decoration: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }
  .case-card:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
  }
  .case-img-wrap {
    height: 280px;
    overflow: hidden;
    background: var(--surface-2);
  }
  .case-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  .case-card:hover .case-img { transform: scale(1.03); }
  .case-body {
    padding: 2rem 2rem 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .case-title {
    font-size: 1.45rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--text);
    margin-top: 0.4rem;
  }
  .case-subtitle {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--muted);
  }
  .case-desc {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.7;
    margin-top: 0.25rem;
  }
  .case-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--accent);
    margin-top: 0.5rem;
    transition: gap 0.2s ease;
  }
  .case-card:hover .case-cta { gap: 0.7rem; }

  /* Skills */
  .skills-section {
    padding: 3.5rem 0;
    border-bottom: 1px solid var(--border);
  }
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .skill-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 1.5rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .skill-card:hover {
    border-color: var(--border-strong);
    box-shadow: var(--shadow-sm);
  }
  .skill-title {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--text);
    margin-bottom: 0.875rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border);
  }
  .skill-items {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .skill-items li {
    font-size: 0.875rem;
    color: var(--muted);
    padding-left: 0.9rem;
    position: relative;
  }
  .skill-items li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--subtle);
    font-size: 0.75rem;
  }

  /* CTA */
  .cta-wrap {
    padding: 3.5rem 0 4rem;
  }
  .cta-box {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 3rem;
    text-align: center;
  }
  .cta-title {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 0.75rem;
  }
  .cta-body {
    font-size: 0.95rem;
    color: var(--muted);
    max-width: 420px;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }
  .cta-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Responsive */
  @media (max-width: 700px) {
    .hero   { padding: 3.5rem 0 3rem; }
    .about  { padding: 2.5rem 0; }
    .featured, .skills-section, .cta-wrap { padding: 2.5rem 0; }

    .about-cols { grid-template-columns: 1fr; gap: 1rem; }
    .skills-grid { grid-template-columns: 1fr; }

    .case-card { grid-template-columns: 1fr; }
    .case-img-wrap { height: 200px; }
    .case-body { padding: 1.5rem; }

    .cta-box { padding: 2rem 1.5rem; }
  }
</style>
