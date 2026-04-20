<script>
  import { reveal } from "../lib/reveal.js";

  const meta = [
    { label: 'Role',         value: 'UX Designer' },
    { label: 'Project Type', value: 'Mobile App Concept' },
    { label: 'Focus',        value: 'In-store Navigation' },
    { label: 'Tools',        value: 'Figma' },
  ];
</script>

<div class="case-page">

  <!-- Back -->
  <a href="#/works" class="back-link" use:reveal={{ duration: 300 }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
    Back to Works
  </a>

  <!-- Hero -->
  <header class="case-hero-section" use:reveal={{ duration: 500 }}>
    <span class="section-label">Case Study</span>
    <h1 class="case-title">Lost in the Aisles</h1>
    <p class="case-subtitle">Improving Walmart's In-Store Navigation to help shoppers find products faster.</p>

    <div class="case-meta-row">
      {#each meta as m}
        <div class="case-meta-item">
          <span class="meta-label">{m.label}</span>
          <span class="meta-value">{m.value}</span>
        </div>
      {/each}
    </div>
  </header>

  <!-- Cover image -->
  <figure class="case-cover" use:reveal={{ duration: 500 }}>
    <img src="/images/image.png" alt="Lost in the Aisles — cover" />
  </figure>

  <!-- Disclaimer -->
  <div class="disclaimer" role="note" use:reveal={{ duration: 400 }}>
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    <p><strong>Disclaimer:</strong> This is an independent personal case study and concept project. It is not affiliated with, endorsed by, or approved by Walmart.</p>
  </div>

  <!-- Body content -->
  <div class="case-content">

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>Overview</h2>
      <p>While working as a maintenance associate at Walmart, I spent much of my time on the sales floor interacting with customers. One question came up more than any other: <em>"Where can I find this product?"</em></p>
      <p>Even when customers had the Walmart app open with the product's aisle number on screen, many still couldn't find what they were looking for. They'd walk in the wrong direction, pass the right aisle, or end up staring at the wrong shelf. I saw this happen multiple times per shift.</p>
      <p>This project explores how the Walmart app could better support in-store navigation. Instead of just telling customers <em>where</em> a product is, the redesign shows them <em>how to get there</em> — with guided navigation and shelf-level confirmation.</p>
    </section>

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>The Problem</h2>
      <p>The Walmart app tells you where a product is. It doesn't help you get there.</p>
      <p>Shoppers get an aisle number like "Aisle A12," but in a Supercenter with over 100 aisles, that information alone isn't enough. Customers still have to figure out the store layout, orient themselves, find the right section, and then scan the shelves. That gap between <em>knowing the aisle</em> and <em>reaching the product</em> is where the frustration lives.</p>
    </section>

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>What I Saw on the Floor</h2>
      <p>These aren't assumptions — I watched this happen daily. A typical interaction: a customer standing mid-store, phone in hand, staring up at aisle signs. They'd walk one direction, realize they were wrong, turn around, and eventually flag an associate down.</p>
      <ul class="case-list">
        <li>Customers staring at an aisle number on their phone, then looking up at overhead signs trying to figure out which direction to walk.</li>
        <li>Customers walking the right aisle but scanning the wrong shelf section.</li>
        <li>Customers asking associates for help — pulling staff off other tasks.</li>
        <li>Customers giving up and buying a substitute or leaving entirely.</li>
      </ul>
      <p>The issue wasn't that products were hard to find. It was that the app gave people <em>a destination without directions</em>.</p>
    </section>

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>Persona & Empathy Map</h2>
      <p><strong>Maria Santos</strong> is based on the most common customer profile I encountered — working parents shopping after hours who need to get in and out fast.</p>
      <figure class="case-figure">
        <img src="/images/image 1.png" alt="Empathy Map" />
      </figure>
    </section>

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>Journey Map & Current Flow</h2>
      <p>The current app flow stops at giving the customer an aisle number. From that point on, the customer is on their own.</p>
      <figure class="case-figure">
        <img src="/images/image 2.png" alt="Journey Map" />
      </figure>
      <figure class="case-figure">
        <img src="/images/image 3.png" alt="Current Experience Flow" />
      </figure>
      <figure class="case-figure">
        <img src="/images/image 4.png" alt="User Flow — Pain Points" />
      </figure>
    </section>

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>Solution & Direction</h2>
      <p>Instead of just showing the aisle number and leaving people to figure out the rest, the redesign gives step-by-step directions to that aisle — then confirms the user is at the right shelf.</p>
      <figure class="case-figure">
        <img src="/images/image 5.png" alt="Future Journey Map" />
      </figure>
      <figure class="case-figure">
        <img src="/images/image 6.png" alt="New System Swimlane" />
      </figure>
    </section>

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>Prototype</h2>
      <h3>Product Search & Start Navigation</h3>
      <div class="prototype-grid">
        <figure class="case-figure">
          <img src="/images/image 7.png" alt="Product Search Screen" />
        </figure>
        <figure class="case-figure">
          <img src="/images/image 8.png" alt="Start Navigation Screen" />
        </figure>
      </div>
      <h3>Navigation & Shelf Confirmation</h3>
      <div class="prototype-grid">
        <figure class="case-figure">
          <img src="/images/image 9.png" alt="Direction Screen" />
        </figure>
        <figure class="case-figure">
          <img src="/images/image 10.png" alt="Shelf Confirmation Screen" />
        </figure>
      </div>
    </section>

    <section class="prose-section" use:reveal={{ duration: 450 }}>
      <h2>Reflection & Next Steps</h2>
      <p>If I were to push this further, I'd test arrows vs. text directions to see what works best while pushing a cart. I'd also research the feasibility of a camera-based shelf confirmation feature versus relying strictly on shelf numbers.</p>
      <p>This project started because I noticed people couldn't find things and kept getting frustrated. Building it out taught me to watch for the moments when something doesn't work in real life — not just on screen — because that's where the best design problems live.</p>
    </section>

  </div>

  <!-- Footer nav -->
  <div class="case-footer" use:reveal={{ duration: 400 }}>
    <a href="#/works" class="btn btn-secondary">← Back to Works</a>
    <a href="mailto:tinashekupfuwa@gmail.com" class="btn btn-primary">Get in Touch</a>
  </div>

</div>

<style>
  .case-page {
    padding: 3rem 0 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* Back link */
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s ease;
    width: fit-content;
  }
  .back-link:hover { color: var(--text); }

  /* Hero */
  .case-hero-section {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border);
  }
  .case-title {
    font-size: clamp(2rem, 5vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin: 0.25rem 0 0.75rem;
  }
  .case-subtitle {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 560px;
    line-height: 1.65;
    margin-bottom: 2rem;
  }
  .case-meta-row {
    display: flex;
    gap: 0;
    flex-wrap: wrap;
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    overflow: hidden;
    background: var(--surface);
    width: 100%;
  }
  .case-meta-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.875rem 1.25rem;
    border-right: 1px solid var(--border);
  }
  .case-meta-item:last-child { border-right: none; }
  .meta-label {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--subtle);
  }
  .meta-value {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
  }

  /* Cover image */
  .case-cover {
    border-radius: var(--r-lg);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface-2);
  }
  .case-cover img {
    width: 100%;
    max-height: 460px;
    object-fit: cover;
    display: block;
  }

  /* Disclaimer */
  .disclaimer {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 0.875rem 1.1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    color: var(--muted);
  }
  .disclaimer svg { flex-shrink: 0; margin-top: 2px; }
  .disclaimer p  { font-size: 0.85rem; line-height: 1.6; margin: 0; }

  /* Content body */
  .case-content {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .prose-section {
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--border);
  }
  .prose-section:last-child { border-bottom: none; }

  .prose-section h2 {
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    margin-bottom: 1rem;
  }
  .prose-section h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--muted);
    margin: 1.5rem 0 0.75rem;
    letter-spacing: -0.01em;
  }
  .prose-section h3:first-of-type { margin-top: 1rem; }

  .prose-section p {
    font-size: 0.95rem;
    color: var(--muted);
    line-height: 1.8;
    margin-bottom: 1rem;
  }
  .prose-section p:last-child { margin-bottom: 0; }
  .prose-section p em { font-style: italic; color: var(--text); }
  .prose-section p strong { font-weight: 600; color: var(--text); }

  /* List */
  .case-list {
    margin: 1rem 0;
    padding-left: 1.25rem;
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .case-list li {
    font-size: 0.95rem;
    color: var(--muted);
    line-height: 1.75;
    padding-left: 0.25rem;
  }

  /* Figures */
  .case-figure {
    margin: 1.25rem 0;
    border-radius: var(--r-md);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface-2);
  }
  .case-figure img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  /* Prototype grid */
  .prototype-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1rem 0;
  }
  .prototype-grid .case-figure { margin: 0; }

  /* Footer */
  .case-footer {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    padding-top: 1rem;
  }

  @media (max-width: 600px) {
    .case-page { padding: 2rem 0 3rem; gap: 2rem; }
    .case-meta-row { width: 100%; }
    .case-meta-item { padding: 0.75rem 1rem; }
    .prototype-grid { grid-template-columns: 1fr; }
    .prose-section { padding: 2rem 0; }
  }
</style>
