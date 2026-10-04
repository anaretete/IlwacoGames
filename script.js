/**
 * Spatial VisionOS Glass Gaming Portal - Master Engine
 * Immersive Worlds with Curated Wallpapers, Custom Theme Creator Studio & liquidGL Engine
 */

(function (window, document) {
  'use strict';

  /* ==========================================================================
     1. CATALOG & REPOSITORY CONSTANTS
     ========================================================================== */
  const BUBBLS_CDN_BASE = 'https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile/UGS-Files/';
  const BUBBLS_RAW_BASE = 'https://raw.githubusercontent.com/bubbls/ugs-singlefile/main/UGS-Files/';

  const INITIAL_GAMES = [
    {
      id: 'cl10minutestildawn',
      file: 'cl10minutestildawn.html',
      folder: 'cl10minutestildawn',
      title: '10 Minutes Til Dawn',
      category: 'Action',
      banner: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
      rating: '4.9',
      rawUrl: `${BUBBLS_RAW_BASE}cl10minutestildawn.html`,
      url: `${BUBBLS_CDN_BASE}cl10minutestildawn.html`,
      desc: 'Survive against an endless onslaught of eldritch nightmares in this tactical top-down roguelite shooter.'
    },
    {
      id: 'clretrobowl',
      file: 'clretrobowl.html',
      folder: 'clretrobowl',
      title: 'Retro Bowl',
      category: 'Sports',
      banner: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80',
      rating: '5.0',
      rawUrl: `${BUBBLS_RAW_BASE}clretrobowl.html`,
      url: `${BUBBLS_CDN_BASE}clretrobowl.html`,
      desc: 'The premier 8-bit American football simulation. Manage your franchise, call plays, and lead your team to victory.'
    },
    {
      id: 'clslope',
      file: 'clslope.html',
      folder: 'clslope',
      title: 'Slope',
      category: 'Arcade',
      banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      rawUrl: `${BUBBLS_RAW_BASE}clslope.html`,
      url: `${BUBBLS_CDN_BASE}clslope.html`,
      desc: 'High-velocity 3D downhill velocity runner. Steer smoothly down the neon geometric courses.'
    },
    {
      id: 'cl1v1lol',
      file: 'cl1v1lol.html',
      folder: 'cl1v1lol',
      title: '1v1.LOL',
      category: 'Action',
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      rating: '4.9',
      rawUrl: `${BUBBLS_RAW_BASE}cl1v1lol.html`,
      url: `${BUBBLS_CDN_BASE}cl1v1lol.html`,
      desc: 'Competitive third-person building and tactical duel arena. Practice fast edits and marksmanship.'
    },
    {
      id: 'clsubwaysurfers',
      file: 'clsubwaysurfers.html',
      folder: 'clsubwaysurfers',
      title: 'Subway Surfers',
      category: 'Arcade',
      banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      rawUrl: `${BUBBLS_RAW_BASE}clsubwaysurfers.html`,
      url: `${BUBBLS_CDN_BASE}clsubwaysurfers.html`,
      desc: 'Dodge trains, jump barriers, and ride hoverboards through metropolitan subway lines.'
    },
    {
      id: 'clgeometrydash',
      file: 'clgeometrydash.html',
      folder: 'clgeometrydash',
      title: 'Geometry Dash',
      category: 'Arcade',
      banner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      rating: '4.9',
      rawUrl: `${BUBBLS_RAW_BASE}clgeometrydash.html`,
      url: `${BUBBLS_CDN_BASE}clgeometrydash.html`,
      desc: 'Rhythm-based platforming with jump timing, gravity flips, and pulse-pounding electronic soundtracks.'
    },
    {
      id: 'clcookieclicker',
      file: 'clcookieclicker.html',
      folder: 'clcookieclicker',
      title: 'Cookie Clicker',
      category: 'Arcade',
      banner: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      rawUrl: `${BUBBLS_RAW_BASE}clcookieclicker.html`,
      url: `${BUBBLS_CDN_BASE}clcookieclicker.html`,
      desc: 'The original incremental idle masterwork. Bake billions of cookies, build grandmas, and unlock cosmic upgrades.'
    },
    {
      id: 'clcrossyroad',
      file: 'clcrossyroad.html',
      folder: 'clcrossyroad',
      title: 'Crossy Road',
      category: 'Arcade',
      banner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
      rating: '4.7',
      rawUrl: `${BUBBLS_RAW_BASE}clcrossyroad.html`,
      url: `${BUBBLS_CDN_BASE}clcrossyroad.html`,
      desc: 'Endless hopper navigating hazardous highways, rivers, and railroad tracks with blocky voxel animals.'
    },
    {
      id: 'clbitlife',
      file: 'clbitlife.html',
      folder: 'clbitlife',
      title: 'BitLife',
      category: 'Arcade',
      banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      rawUrl: `${BUBBLS_RAW_BASE}clbitlife.html`,
      url: `${BUBBLS_CDN_BASE}clbitlife.html`,
      desc: 'Text-based life simulator. Make choices from birth to old age across education, careers, and relationships.'
    },
    {
      id: 'clbasketrandom',
      file: 'clbasketrandom.html',
      folder: 'clbasketrandom',
      title: 'Basket Random',
      category: 'Sports',
      banner: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
      rating: '4.9',
      rawUrl: `${BUBBLS_RAW_BASE}clbasketrandom.html`,
      url: `${BUBBLS_CDN_BASE}clbasketrandom.html`,
      desc: 'Ragdoll 2-player basketball with wacky physics, changing courts, and hilarious slam dunks.'
    },
    {
      id: '2048',
      folder: '2048',
      file: '2048/index.html',
      title: '2048 Classic',
      category: 'Puzzle',
      banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      rating: '4.9',
      path: './2048/index.html',
      desc: 'Join identical numbers and calculate tactical merges to reach the legendary 2048 tile.'
    },
    {
      id: 'tetris',
      folder: 'tetris',
      file: 'tetris/index.html',
      title: 'Tetris Classic',
      category: 'Puzzle',
      banner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      rating: '5.0',
      path: './tetris/index.html',
      desc: 'The timeless block-stacking arcade masterpiece. Clear full lines and chase high scores.'
    },
    {
      id: 'snake',
      folder: 'snake',
      file: 'snake/index.html',
      title: 'Snake Arcade',
      category: 'Retro',
      banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      path: './snake/index.html',
      desc: 'Classic arcade serpent navigation. Gobble apples, grow endlessly, and avoid colliding with your tail.'
    },
    {
      id: 'pong',
      folder: 'pong',
      file: 'pong/index.html',
      title: 'Pong Classic',
      category: 'Retro',
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      rating: '4.7',
      path: './pong/index.html',
      desc: 'The original 1972 table tennis digital duel. Challenge AI reflexes with precise paddle spins.'
    },
    {
      id: 'breakout',
      folder: 'breakout',
      file: 'breakout/index.html',
      title: 'Breakout DX',
      category: 'Retro',
      banner: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      path: './breakout/index.html',
      desc: 'Smash through multi-colored brick barricades with dynamic ball ricochets and paddle angle physics.'
    },
    {
      id: 'space-invaders',
      folder: 'space-invaders',
      file: 'space-invaders/index.html',
      title: 'Space Invaders',
      category: 'Retro',
      banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      rating: '4.9',
      path: './space-invaders/index.html',
      desc: 'Defend planet Earth from descending waves of alien invaders with laser cannons and defense bunkers.'
    },
    {
      id: 'flappy-bird',
      folder: 'flappy-bird',
      file: 'flappy-bird/index.html',
      title: 'Flappy Bird',
      category: 'Arcade',
      banner: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
      rating: '4.7',
      path: './flappy-bird/index.html',
      desc: 'Tap with pinpoint rhythm to navigate the winged traveler through endless green pipes.'
    },
    {
      id: 'minesweeper',
      folder: 'minesweeper',
      file: 'minesweeper/index.html',
      title: 'Minesweeper Classic',
      category: 'Puzzle',
      banner: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      path: './minesweeper/index.html',
      desc: 'Deduce hidden explosives across grid matrices with numeric logic clues and tactical flags.'
    }
  ];

  let allGames = [...INITIAL_GAMES];
  let activeGame = null;
  let activeTab = 'home';
  let currentUser = null;
  let currentBlobUrl = null;
  let liquidGLLens = null;

  let displayCount = 48;
  let activeCategory = 'all';
  let activeSearch = '';

  /* ==========================================================================
     2. MASTER IMMERSIVE WORLDS REPOSITORY (WITH THEMED WALLPAPERS)
     ========================================================================== */
  const IMMERSIVE_THEMES = [
    {
      id: 'cyberpunk',
      name: 'Cyberpunk 2077',
      color: '#fcee0a',
      secondaryColor: '#00f0ff',
      glass: 'liquid',
      desc: 'Neon Cyber Grid & Skyscraper Metropolis',
      wallpaper: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.45
    },
    {
      id: 'matrix',
      name: 'The Matrix',
      color: '#00ff66',
      secondaryColor: '#059669',
      glass: 'liquid',
      desc: 'Digital Rain & Falling Green Code Streams',
      wallpaper: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.45
    },
    {
      id: 'synthwave',
      name: 'Synthwave 80s',
      color: '#ff007f',
      secondaryColor: '#00f5ff',
      glass: 'frosted',
      desc: 'Retro Neon Grid Sunset Mountains & Violet Fog',
      wallpaper: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.40
    },
    {
      id: 'tokyo',
      name: 'Tokyo Neon',
      color: '#e879f9',
      secondaryColor: '#a855f7',
      glass: 'liquid',
      desc: 'Rainy Shibuya Night & Neon Alley Reflections',
      wallpaper: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.42
    },
    {
      id: 'arctic',
      name: 'Arctic Glacial',
      color: '#06b6d4',
      secondaryColor: '#38bdf8',
      glass: 'liquid',
      desc: 'Crystalline Ice Cave & Deep Glacial Abyss',
      wallpaper: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.40
    },
    {
      id: 'bloodborne',
      name: 'Bloodborne Gothic',
      color: '#f43f5e',
      secondaryColor: '#be123c',
      glass: 'frosted',
      desc: 'Gothic Cathedral Spires Under Blood Red Moon',
      wallpaper: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.48
    },
    {
      id: 'bioluminescent',
      name: 'Bioluminescent Trench',
      color: '#2dd4bf',
      secondaryColor: '#06b6d4',
      glass: 'liquid',
      desc: 'Abyssal Trench Coral Reef & Glowing Medusa',
      wallpaper: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.42
    },
    {
      id: 'solar',
      name: 'Solar Flare',
      color: '#f59e0b',
      secondaryColor: '#ea580c',
      glass: 'liquid',
      desc: 'Molten Gold Plasma & Solar Coronal Ejection',
      wallpaper: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.44
    },
    {
      id: 'stardust',
      name: 'Cosmic Stardust',
      color: '#c084fc',
      secondaryColor: '#38bdf8',
      glass: 'liquid',
      desc: 'Deep Violet Space Nebula & Celestial Starfield',
      wallpaper: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.45
    },
    {
      id: 'emerald',
      name: 'Emerald Forest',
      color: '#10b981',
      secondaryColor: '#059669',
      glass: 'frosted',
      desc: 'Enchanted Misty Pine Canopy & Glowing Moss',
      wallpaper: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.45
    },
    {
      id: 'oled',
      name: 'OLED Pure Pitch',
      color: '#e2e8f0',
      secondaryColor: '#94a3b8',
      glass: 'opaque',
      desc: 'True Pitch Black #000000 Obsidian Battery Saver',
      wallpaper: '',
      dimmer: 0.90
    },
    {
      id: 'visionpro',
      name: 'Vision Pro',
      color: '#38bdf8',
      secondaryColor: '#818cf8',
      glass: 'liquid',
      desc: 'Apple VisionOS Spatial Fluid Curves & Glass',
      wallpaper: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80',
      dimmer: 0.45
    }
  ];

  const DEFAULT_CONFIG = {
    theme: 'visionpro',
    glassStyle: 'liquid',
    blur: 28,
    opacity: 0.72,
    saturate: 180,
    radius: 20,
    ambient: 0.12,
    bgDimmer: 0.45,
    customBgUrl: '',
    refraction: 0.05,
    aberration: 0.02
  };

  let currentConfig = { ...DEFAULT_CONFIG };
  let userCustomThemes = [];

  // Studio In-Progress State
  let studioState = {
    name: 'My Custom Theme',
    primary: '#38bdf8',
    secondary: '#818cf8',
    glass: 'liquid',
    wallpaper: '',
    blur: 28,
    opacity: 0.72,
    saturate: 180,
    radius: 20,
    bgDimmer: 0.45,
    refraction: 0.05,
    aberration: 0.02
  };

  /* ==========================================================================
     3. THEME PERSISTENCE & DOM PROPAGATION
     ========================================================================== */
  function loadThemeConfig() {
    try {
      const saved = localStorage.getItem('portal_theme_config');
      if (saved) {
        currentConfig = { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
      const customSaved = localStorage.getItem('portal_user_custom_themes');
      if (customSaved) {
        userCustomThemes = JSON.parse(customSaved);
      }
    } catch (e) {
      currentConfig = { ...DEFAULT_CONFIG };
      userCustomThemes = [];
    }

    applyThemeToDOM();
    renderThemesGallery();
    renderWallpaperStrip();
    renderUserCustomThemes();
    initStudioDefaults();
    initLiquidGL();
  }

  function saveThemeConfig() {
    localStorage.setItem('portal_theme_config', JSON.stringify(currentConfig));
    applyThemeToDOM();
    initLiquidGL();
  }

  function applyThemeToDOM() {
    const doc = document.documentElement;
    doc.dataset.theme = currentConfig.theme;
    doc.dataset.glassStyle = currentConfig.glassStyle;

    doc.style.setProperty('--glass-blur', `${currentConfig.blur}px`);
    doc.style.setProperty('--glass-opacity', currentConfig.opacity);
    doc.style.setProperty('--glass-saturate', `${currentConfig.saturate}%`);
    doc.style.setProperty('--radius-card', `${currentConfig.radius}px`);
    doc.style.setProperty('--radius-modal', `${currentConfig.radius + 6}px`);
    doc.style.setProperty('--radius-thumb', `${Math.max(4, currentConfig.radius - 6)}px`);
    doc.style.setProperty('--ambient-intensity', currentConfig.ambient);
    doc.style.setProperty('--bg-dimmer', currentConfig.bgDimmer);

    // Apply custom colors if active theme is custom
    if (currentConfig.theme === 'custom' && currentConfig.customColors) {
      doc.style.setProperty('--accent-primary', currentConfig.customColors.primary);
      doc.style.setProperty('--accent-secondary', currentConfig.customColors.secondary);
      const hex = currentConfig.customColors.primary.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16) || 56;
      const g = parseInt(hex.substring(2, 4), 16) || 189;
      const b = parseInt(hex.substring(4, 6), 16) || 248;
      doc.style.setProperty('--accent-rgb', `${r}, ${g}, ${b}`);
      doc.style.setProperty('--accent-glow', `rgba(${r}, ${g}, ${b}, 0.3)`);
    }

    // Wallpaper Resolution
    const wallpaperEl = document.getElementById('wallpaper-layer');
    if (currentConfig.customBgUrl) {
      if (wallpaperEl) wallpaperEl.style.backgroundImage = `url("${currentConfig.customBgUrl}")`;
      showWallpaperPreview(currentConfig.customBgUrl, 'Custom Wallpaper Active');
    } else {
      const activeThemeObj = IMMERSIVE_THEMES.find(t => t.id === currentConfig.theme);
      if (activeThemeObj && activeThemeObj.wallpaper) {
        if (wallpaperEl) wallpaperEl.style.backgroundImage = `url("${activeThemeObj.wallpaper}")`;
      } else if (activeThemeObj && activeThemeObj.wallpaper === '') {
        if (wallpaperEl) wallpaperEl.style.backgroundImage = 'none';
      } else {
        if (wallpaperEl) wallpaperEl.style.backgroundImage = '';
      }
      hideWallpaperPreview();
    }

    // Update active world badge
    const badge = document.getElementById('active-world-badge');
    if (badge) {
      const t = IMMERSIVE_THEMES.find(item => item.id === currentConfig.theme);
      badge.textContent = t ? t.name : (currentConfig.theme === 'custom' ? 'Custom Theme Active' : 'Active');
    }

    // Sync Slider Inputs & Value Labels in Settings
    syncSliderUI('slider-blur', 'val-blur', currentConfig.blur, 'px');
    syncSliderUI('slider-opacity', 'val-opacity', Math.round(currentConfig.opacity * 100), '%');
    syncSliderUI('slider-saturate', 'val-saturate', currentConfig.saturate, '%');
    syncSliderUI('slider-radius', 'val-radius', currentConfig.radius, 'px');
    syncSliderUI('slider-ambient', 'val-ambient', Math.round(currentConfig.ambient * 100), '%');
    syncSliderUI('slider-dimmer', 'val-dimmer', Math.round(currentConfig.bgDimmer * 100), '%');

    // Update active states on picker buttons
    document.querySelectorAll('.theme-glass-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.glassStyle === currentConfig.glassStyle);
    });
    document.querySelectorAll('.preset-card-btn[data-theme]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === currentConfig.theme);
    });
  }

  function syncSliderUI(sliderId, labelId, val, unit) {
    const slider = document.getElementById(sliderId);
    const label = document.getElementById(labelId);
    if (slider) slider.value = val;
    if (label) label.textContent = `${val}${unit}`;
  }

  /* ==========================================================================
     4. liquidGL WebGL/WebGPU REAL LIQUID GLASS ENGINE (naughtyduk/liquidGL)
     ========================================================================== */
  function initLiquidGL() {
    if (typeof window.liquidGL !== 'function') return;

    // Destroy existing lens instance cleanly
    if (liquidGLLens) {
      try {
        if (typeof liquidGLLens.destroy === 'function') {
          liquidGLLens.destroy();
        } else if (Array.isArray(liquidGLLens)) {
          liquidGLLens.forEach(lens => lens.destroy && lens.destroy());
        }
      } catch (e) {}
      liquidGLLens = null;
    }

    if (currentConfig.glassStyle !== 'liquid') return;

    try {
      // Mark spotlight and key cards for liquidGL glass panes
      const targets = document.querySelectorAll('.hero-spotlight, .studio-preview-card');
      targets.forEach(el => el.classList.add('liquidGL-lens'));

      liquidGLLens = window.liquidGL({
        target: ".liquidGL-lens",
        snapshot: "#wallpaper-layer",
        engine: "auto",
        refraction: currentConfig.refraction || 0.05,
        aberration: currentConfig.aberration || 0.02,
        bevelDepth: 0.04,
        bevelWidth: 0.04,
        frost: 0,
        shadow: false,
        specular: false, // Strict user rule: NO artificial white specular
        reveal: "fade",
        tilt: false,
        draggable: false,
        interaction: "fluid", // True viscous touch/pointer fluid refraction
        interactionStrength: 1.6,
        interactionRadius: 0.45,
        interactionViscosity: 0.55,
        resolution: 1.0,
        zIndex: 5
      });
    } catch (err) {
      console.warn('liquidGL status:', err.message);
    }
  }

  /* ==========================================================================
     5. IMMERSIVE WORLDS GALLERY & QUICK WALLPAPER STRIP
     ========================================================================== */
  function renderThemesGallery() {
    const container = document.getElementById('immersive-themes-container');
    if (!container) return;
    container.innerHTML = '';

    IMMERSIVE_THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'preset-card-btn' + (currentConfig.theme === t.id ? ' active' : '');
      btn.dataset.theme = t.id;
      btn.onclick = () => window.applyImmersiveTheme(t.id);

      btn.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <div class="preset-swatch-ring" style="background: ${t.color};">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: #ffffff;"></div>
          </div>
          <span style="font-size: 10px; font-weight: 700; color: ${t.secondaryColor}; text-transform: uppercase;">${t.glass}</span>
        </div>
        <div class="preset-title" style="margin-top: 4px;">${t.name}</div>
        <div class="preset-meta">${t.desc}</div>
      `;
      container.appendChild(btn);
    });
  }

  function renderWallpaperStrip() {
    const strip = document.getElementById('wallpaper-quick-strip');
    if (!strip) return;
    strip.innerHTML = '';

    IMMERSIVE_THEMES.forEach(t => {
      if (!t.wallpaper) return;
      const chip = document.createElement('div');
      chip.className = 'wallpaper-card-chip' + (currentConfig.customBgUrl === t.wallpaper ? ' active' : '');
      chip.onclick = () => {
        currentConfig.customBgUrl = t.wallpaper;
        saveThemeConfig();
        renderWallpaperStrip();
      };

      chip.innerHTML = `
        <img class="wallpaper-chip-img" src="${t.wallpaper}" alt="${t.name}" loading="lazy" />
        <div class="wallpaper-chip-label">${t.name}</div>
      `;
      strip.appendChild(chip);
    });
  }

  window.applyImmersiveTheme = function (themeId) {
    const t = IMMERSIVE_THEMES.find(item => item.id === themeId);
    if (!t) return;

    currentConfig.theme = t.id;
    currentConfig.glassStyle = t.glass;
    if (t.dimmer !== undefined) currentConfig.bgDimmer = t.dimmer;
    currentConfig.customColors = null;

    // Switch wallpaper to theme wallpaper unless a local user upload exists
    if (!currentConfig.customBgUrl || currentConfig.customBgUrl.startsWith('data:')) {
      // keep local upload if user explicitly uploaded one, otherwise load theme wallpaper
    } else {
      currentConfig.customBgUrl = '';
    }

    saveThemeConfig();
    renderThemesGallery();
    renderWallpaperStrip();
  };

  /* ==========================================================================
     6. CUSTOM THEME CREATOR STUDIO ("MAKE YOUR OWN THEME")
     ========================================================================== */
  function initStudioDefaults() {
    studioState = {
      name: `Custom Theme ${userCustomThemes.length + 1}`,
      primary: '#38bdf8',
      secondary: '#818cf8',
      glass: currentConfig.glassStyle || 'liquid',
      wallpaper: currentConfig.customBgUrl || '',
      blur: currentConfig.blur || 28,
      opacity: currentConfig.opacity || 0.72,
      saturate: currentConfig.saturate || 180,
      radius: currentConfig.radius || 20,
      bgDimmer: currentConfig.bgDimmer || 0.45,
      refraction: currentConfig.refraction || 0.05,
      aberration: currentConfig.aberration || 0.02
    };

    const nameInput = document.getElementById('studio-theme-name');
    if (nameInput) nameInput.value = studioState.name;

    const primaryColorInput = document.getElementById('studio-color-primary');
    if (primaryColorInput) primaryColorInput.value = studioState.primary;

    const secondaryColorInput = document.getElementById('studio-color-secondary');
    if (secondaryColorInput) secondaryColorInput.value = studioState.secondary;

    const primaryHex = document.getElementById('studio-primary-hex');
    if (primaryHex) primaryHex.textContent = studioState.primary;

    const secondaryHex = document.getElementById('studio-secondary-hex');
    if (secondaryHex) secondaryHex.textContent = studioState.secondary;

    const glassSelect = document.getElementById('studio-glass-style');
    if (glassSelect) glassSelect.value = studioState.glass;

    updateStudioPreview();
  }

  window.updateStudioPreview = function () {
    const nameInput = document.getElementById('studio-theme-name');
    const titleEl = document.getElementById('preview-theme-title');
    if (nameInput && titleEl) {
      titleEl.textContent = nameInput.value.trim() || 'My Custom Theme';
      studioState.name = titleEl.textContent;
    }

    const glassSelect = document.getElementById('studio-glass-style');
    if (glassSelect) studioState.glass = glassSelect.value;
  };

  window.onStudioColorChange = function (type, hex) {
    if (type === 'primary') {
      studioState.primary = hex;
      const hexLabel = document.getElementById('studio-primary-hex');
      if (hexLabel) hexLabel.textContent = hex;
      const doc = document.documentElement;
      doc.style.setProperty('--accent-primary', hex);
      const cleanHex = hex.replace('#', '');
      const r = parseInt(cleanHex.substring(0, 2), 16) || 56;
      const g = parseInt(cleanHex.substring(2, 4), 16) || 189;
      const b = parseInt(cleanHex.substring(4, 6), 16) || 248;
      doc.style.setProperty('--accent-rgb', `${r}, ${g}, ${b}`);
      doc.style.setProperty('--accent-glow', `rgba(${r}, ${g}, ${b}, 0.3)`);
    } else {
      studioState.secondary = hex;
      const hexLabel = document.getElementById('studio-secondary-hex');
      if (hexLabel) hexLabel.textContent = hex;
      document.documentElement.style.setProperty('--accent-secondary', hex);
    }
  };

  window.applyStudioPrimaryColor = function (hex) {
    const picker = document.getElementById('studio-color-primary');
    if (picker) picker.value = hex;
    window.onStudioColorChange('primary', hex);
  };

  window.onStudioSliderChange = function (param, val, unit) {
    const num = parseFloat(val);
    studioState[param] = num;
    const label = document.getElementById(`studio-val-${param === 'refraction' ? 'refract' : param}`);
    if (label) label.textContent = `${val}${unit}`;

    const doc = document.documentElement;
    if (param === 'blur') doc.style.setProperty('--glass-blur', `${num}px`);
    if (param === 'opacity') doc.style.setProperty('--glass-opacity', num / 100);
    if (param === 'saturate') doc.style.setProperty('--glass-saturate', `${num}%`);
    if (param === 'radius') doc.style.setProperty('--radius-card', `${num}px`);
    if (param === 'bgDimmer') doc.style.setProperty('--bg-dimmer', num / 100);
  };

  window.setStudioVoidBg = function () {
    studioState.wallpaper = '';
    const wallpaperEl = document.getElementById('wallpaper-layer');
    if (wallpaperEl) wallpaperEl.style.backgroundImage = 'none';
    currentConfig.customBgUrl = '';
    saveThemeConfig();
  };

  window.applyStudioDirect = function () {
    currentConfig.theme = 'custom';
    currentConfig.glassStyle = studioState.glass;
    currentConfig.blur = studioState.blur;
    currentConfig.opacity = studioState.opacity <= 1 ? studioState.opacity : studioState.opacity / 100;
    currentConfig.saturate = studioState.saturate;
    currentConfig.radius = studioState.radius;
    currentConfig.bgDimmer = studioState.bgDimmer <= 1 ? studioState.bgDimmer : studioState.bgDimmer / 100;
    currentConfig.refraction = studioState.refraction;
    currentConfig.aberration = studioState.aberration;
    currentConfig.customColors = {
      primary: studioState.primary,
      secondary: studioState.secondary
    };

    saveThemeConfig();
  };

  window.saveCustomTheme = function () {
    const nameInput = document.getElementById('studio-theme-name');
    const themeName = (nameInput && nameInput.value.trim()) || `Custom Theme ${userCustomThemes.length + 1}`;

    const newTheme = {
      id: 'custom_' + Date.now().toString(36),
      name: themeName,
      color: studioState.primary,
      secondaryColor: studioState.secondary,
      glass: studioState.glass,
      blur: studioState.blur,
      opacity: studioState.opacity <= 1 ? studioState.opacity : studioState.opacity / 100,
      saturate: studioState.saturate,
      radius: studioState.radius,
      bgDimmer: studioState.bgDimmer <= 1 ? studioState.bgDimmer : studioState.bgDimmer / 100,
      refraction: studioState.refraction,
      aberration: studioState.aberration,
      wallpaper: currentConfig.customBgUrl || studioState.wallpaper || ''
    };

    userCustomThemes.unshift(newTheme);
    localStorage.setItem('portal_user_custom_themes', JSON.stringify(userCustomThemes));
    renderUserCustomThemes();

    window.applyUserCustomTheme(newTheme.id);
    initStudioDefaults();
  };

  window.resetStudioInputs = function () {
    initStudioDefaults();
  };

  /* ==========================================================================
     7. YOUR CUSTOM THEMES LIBRARY ENGINE
     ========================================================================== */
  function renderUserCustomThemes() {
    const container = document.getElementById('user-custom-themes-list');
    const badge = document.getElementById('custom-themes-count-badge');
    if (badge) badge.textContent = `${userCustomThemes.length} Saved`;
    if (!container) return;
    container.innerHTML = '';

    if (!userCustomThemes.length) {
      container.innerHTML = `<div style="font-size: 12px; color: var(--text-dim); padding: 12px 0;">No custom themes created yet. Use the Theme Creator Studio above to design your first world!</div>`;
      return;
    }

    userCustomThemes.forEach(t => {
      const card = document.createElement('div');
      card.className = 'preset-card-btn';
      if (currentConfig.theme === 'custom' && currentConfig.customThemeId === t.id) {
        card.classList.add('active');
      }

      card.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="preset-swatch-ring" style="background: ${t.color}; width: 20px; height: 20px;"></div>
            <div class="preset-swatch-ring" style="background: ${t.secondaryColor || t.color}; width: 14px; height: 14px;"></div>
          </div>
          <span style="font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">${t.glass}</span>
        </div>
        <div class="preset-title" style="margin-top: 6px;">${t.name}</div>
        <div class="preset-meta">${t.blur}px blur • ${Math.round(t.opacity * 100)}% opacity</div>

        <div style="display: flex; gap: 6px; margin-top: 10px;">
          <button class="btn-secondary" style="padding: 4px 10px; font-size: 11px; flex: 1;" onclick="applyUserCustomTheme('${t.id}')">Apply</button>
          <button class="btn-secondary" style="padding: 4px 10px; font-size: 11px;" onclick="editUserCustomTheme('${t.id}')" title="Edit in Studio">Edit</button>
          <button class="btn-secondary" style="padding: 4px 10px; font-size: 11px; color: #f87171;" onclick="deleteUserCustomTheme('${t.id}', event)" title="Delete Theme">✕</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  window.applyUserCustomTheme = function (themeId) {
    const t = userCustomThemes.find(item => item.id === themeId);
    if (!t) return;

    currentConfig.theme = 'custom';
    currentConfig.customThemeId = t.id;
    currentConfig.glassStyle = t.glass || 'liquid';
    currentConfig.blur = t.blur || 28;
    currentConfig.opacity = t.opacity || 0.72;
    currentConfig.saturate = t.saturate || 180;
    currentConfig.radius = t.radius || 20;
    currentConfig.bgDimmer = t.bgDimmer || 0.45;
    currentConfig.refraction = t.refraction || 0.05;
    currentConfig.aberration = t.aberration || 0.02;
    currentConfig.customColors = {
      primary: t.color,
      secondary: t.secondaryColor || t.color
    };
    if (t.wallpaper) currentConfig.customBgUrl = t.wallpaper;

    saveThemeConfig();
    renderUserCustomThemes();
  };

  window.editUserCustomTheme = function (themeId) {
    const t = userCustomThemes.find(item => item.id === themeId);
    if (!t) return;

    const nameInput = document.getElementById('studio-theme-name');
    if (nameInput) nameInput.value = t.name;

    const primaryColorInput = document.getElementById('studio-color-primary');
    if (primaryColorInput) primaryColorInput.value = t.color;

    const secondaryColorInput = document.getElementById('studio-color-secondary');
    if (secondaryColorInput) secondaryColorInput.value = t.secondaryColor || t.color;

    window.onStudioColorChange('primary', t.color);
    window.onStudioColorChange('secondary', t.secondaryColor || t.color);

    const glassSelect = document.getElementById('studio-glass-style');
    if (glassSelect) glassSelect.value = t.glass || 'liquid';

    const blurSlider = document.getElementById('studio-slider-blur');
    if (blurSlider) blurSlider.value = t.blur;
    window.onStudioSliderChange('blur', t.blur, 'px');

    const opacitySlider = document.getElementById('studio-slider-opacity');
    if (opacitySlider) opacitySlider.value = Math.round(t.opacity * 100);
    window.onStudioSliderChange('opacity', Math.round(t.opacity * 100), '%');

    updateStudioPreview();
  };

  window.deleteUserCustomTheme = function (themeId, e) {
    if (e) e.stopPropagation();
    if (!confirm('Are you sure you want to delete this custom theme?')) return;
    userCustomThemes = userCustomThemes.filter(item => item.id !== themeId);
    localStorage.setItem('portal_user_custom_themes', JSON.stringify(userCustomThemes));
    renderUserCustomThemes();
  };

  window.exportCustomThemesJson = function () {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(userCustomThemes, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute('href', dataStr);
    dl.setAttribute('download', `ilwaco-custom-themes-${Date.now()}.json`);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
  };

  window.triggerImportCustomThemes = function () {
    const input = document.getElementById('import-custom-themes-file');
    if (input) input.click();
  };

  window.handleImportCustomThemes = function (event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          userCustomThemes = [...imported, ...userCustomThemes];
          localStorage.setItem('portal_user_custom_themes', JSON.stringify(userCustomThemes));
          renderUserCustomThemes();
        }
      } catch (err) {
        alert('Invalid custom themes JSON file.');
      }
    };
    reader.readAsText(file);
  };

  /* ==========================================================================
     8. GRANULAR SLIDERS & MATERIAL CONTROLS
     ========================================================================== */
  window.setGlassStyle = function (style) {
    currentConfig.glassStyle = style;
    saveThemeConfig();
  };

  window.onSliderBlur = function (val) {
    currentConfig.blur = parseInt(val, 10);
    saveThemeConfig();
  };

  window.onSliderOpacity = function (val) {
    currentConfig.opacity = parseInt(val, 10) / 100;
    saveThemeConfig();
  };

  window.onSliderSaturate = function (val) {
    currentConfig.saturate = parseInt(val, 10);
    saveThemeConfig();
  };

  window.onSliderRadius = function (val) {
    currentConfig.radius = parseInt(val, 10);
    saveThemeConfig();
  };

  window.onSliderAmbient = function (val) {
    currentConfig.ambient = parseInt(val, 10) / 100;
    saveThemeConfig();
  };

  window.onSliderDimmer = function (val) {
    currentConfig.bgDimmer = parseInt(val, 10) / 100;
    saveThemeConfig();
  };

  /* ==========================================================================
     9. LOCAL WALLPAPER UPLOAD & REVERT CONTROLS
     ========================================================================== */
  window.triggerBgUpload = function () {
    const fileInput = document.getElementById('bg-file-upload');
    if (fileInput) fileInput.click();
  };

  window.handleBgFileUpload = function (event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const MAX_W = 1920;
        const MAX_H = 1080;
        let w = img.width;
        let h = img.height;

        if (w > MAX_W || h > MAX_H) {
          const ratio = Math.min(MAX_W / w, MAX_H / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }

        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        currentConfig.customBgUrl = optimizedDataUrl;
        saveThemeConfig();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  window.applyCustomBgUrl = function () {
    const input = document.getElementById('custom-bg-input');
    if (!input || !input.value.trim()) return;
    currentConfig.customBgUrl = input.value.trim();
    saveThemeConfig();
  };

  window.clearCustomBgUrl = function () {
    currentConfig.customBgUrl = '';
    const input = document.getElementById('custom-bg-input');
    if (input) input.value = '';
    saveThemeConfig();
  };

  window.revertToThemeWallpaper = function () {
    window.clearCustomBgUrl();
  };

  function showWallpaperPreview(url, labelText) {
    const previewBox = document.getElementById('wallpaper-preview-box');
    const thumb = document.getElementById('wallpaper-preview-thumb');
    const text = document.getElementById('wallpaper-preview-text');
    if (previewBox && thumb) {
      thumb.src = url;
      if (text && labelText) text.textContent = labelText;
      previewBox.style.display = 'flex';
    }
  }

  function hideWallpaperPreview() {
    const previewBox = document.getElementById('wallpaper-preview-box');
    if (previewBox) previewBox.style.display = 'none';
  }

  window.resetThemeDefaults = function () {
    currentConfig = { ...DEFAULT_CONFIG };
    saveThemeConfig();
    initStudioDefaults();
  };

  /* ==========================================================================
     10. FIREBASE GOOGLE AUTHENTICATION & CLOUD SYNC
     ========================================================================== */
  const firebaseConfig = {
    apiKey: "AIzaSyDjDoFptza_zH-P5HTlHTbjeeksgcApaso",
    authDomain: "ilwacohub.firebaseapp.com",
    projectId: "ilwacohub",
    storageBucket: "portal-sync-ilwaco.appspot.com",
    messagingSenderId: "147493360499",
    appId: "1:147493360499:web:64ebbdea-e8ab-43b7-b1f5-298a1b794386"
  };

  let firebaseAuth = null;
  let firestoreDb = null;

  function initFirebase() {
    if (typeof window.firebase !== 'undefined') {
      try {
        if (!window.firebase.apps.length) {
          window.firebase.initializeApp(firebaseConfig);
        }
        firebaseAuth = window.firebase.auth();
        firestoreDb = window.firebase.firestore();

        firebaseAuth.onAuthStateChanged(user => {
          currentUser = user;
          updateAuthUI(user);
        });
      } catch (err) {
        console.warn('Firebase init:', err.message);
      }
    }
  }

  function updateAuthUI(user) {
    const signedInBox = document.getElementById('account-signed-in');
    const signedOutBox = document.getElementById('account-signed-out');
    const userAvatar = document.getElementById('auth-user-avatar');
    const userName = document.getElementById('auth-user-name');
    const userEmail = document.getElementById('auth-user-email');
    const userUid = document.getElementById('auth-user-uid');

    if (user) {
      if (signedInBox) signedInBox.style.display = 'block';
      if (signedOutBox) signedOutBox.style.display = 'none';
      if (userAvatar) userAvatar.src = user.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80';
      if (userName) userName.textContent = user.displayName || 'Google Explorer';
      if (userEmail) userEmail.textContent = user.email || 'Verified Account';
      if (userUid) userUid.textContent = `UID: ${user.uid.substring(0, 12)}...`;
    } else {
      if (signedInBox) signedInBox.style.display = 'none';
      if (signedOutBox) signedOutBox.style.display = 'block';
    }
  }

  window.signInWithGoogle = function () {
    if (!firebaseAuth) {
      showAuthError('Firebase Authentication is initializing. Please retry in a moment.');
      return;
    }
    const provider = new window.firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    firebaseAuth.signInWithPopup(provider)
      .then(result => {
        currentUser = result.user;
        updateAuthUI(result.user);
        clearAuthError();
      })
      .catch(err => {
        showAuthError(err.message);
      });
  };

  window.signOutUser = function () {
    if (firebaseAuth) {
      firebaseAuth.signOut().then(() => {
        currentUser = null;
        updateAuthUI(null);
      });
    }
  };

  function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    if (el) el.textContent = msg;
  }

  function clearAuthError() {
    const el = document.getElementById('auth-error-msg');
    if (el) el.textContent = '';
  }

  window.syncSavesToCloud = function () {
    const statusMsg = document.getElementById('cloud-sync-status-msg');
    const timeMeta = document.getElementById('cloud-last-sync-time');

    if (!currentUser) {
      if (statusMsg) statusMsg.textContent = 'Please sign in with Google to enable Cloud Sync.';
      return;
    }

    if (!firestoreDb) {
      if (statusMsg) statusMsg.textContent = 'Cloud database initializing. Please wait a second.';
      return;
    }

    if (statusMsg) statusMsg.textContent = 'Serializing browser saves & themes to cloud...';

    // Collect all local storage keys
    const backupData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      backupData[key] = localStorage.getItem(key);
    }

    const payload = {
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      customThemes: userCustomThemes,
      activeThemeConfig: currentConfig,
      storageKeysCount: Object.keys(backupData).length,
      payload: JSON.stringify(backupData)
    };

    firestoreDb.collection('portal_cloud_saves').doc(currentUser.uid).set(payload, { merge: true })
      .then(() => {
        const now = new Date().toLocaleTimeString();
        if (statusMsg) statusMsg.textContent = `✓ Successfully synced ${Object.keys(backupData).length} items & custom themes to Google Cloud!`;
        if (timeMeta) timeMeta.textContent = `Last synchronized: Today at ${now}`;
      })
      .catch(err => {
        if (statusMsg) statusMsg.textContent = `Sync notice: ${err.message}`;
      });
  };

  window.restoreSavesFromCloud = function () {
    const statusMsg = document.getElementById('cloud-sync-status-msg');

    if (!currentUser) {
      if (statusMsg) statusMsg.textContent = 'Please sign in with Google first.';
      return;
    }

    if (!firestoreDb) return;
    if (statusMsg) statusMsg.textContent = 'Fetching cloud save file from Firestore...';

    firestoreDb.collection('portal_cloud_saves').doc(currentUser.uid).get()
      .then(doc => {
        if (!doc.exists) {
          if (statusMsg) statusMsg.textContent = 'No cloud save found for this Google account.';
          return;
        }

        const data = doc.data();
        if (data.payload) {
          const parsed = JSON.parse(data.payload);
          Object.keys(parsed).forEach(k => {
            localStorage.setItem(k, parsed[k]);
          });
        }
        if (data.customThemes && Array.isArray(data.customThemes)) {
          userCustomThemes = data.customThemes;
          localStorage.setItem('portal_user_custom_themes', JSON.stringify(userCustomThemes));
        }

        loadThemeConfig();
        if (statusMsg) statusMsg.textContent = `✓ Cloud saves & themes restored successfully!`;
      })
      .catch(err => {
        if (statusMsg) statusMsg.textContent = `Restore failed: ${err.message}`;
      });
  };

  /* ==========================================================================
     11. LOCAL BACKUP (OFFLINE JSON EXPORT & IMPORT)
     ========================================================================== */
  window.exportSaveFiles = function () {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute('href', dataStr);
    dl.setAttribute('download', `ilwaco-saves-backup-${Date.now()}.json`);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
  };

  window.triggerImportSaves = function () {
    const input = document.getElementById('import-save-file');
    if (input) input.click();
  };

  window.handleFileImport = function (event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        Object.keys(imported).forEach(k => {
          localStorage.setItem(k, imported[k]);
        });
        loadThemeConfig();
        alert('Game saves and preferences imported successfully!');
      } catch (err) {
        alert('Invalid backup JSON file.');
      }
    };
    reader.readAsText(file);
  };

  /* ==========================================================================
     12. GAME DETAILS MODAL & BLOB URL EXECUTION
     ========================================================================== */
  window.openModal = function (gameId) {
    const game = allGames.find(g => g.id === gameId);
    if (!game) return;
    activeGame = game;

    const modal = document.getElementById('game-modal');
    const banner = document.getElementById('modal-banner');
    const title = document.getElementById('modal-title');
    const rating = document.getElementById('modal-rating');
    const path = document.getElementById('modal-path');
    const desc = document.getElementById('modal-desc');

    if (banner) banner.src = game.banner;
    if (title) title.textContent = game.title;
    if (rating) rating.textContent = `★ ${game.rating || '4.9'}`;
    if (path) path.textContent = game.path || 'Dynamic Raw-Code Blob URL';
    if (desc) desc.textContent = game.desc || 'Instant offline single-file execution.';

    const playBtn = document.getElementById('modal-play-btn');
    if (playBtn) playBtn.onclick = () => window.launchGame(game.id);

    const dlBtn = document.getElementById('modal-dl-btn');
    if (dlBtn) dlBtn.onclick = () => window.downloadGameHtml(game.id);

    if (modal) modal.classList.add('active');
  };

  window.closeModal = function () {
    const modal = document.getElementById('game-modal');
    if (modal) modal.classList.remove('active');
  };

  window.launchGame = function (gameId) {
    window.closeModal();
    const game = allGames.find(g => g.id === gameId);
    if (!game) return;
    activeGame = game;

    const cinema = document.getElementById('game-cinema-layer');
    const iframe = document.getElementById('cinema-iframe');
    const title = document.getElementById('hud-game-title');
    const loadingBar = document.getElementById('cinema-loading-bar');

    if (title) title.textContent = game.title;
    if (cinema) cinema.classList.add('active');
    if (loadingBar) loadingBar.style.display = 'block';

    // If local game path exists, load directly
    if (game.path) {
      if (iframe) iframe.src = game.path;
      if (loadingBar) loadingBar.style.display = 'none';
      return;
    }

    // Dynamic Raw-Code Fetcher with Blob URL instantiation
    fetchGameRawCode(game)
      .then(htmlContent => {
        if (currentBlobUrl) {
          URL.revokeObjectURL(currentBlobUrl);
          currentBlobUrl = null;
        }

        const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
        currentBlobUrl = URL.createObjectURL(blob);

        if (iframe) {
          iframe.src = currentBlobUrl;
          iframe.focus();
        }
      })
      .catch(err => {
        console.error('Failed to load raw game code:', err);
        // Fallback to CDN URL if fetch fails
        if (iframe && game.url) iframe.src = game.url;
      })
      .finally(() => {
        if (loadingBar) loadingBar.style.display = 'none';
      });
  };

  async function fetchGameRawCode(game) {
    const urlsToTry = [
      game.rawUrl,
      game.url,
      `${BUBBLS_RAW_BASE}${game.file}`,
      `${BUBBLS_CDN_BASE}${game.file}`
    ].filter(Boolean);

    for (const u of urlsToTry) {
      try {
        const res = await fetch(u);
        if (res.ok) {
          return await res.text();
        }
      } catch (e) {}
    }
    throw new Error('Unable to retrieve game raw code from online repositories.');
  }

  window.closeGame = function () {
    const cinema = document.getElementById('game-cinema-layer');
    const iframe = document.getElementById('cinema-iframe');
    if (cinema) cinema.classList.remove('active');
    if (iframe) iframe.src = 'about:blank';
    if (currentBlobUrl) {
      URL.revokeObjectURL(currentBlobUrl);
      currentBlobUrl = null;
    }
  };

  window.downloadGameHtml = async function (gameId) {
    const game = allGames.find(g => g.id === gameId);
    if (!game) return;

    try {
      let content = '';
      if (game.path) {
        const res = await fetch(game.path);
        content = await res.text();
      } else {
        content = await fetchGameRawCode(game);
      }

      const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${game.file || game.id + '.html'}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert('Could not download HTML file.');
    }
  };

  /* ==========================================================================
     13. NAVIGATION TABS & CAROUSEL RENDERING
     ========================================================================== */
  window.switchTab = function (tabName) {
    activeTab = tabName;
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) targetView.classList.add('active');

    document.querySelectorAll('.dock-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Scroll to top
    const viewContainer = document.getElementById('view-container');
    if (viewContainer) viewContainer.scrollTop = 0;

    if (tabName === 'lib') {
      renderLibraryGames();
    }
  };

  function renderCarousels() {
    renderFeed('feed-arcade', allGames.filter(g => g.category === 'Arcade' || g.category === 'Puzzle').slice(0, 10));
    renderFeed('feed-sports', allGames.filter(g => g.category === 'Sports').concat(allGames.slice(0, 4)).slice(0, 10));
    renderFeed('feed-action', allGames.filter(g => g.category === 'Action' || g.category === 'Retro').slice(0, 10));
  }

  function renderFeed(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    list.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.onclick = () => window.openModal(game.id);

      card.innerHTML = `
        <div class="card-thumb-wrap">
          <img class="card-thumb" src="${game.banner}" alt="${game.title}" loading="lazy" />
        </div>
        <div class="card-title">${game.title}</div>
        <div class="card-meta-row">
          <span class="card-category">${game.category}</span>
          <span class="card-rating">★ ${game.rating || '4.9'}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderLibraryGames() {
    const grid = document.getElementById('library-games-grid');
    if (!grid) return;

    let filtered = allGames;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(g => g.category === activeCategory);
    }
    if (activeSearch.trim()) {
      const q = activeSearch.toLowerCase();
      filtered = filtered.filter(g =>
        g.title.toLowerCase().includes(q) ||
        (g.desc && g.desc.toLowerCase().includes(q))
      );
    }

    const toShow = filtered.slice(0, displayCount);
    grid.innerHTML = '';

    toShow.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.onclick = () => window.openModal(game.id);

      card.innerHTML = `
        <div class="card-thumb-wrap">
          <img class="card-thumb" src="${game.banner}" alt="${game.title}" loading="lazy" />
        </div>
        <div class="card-title">${game.title}</div>
        <div class="card-meta-row">
          <span class="card-category">${game.category}</span>
          <span class="card-rating">★ ${game.rating || '4.9'}</span>
        </div>
      `;
      grid.appendChild(card);
    });

    const loadMoreBtn = document.getElementById('load-more-wrap');
    if (loadMoreBtn) {
      loadMoreBtn.style.display = toShow.length < filtered.length ? 'block' : 'none';
    }
  }

  window.setCategoryFilter = function (cat) {
    activeCategory = cat;
    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === cat);
    });
    renderLibraryGames();
  };

  window.onSearchInput = function (query) {
    activeSearch = query;
    renderLibraryGames();
  };

  window.loadMoreGames = function () {
    displayCount += 36;
    renderLibraryGames();
  };

  // Wire Spotlight Play/Info Buttons
  function initSpotlightButtons() {
    const playBtn = document.getElementById('spotlight-play-btn');
    if (playBtn) playBtn.onclick = () => window.launchGame('cl10minutestildawn');

    const infoBtn = document.getElementById('spotlight-info-btn');
    if (infoBtn) infoBtn.onclick = () => window.openModal('cl10minutestildawn');

    const reloadBtn = document.getElementById('hud-reload-btn');
    if (reloadBtn) reloadBtn.onclick = () => {
      if (activeGame) window.launchGame(activeGame.id);
    };

    const fsBtn = document.getElementById('hud-fs-btn');
    if (fsBtn) fsBtn.onclick = () => {
      const cinema = document.getElementById('game-cinema-layer');
      if (!document.fullscreenElement) {
        cinema && cinema.requestFullscreen && cinema.requestFullscreen();
      } else {
        document.exitFullscreen && document.exitFullscreen();
      }
    };
  }

  // Load Extra Catalog if available
  async function loadExtendedCatalog() {
    try {
      const res = await fetch('./games.json');
      if (res.ok) {
        const gamesList = await res.json();
        if (Array.isArray(gamesList) && gamesList.length) {
          allGames = [...INITIAL_GAMES, ...gamesList];
          const countMeta = document.getElementById('catalog-count-meta');
          if (countMeta) countMeta.textContent = `${allGames.length.toLocaleString()}+ Titles`;
          renderCarousels();
          if (activeTab === 'lib') renderLibraryGames();
        }
      }
    } catch (e) {}
  }

  /* ==========================================================================
     14. MASTER INITIALIZATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    loadThemeConfig();
    renderCarousels();
    initSpotlightButtons();
    initFirebase();
    loadExtendedCatalog();
  });

})(window, document);
