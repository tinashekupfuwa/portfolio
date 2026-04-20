<script>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import Home from './pages/Home.svelte';
  import Resume from './pages/Resume.svelte';
  import Works from './pages/Works.svelte';
  import LostInTheAisles from './pages/LostInTheAisles.svelte';

  let currentRoute = $state(window.location.hash || '#/');
  let isDarkMode = $state(false);
  let scrollProgress = $state(0);

  onMount(() => {
    window.addEventListener('hashchange', () => {
      currentRoute = window.location.hash || '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      isDarkMode = true;
      document.documentElement.classList.add('dark');
    }

    const updateProgress = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      scrollProgress = max > 0 ? el.scrollTop / max : 0;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark', isDarkMode);
  }

  let CurrentPage = $derived(
    currentRoute === '#/works/lost-in-the-aisles' ? LostInTheAisles :
    currentRoute === '#/resume'                   ? Resume :
    currentRoute === '#/works'                    ? Works :
    Home
  );
</script>

<!-- Scroll progress line -->
<div class="progress-bar" aria-hidden="true">
  <div class="progress-fill" style="transform: scaleX({scrollProgress});"></div>
</div>

<header class="site-header">
  <div class="header-inner">
    <a href="#/" class="brand" aria-label="Go to homepage">
      <img src="/images/avatar.jpg" alt="Tinashe Kupfuwa" class="brand-avatar" />
      <div class="brand-text">
        <span class="brand-name">Tinashe Kupfuwa</span>
        <span class="brand-role">Product Designer</span>
      </div>
    </a>

    <div class="header-right">
      <nav class="site-nav" aria-label="Main Navigation">
        <a href="#/"
          class:active={currentRoute === '#/'}
          aria-current={currentRoute === '#/' ? 'page' : undefined}>
          Home
        </a>
        <a href="#/works"
          class:active={currentRoute === '#/works' || currentRoute.startsWith('#/works/')}
          aria-current={currentRoute === '#/works' || currentRoute.startsWith('#/works/') ? 'page' : undefined}>
          Works
        </a>
        <a href="#/resume"
          class:active={currentRoute === '#/resume'}
          aria-current={currentRoute === '#/resume' ? 'page' : undefined}>
          Resume
        </a>
      </nav>

      <button class="theme-btn" onclick={toggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDarkMode}>
        {#if isDarkMode}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {:else}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {/if}
      </button>
    </div>
  </div>
</header>

<main class="site-main">
  <div class="main-inner">
    {#key currentRoute}
      <div in:fly={{ y: 14, duration: 260, delay: 30 }} out:fade={{ duration: 110 }}>
        <CurrentPage />
      </div>
    {/key}
  </div>
</main>

<style>
  /* Progress bar */
  .progress-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 2px;
    z-index: 100;
    background: transparent;
    pointer-events: none;
  }
  .progress-fill {
    height: 100%;
    background: var(--accent);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.06s linear;
  }

  /* Header */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    transition: background 0.25s ease, border-color 0.25s ease;
  }

  .header-inner {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 2rem;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  /* Brand */
  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    flex-shrink: 0;
  }
  .brand-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border);
    transition: border-color 0.2s ease, transform 0.2s ease;
    flex-shrink: 0;
  }
  .brand:hover .brand-avatar {
    border-color: var(--accent);
    transform: scale(1.05);
  }
  .brand-text {
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
    line-height: 1;
  }
  .brand-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.015em;
  }
  .brand-role {
    font-size: 0.72rem;
    color: var(--muted);
    font-weight: 400;
  }

  /* Right side */
  .header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  /* Nav */
  .site-nav {
    display: flex;
    align-items: center;
    gap: 0.1rem;
  }
  .site-nav a {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--muted);
    padding: 0.4rem 0.7rem;
    border-radius: var(--r-sm);
    transition: color 0.15s ease, background 0.15s ease;
    text-decoration: none;
  }
  .site-nav a:hover {
    color: var(--text);
    background: var(--surface-2);
  }
  .site-nav a.active {
    color: #FFFFFF;
    background: #111110;
    font-weight: 600;
  }
  :global(html.dark) .site-nav a.active {
    color: #111110;
    background: #ECEAE5;
  }

  /* Theme toggle */
  .theme-btn {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s ease;
    padding: 0;
    flex-shrink: 0;
  }
  .theme-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--surface);
  }

  /* Main layout */
  .site-main { min-height: calc(100vh - 68px); }
  .main-inner {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    .header-inner { padding: 0 1.25rem; height: 60px; }
    .main-inner   { padding: 0 1.25rem; }
    .brand-text   { display: none; }
    .header-right { gap: 0.75rem; }
    .site-nav a   { padding: 0.35rem 0.55rem; font-size: 0.82rem; }
  }
</style>
