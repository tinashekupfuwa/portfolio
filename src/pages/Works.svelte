<script>
  import { reveal } from "../lib/reveal.js";
</script>

<div class="works-page">

  <header class="works-header" use:reveal={{ duration: 500 }}>
    <span class="section-label">Portfolio</span>
    <h1 class="works-title">Selected Works</h1>
    <p class="works-sub">
      Case studies focused on user experience, product design, and intuitive interfaces.
    </p>
  </header>

  <ul class="works-list">

    <li use:reveal={{ duration: 500, delay: 80 }}>
    <a
      href="#/works/lost-in-the-aisles"
      class="work-item"
      aria-label="View Lost in the Aisles case study"
    >
      <div class="work-img-wrap">
        <img src="/images/image.png" alt="Lost in the Aisles — Walmart Navigation" class="work-img" />
        <div class="work-img-overlay">
          <span class="work-view-btn">View Case Study →</span>
        </div>
      </div>
      <div class="work-meta">
        <div class="work-meta-top">
          <span class="tag">UX Design</span>
          <span class="tag">Mobile App</span>
        </div>
        <h2 class="work-title">Lost in the Aisles</h2>
        <p class="work-desc">
          Improving Walmart's in-store navigation so shoppers can find products faster —
          with step-by-step directions to the exact shelf location.
        </p>
        <div class="work-details">
          <span class="detail-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Mobile App Concept
          </span>
          <span class="detail-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            UX Research & Design
          </span>
          <span class="detail-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Figma
          </span>
        </div>
      </div>
    </a>
    </li>

  </ul>

  <div class="works-more" use:reveal={{ duration: 400, delay: 160 }}>
    <p>More case studies coming soon.</p>
  </div>

</div>

<style>
  .works-page {
    padding: 3.5rem 0 4rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .works-header { border-bottom: 1px solid var(--border); padding-bottom: 2.5rem; }
  .works-title {
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin-bottom: 0.75rem;
    margin-top: 0.25rem;
  }
  .works-sub {
    font-size: 1rem;
    color: var(--muted);
    max-width: 480px;
    line-height: 1.7;
  }

  /* Work list */
  .works-list { display: flex; flex-direction: column; gap: 1.5rem; list-style: none; padding: 0; margin: 0; }

  .work-item {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 0;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    overflow: hidden;
    text-decoration: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.22s ease;
  }
  .work-item:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
  }

  /* Image */
  .work-img-wrap {
    position: relative;
    height: 320px;
    overflow: hidden;
    background: var(--surface-2);
  }
  .work-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
  }
  .work-item:hover .work-img { transform: scale(1.04); }

  .work-img-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(27, 79, 255, 0);
    transition: background 0.25s ease;
  }
  .work-item:hover .work-img-overlay { background: rgba(27, 79, 255, 0.08); }
  .work-view-btn {
    font-size: 0.875rem;
    font-weight: 600;
    color: #fff;
    background: var(--accent);
    padding: 0.6rem 1.2rem;
    border-radius: var(--r-md);
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
  }
  .work-item:hover .work-view-btn { opacity: 1; transform: translateY(0); }

  /* Meta */
  .work-meta {
    padding: 2.25rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    justify-content: center;
  }
  .work-meta-top { display: flex; gap: 0.4rem; flex-wrap: wrap; }
  .work-title {
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-top: 0.3rem;
  }
  .work-desc {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.72;
  }
  .work-details {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    margin-top: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.8rem;
    color: var(--subtle);
    font-weight: 500;
  }
  .detail-item svg { flex-shrink: 0; }

  /* More */
  .works-more {
    text-align: center;
    padding: 1.5rem 0 0;
    border-top: 1px solid var(--border);
  }
  .works-more p {
    font-size: 0.875rem;
    color: var(--subtle);
    font-style: italic;
  }

  @media (max-width: 720px) {
    .work-item { grid-template-columns: 1fr; }
    .work-img-wrap { height: 220px; }
    .work-meta { padding: 1.75rem 1.5rem; }
    .works-page { padding: 2.5rem 0 3rem; }
  }
</style>
