/* ============================================================
   SIMÃO DEV — script.js
   Índice:
     1. Órbita SVG (Bloco 3)
     2. Cursor customizado dot+ring (Bloco 6)
     3. Constellation de fundo (Bloco 6)
     4. Header ganha borda ao rolar (Bloco 6)
     5. Easter egg no console (Bloco 6)
   ============================================================ */


/* ------------------------------------------------------------
   1. ÓRBITA SVG — pontos orbitando + interatividade com mouse
   ------------------------------------------------------------ */

const svg = document.getElementById('orbit');
const particles = document.querySelectorAll('.particle');
const connectionsGroup = document.getElementById('connections');

const CENTER = { x: 250, y: 250 };

const particleConfigs = [
  { rx: 200, ry: 140, speed: 0.008, offset: 0 },
  { rx: 170, ry: 200, speed: -0.012, offset: Math.PI / 2 },
  { rx: 220, ry: 100, speed: 0.010, offset: Math.PI },
  { rx: 150, ry: 180, speed: -0.006, offset: Math.PI * 1.5 }
];

let orbitMouse = { x: CENTER.x, y: CENTER.y, active: false };
let time = 0;

function updateOrbitMouseFromEvent(e) {
  const rect = svg.getBoundingClientRect();
  const scaleX = 500 / rect.width;
  const scaleY = 500 / rect.height;
  orbitMouse.x = (e.clientX - rect.left) * scaleX;
  orbitMouse.y = (e.clientY - rect.top) * scaleY;
  orbitMouse.active = true;
}

svg.addEventListener('mousemove', updateOrbitMouseFromEvent);
svg.addEventListener('mouseleave', () => { orbitMouse.active = false; });

function animateOrbit() {
  time += 1;
  const positions = [];

  particles.forEach((particle, i) => {
    const cfg = particleConfigs[i];
    let angle = time * cfg.speed + cfg.offset;
    let baseX = CENTER.x + Math.cos(angle) * cfg.rx;
    let baseY = CENTER.y + Math.sin(angle) * cfg.ry;

    if (orbitMouse.active) {
      const dx = baseX - orbitMouse.x;
      const dy = baseY - orbitMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 100;

      if (dist < repelRadius) {
        const force = (repelRadius - dist) / repelRadius;
        baseX += (dx / dist) * force * 40;
        baseY += (dy / dist) * force * 40;
        particle.style.fill = 'var(--cream)';
      } else {
        particle.style.fill = '';
      }
    } else {
      particle.style.fill = '';
    }

    particle.setAttribute('cx', baseX);
    particle.setAttribute('cy', baseY);
    positions.push({ x: baseX, y: baseY });
  });

  drawOrbitConnections(positions);
  requestAnimationFrame(animateOrbit);
}

function drawOrbitConnections(positions) {
  connectionsGroup.innerHTML = '';

  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const dx = positions[i].x - positions[j].x;
      const dy = positions[i].y - positions[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 180;

      if (dist < maxDist) {
        const opacity = 0.25 * (1 - dist / maxDist);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', positions[i].x);
        line.setAttribute('y1', positions[i].y);
        line.setAttribute('x2', positions[j].x);
        line.setAttribute('y2', positions[j].y);
        line.setAttribute('stroke', 'var(--amber)');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('opacity', opacity);
        connectionsGroup.appendChild(line);
      }
    }
  }

  if (orbitMouse.active) {
    positions.forEach(pos => {
      const dx = pos.x - orbitMouse.x;
      const dy = pos.y - orbitMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150;

      if (dist < maxDist) {
        const opacity = 0.5 * (1 - dist / maxDist);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', pos.x);
        line.setAttribute('y1', pos.y);
        line.setAttribute('x2', orbitMouse.x);
        line.setAttribute('y2', orbitMouse.y);
        line.setAttribute('stroke', 'var(--cream)');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('opacity', opacity);
        connectionsGroup.appendChild(line);
      }
    });
  }
}

animateOrbit();


/* ------------------------------------------------------------
   2. CURSOR CUSTOMIZADO (dot instantâneo + ring elástico)
   Só ativa em desktop com mouse fino
   ------------------------------------------------------------ */

(function initCursor() {
  // Guard: só roda em dispositivo com hover + pointer fine
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot: segue INSTANTANEAMENTE — CSS não tem transition no transform
    dot.style.transform =
      `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

    dot.classList.add('active');
    ring.classList.add('active');
  });

  // Ring: lerp — interpolação linear a cada frame cria "elasticidade"
  function animateRing() {
    ringX += (mouseX - ringX) * 0.25;
    ringY += (mouseY - ringY) * 0.25;
    ring.style.transform =
      `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Ring cresce ao passar em elementos interativos
  const interactive = document.querySelectorAll(
    'a, button, summary, .work, .format, .step'
  );
  interactive.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });

  // Some quando o mouse sai da janela (ex: alt+tab, hover na aba)
  document.addEventListener('mouseleave', () => {
    dot.classList.remove('active');
    ring.classList.remove('active');
  });
  document.addEventListener('mouseenter', () => {
    dot.classList.add('active');
    ring.classList.add('active');
  });
})();


/* ------------------------------------------------------------
   3. CONSTELLATION — pontos âmbar no fundo com linhas dinâmicas
   ------------------------------------------------------------ */

(function initConstellation() {
  const canvas = document.getElementById('constellation');
  if (!canvas) return;

  // Respeita reduced-motion — não roda a animação
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  const POINT_COUNT = 40;
  const MAX_CONNECT_DIST = 140;
  const points = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Semeia pontos com velocidade MUITO baixa (movimento sutil)
  for (let i = 0; i < POINT_COUNT; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15
    });
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);

    // Atualiza posição + rebate nas bordas
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }

    // Desenha linhas entre pares próximos (O(n²), mas com n=40 é 780 pares — ok)
    ctx.strokeStyle = 'rgba(245, 165, 36, 1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_CONNECT_DIST) {
          // Quanto mais perto, mais opaca
          ctx.globalAlpha = 0.25 * (1 - dist / MAX_CONNECT_DIST);
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    // Desenha pontos
    ctx.fillStyle = 'rgba(245, 165, 36, 0.6)';
    for (const p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }
  tick();
})();


/* ------------------------------------------------------------
   4. HEADER GANHA BORDA AO ROLAR
   ------------------------------------------------------------ */

(function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // { passive: true } — libera scroll pra thread principal, ganho de perf
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // roda uma vez pra pegar caso página já esteja rolada
})();


/* ------------------------------------------------------------
   5. EASTER EGG — pra dev que abrir DevTools
   ------------------------------------------------------------ */

(function easterEgg() {
  const styles = {
    prompt: 'color: #7FB86D; font-family: monospace; font-size: 12px;',
    text:   'color: #F4E9D8; font-family: monospace; font-size: 12px;',
    amber:  'color: #F5A524; font-family: monospace; font-size: 12px; font-style: italic;'
  };

  console.log(
    '%c$ whoami\n' +
    '%cJoão Vitor Simão\n' +
    'analista de TI em cartório · dev em construção\n' +
    'Araguari, MG\n\n' +
    '%c$ cat contato.txt\n' +
    '%cWhatsApp: +55 34 99287-4475\n' +
    'contato@simaodev.com.br\n\n' +
    '%c$ echo "se você fuça DevTools, provavelmente também escreve código"\n' +
    '%coi.',
    styles.prompt, styles.text,
    styles.prompt, styles.text,
    styles.prompt, styles.amber
  );
})();