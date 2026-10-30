(() => {
  "use strict";

  // ---------- Textos em inglês (o português está no próprio HTML) ----------
  const EN = {
    "skip": "Skip to content",
    "nav.story": "The story",
    "nav.sources": "How it works",
    "nav.overlays": "Overlays",
    "nav.audience": "Who it's for",
    "nav.download": "Download",

    "hero.eyebrow": "Free · Desktop · v1.0.1",
    "hero.title": "Your video shows the scenery. <em>Now it shows the effort.</em>",
    "hero.lead": "HUD Telemetry takes the GPS data from your activity — from Strava, a GPX file or the GoPro itself — and draws speed, altitude, grade and route on top of your video, frame by frame, in sync with what the camera recorded.",
    "hero.cta": "Download for free",
    "hero.github": "View on GitHub",
    "hero.s1": "overlay styles",
    "hero.s2": "data sources",
    "hero.s3": "systems: Linux, Windows and macOS",
    "hero.caption": "“Arcs” style rendered by the app",
    "metric.speed": "Speed",
    "metric.altitude": "Altitude",

    "story.kicker": "01 — The pain",
    "story.title": "The camera's GPS failed. <em>The data didn't.</em>",
    "story.p1": "I film my rides with a GoPro HERO7 Black. The image is excellent, and the camera has its own GPS to record telemetry. The problem is that this GPS fails often.",
    "story.p2": "Sometimes QuikCapture starts recording before the camera finds a signal. Sometimes the signal is blocked by buildings, trees or heavy clouds. Even the camera's position gets in the way: on a chest mount it sits upside down, and that is often enough to lose the connection.",
    "story.p3": "The frustration came later. I'd get home dying to watch the video with my speed on screen, open GoPro Quik to add the telemetry stickers, and the app couldn't find any GPS data. The stickers were marked “GPS Only”, useless.",
    "story.p4": "But the data existed. It was on Strava and on my Garmin, which had recorded the whole ride. All that was missing was a tool to bring that data into the video. That's how HUD Telemetry was born: telemetry comes from Strava, or from a GPX file exported from Garmin for those who don't use Strava.",
    "story.quote": "“I'd get home dying to see my speed on the video, and the app said there was no GPS. The data was on my Garmin. I just had to bring the two together.”",
    "story.role": "creator of HUD Telemetry",
    "story.before": "Before",
    "story.b1": "Camera GPS with no or unstable signal",
    "story.b2": "Quik without telemetry stickers (“GPS Only”)",
    "story.b3": "Video with no speed, altitude or route",
    "story.after": "With HUD Telemetry",
    "story.a1": "Telemetry from Strava or a Garmin GPX",
    "story.a2": "Overlay even when the camera's GPS failed",
    "story.a3": "Final video ready to publish",

    "src.kicker": "02 — What feeds it",
    "src.title": "Three data sources. One synced video.",
    "src.lead": "The app takes telemetry from wherever it lives. From there, the path is the same: sync, draw and encode.",
    "src.strava": "Connect your account and pick an activity from the list. The app downloads the time, position, speed and altitude streams in high resolution.",
    "src.gpxT": "GPX file",
    "src.gpx": "Exported from Garmin, Wahoo or another app? Import the GPX file and use the route without relying on Strava.",
    "src.goproT": "GoPro telemetry",
    "src.gopro": "GoPro cameras with GPS record telemetry inside the MP4 itself. The app detects and extracts that data from the video: you don't need any other file.",
    "pipe.1t": "Connect",
    "pipe.1": "Pick the activity on Strava, import a GPX or open the GoPro video.",
    "pipe.2t": "Sync",
    "pipe.2": "The app uses the video's creation time. For fine-tuning, click the map where the recording started.",
    "pipe.3t": "Customize",
    "pipe.3": "Choose style, position, scale and opacity, and check the result in the preview.",
    "pipe.4t": "Render",
    "pipe.4": "FFmpeg encodes the final video using your graphics card when available: NVIDIA, Intel, AMD or Apple.",

    "ov.kicker": "03 — Overlays",
    "ov.title": "Seven styles. One for every kind of video.",
    "ov.lead": "From the classic speedometer to the augmented-reality panel that fills the whole screen. All with labels in Portuguese or English.",
    "ov.n.holo": "Holographic",
    "ov.n.min": "Minimalist",
    "ov.n.def": "Classic",
    "ov.mapT": "Route map",
    "ov.map": "A mini map with the full route and your current position, which can be combined with any style.",
    "ov.posT": "Position, scale and opacity",
    "ov.pos": "Place the overlay in any corner, resize it and adjust transparency so it doesn't hide the scenery.",
    "ov.editT": "Trim and rotate",
    "ov.edit": "Cut the start and end of the video and fix its orientation inside the app, before rendering.",

    "aud.kicker": "04 — Who it's for",
    "aud.title": "Made for people who film on the move.",
    "aud.1t": "Road and MTB cyclists",
    "aud.1": "Show your speed on the descent, the grade of the climb and where each stretch happened.",
    "aud.2t": "Motorcyclists and other sports",
    "aud.2": "Motorcycle, car, trail, skiing: if there's GPS and a camera, you can put the telemetry on the video.",
    "aud.3t": "Content creators",
    "aud.3": "Videos with data hold attention longer on YouTube and Instagram. Generate the overlay without a professional editor.",

    "ft.1t": "Free",
    "ft.1": "No subscription or paid plan: download the installer and use it.",
    "ft.2t": "Your data stays with you",
    "ft.2": "The video is processed on your computer. Credentials are saved only on your machine.",
    "ft.3t": "Hardware acceleration",
    "ft.3": "NVENC, Quick Sync, AMF and VideoToolbox, with fast, balanced and quality profiles.",
    "ft.4t": "Multilingual",
    "ft.4": "Interface in Portuguese, English, Spanish, French, German and Chinese. Overlay labels in Portuguese or English.",

    "dl.kicker": "05 — Download",
    "dl.title": "Ready to put data on your next video?",
    "dl.lead": "Download the latest version for your system.",
    "dl.reqT": "Before you start",
    "dl.r1": "<b>FFmpeg</b> installed on your system (the .deb and .rpm packages take care of it).",
    "dl.r2": "To use Strava: a <b>Client ID and Client Secret</b>, created for free at strava.com/settings/api. The app asks for them the first time it opens.",
    "dl.guide": "Full installation guide →",

    "foot.by": "Created by Paulo Roberto Torres",
    "foot.note": "Independent project, not affiliated with Strava, Inc. or GoPro, Inc."
  };

  // ---------- Estilos de overlay ----------
  // full: imagem ocupa o quadro 16:9 inteiro; widget: imagem centralizada.
  const STYLES = {
    arcs: {
      name: { pt: "Arcs", en: "Arcs" },
      img: "arcs.png", mode: "full",
      desc: {
        pt: "Medidores em arco nas laterais da tela, como o painel de um capacete inteligente. Mantém o centro do vídeo livre para a estrada.",
        en: "Arc gauges on the sides of the screen, like a smart-helmet display. Keeps the center of the video clear for the road."
      },
      tags: { pt: ["Velocidade", "Inclinação", "Rampa %", "Elevação", "Força G", "Distância"], en: ["Speed", "Inclination", "Grade %", "Elevation", "G-force", "Distance"] }
    },
    fullface: {
      name: { pt: "Fullface", en: "Fullface" },
      img: "fullface.png", mode: "full",
      desc: {
        pt: "Um HUD de tela inteira inspirado em viseira de capacete, com perfil de elevação, minimapa e cronômetro da gravação.",
        en: "A full-screen HUD inspired by a helmet visor, with elevation profile, mini map and recording timer."
      },
      tags: { pt: ["Velocidade", "Altitude", "Rampa %", "Força G", "Perfil de elevação", "Percurso"], en: ["Speed", "Altitude", "Grade %", "G-force", "Elevation profile", "Route"] }
    },
    holographic: {
      name: { pt: "Holográfico", en: "Holographic" },
      img: "holographic.png", mode: "widget",
      desc: {
        pt: "Um painel translúcido em perspectiva 3D, como se flutuasse à frente da câmera.",
        en: "A translucent panel in 3D perspective, as if floating in front of the camera."
      },
      tags: { pt: ["Velocidade", "Força G", "Perspectiva 3D"], en: ["Speed", "G-force", "3D perspective"] }
    },
    hud: {
      name: { pt: "HUD", en: "HUD" },
      img: "hud.png", mode: "widget",
      desc: {
        pt: "O painel de um superesportivo: velocímetro central com ponteiro, mostradores auxiliares e altitude.",
        en: "A supercar dashboard: central speedometer with needle, auxiliary dials and altitude."
      },
      tags: { pt: ["Velocidade", "Rumo", "Altitude"], en: ["Speed", "Heading", "Altitude"] }
    },
    cyberpunk: {
      name: { pt: "Cyberpunk", en: "Cyberpunk" },
      img: "cyberpunk.png", mode: "widget",
      desc: {
        pt: "Neon, cortes angulares e barras segmentadas. Visual agressivo para descidas e vídeos noturnos.",
        en: "Neon, angular cuts and segmented bars. An aggressive look for descents and night videos."
      },
      tags: { pt: ["Velocidade", "Rumo", "Altitude"], en: ["Speed", "Heading", "Altitude"] }
    },
    minimalist: {
      name: { pt: "Minimalista", en: "Minimalist" },
      img: "minimalist.png", mode: "widget",
      desc: {
        pt: "Um cartão de vidro fosco, discreto, para quando a paisagem é a atração principal.",
        en: "A discreet frosted-glass card, for when the scenery is the main attraction."
      },
      tags: { pt: ["Velocidade", "Barras de progresso"], en: ["Speed", "Progress bars"] }
    },
    default: {
      name: { pt: "Clássico", en: "Classic" },
      img: "default.png", mode: "widget",
      desc: {
        pt: "O velocímetro analógico original, com bússola integrada e um painel lateral de dados.",
        en: "The original analog speedometer, with built-in compass and a side data panel."
      },
      tags: { pt: ["Velocidade", "Bússola", "Força G", "Altitude"], en: ["Speed", "Compass", "G-force", "Altitude"] }
    }
  };
  const ORDER = Object.keys(STYLES);

  // ---------- i18n ----------
  const nodes = document.querySelectorAll("[data-i18n]");
  const PT = {};
  nodes.forEach((el) => { PT[el.dataset.i18n] = el.innerHTML; });

  let lang = "pt";
  let current = "arcs";

  function setLang(next) {
    lang = next;
    const dict = lang === "en" ? EN : PT;
    nodes.forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.querySelectorAll(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("so-lang", lang); } catch (_) { /* modo privado */ }
    renderStyle(current, false);
  }

  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  // ---------- Galeria ----------
  const img = document.getElementById("ovImg");
  const nameEl = document.getElementById("ovName");
  const descEl = document.getElementById("ovDesc");
  const tagsEl = document.getElementById("ovTags");
  const countEl = document.getElementById("ovCount");
  const tabs = document.querySelectorAll(".gallery__tabs [role=tab]");

  function renderStyle(key, animate = true) {
    current = key;
    const s = STYLES[key];
    const apply = () => {
      img.src = "assets/overlays/" + s.img;
      img.alt = s.name[lang] + " — " + s.desc[lang];
      img.className = s.mode === "full" ? "is-full" : "is-widget";
    };
    if (animate) {
      img.classList.add("is-fading");
      setTimeout(apply, 180);
    } else {
      apply();
    }
    nameEl.textContent = s.name[lang];
    descEl.textContent = s.desc[lang];
    tagsEl.innerHTML = s.tags[lang].map((t) => "<li>" + t + "</li>").join("");
    countEl.textContent = String(ORDER.indexOf(key) + 1).padStart(2, "0") + " / " + String(ORDER.length).padStart(2, "0");
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.style === key)));
  }

  tabs.forEach((t) => t.addEventListener("click", () => renderStyle(t.dataset.style)));

  // Setas do teclado navegam entre as abas
  document.querySelector(".gallery__tabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = ORDER.indexOf(current);
    const next = ORDER[(i + (e.key === "ArrowRight" ? 1 : ORDER.length - 1)) % ORDER.length];
    renderStyle(next);
    document.querySelector('[data-style="' + next + '"]').focus();
  });

  // Pré-carrega as imagens da galeria
  ORDER.forEach((k) => { const i = new Image(); i.src = "assets/overlays/" + STYLES[k].img; });

  // ---------- Telemetria "ao vivo" no hero ----------
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const speedEl = document.getElementById("liveSpeed");
  const altEl = document.getElementById("liveAlt");
  const clockEl = document.getElementById("clock");
  let t = 0;
  let secs = 144;
  if (!reduce) {
    setInterval(() => {
      t += 0.12;
      const speed = 33 + Math.sin(t) * 6 + Math.sin(t * 2.7) * 1.5;
      const alt = 230 + Math.sin(t * 0.35) * 18;
      const fmt = lang === "en" ? speed.toFixed(1) : speed.toFixed(1).replace(".", ",");
      speedEl.textContent = fmt;
      altEl.textContent = Math.round(alt);
    }, 120);
    setInterval(() => {
      secs += 1;
      const h = String(Math.floor(secs / 3600)).padStart(2, "0");
      const m = String(Math.floor(secs / 60) % 60).padStart(2, "0");
      const s = String(secs % 60).padStart(2, "0");
      clockEl.textContent = h + ":" + m + ":" + s;
    }, 1000);
  }

  // ---------- Revelar ao rolar ----------
  const revealTargets = document.querySelectorAll(".section h2, .section__lead, .card, .pipeline li, .feature, .platform, .compare__col, .story__body, .gallery");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealTargets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }

  // ---------- Idioma inicial ----------
  let saved = null;
  try { saved = localStorage.getItem("so-lang"); } catch (_) { /* ignora */ }
  const initial = saved || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en");
  setLang(initial);
})();
