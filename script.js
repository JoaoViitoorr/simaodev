/* ============================================================
   ÓRBITA SVG — pontos orbitando + interatividade forte com mouse
   ============================================================ */

const svg = document.getElementById('orbit');
const particles = document.querySelectorAll('.particle');
const connectionsGroup = document.getElementById('connections');

// Centro do SVG (viewBox 500x500)
const CENTER = { x: 250, y: 250 };

// Configuração de cada partícula: raio X, raio Y, velocidade, offset inicial
const particleConfigs = [
  { rx: 200, ry: 140, speed: 0.008, offset: 0 },
  { rx: 170, ry: 200, speed: -0.012, offset: Math.PI / 2 },
  { rx: 220, ry: 100, speed: 0.010, offset: Math.PI },
  { rx: 150, ry: 180, speed: -0.006, offset: Math.PI * 1.5 }
];

// Estado do mouse (normalizado dentro do SVG)
let mouse = { x: CENTER.x, y: CENTER.y, active: false };
let time = 0;

/**
 * Converte coordenadas do mouse (tela) pra coordenadas do SVG (viewBox)
 */
function updateMouseFromEvent(e) {
  const rect = svg.getBoundingClientRect();
  const scaleX = 500 / rect.width;
  const scaleY = 500 / rect.height;
  mouse.x = (e.clientX - rect.left) * scaleX;
  mouse.y = (e.clientY - rect.top) * scaleY;
  mouse.active = true;
}

svg.addEventListener('mousemove', updateMouseFromEvent);
svg.addEventListener('mouseleave', () => { mouse.active = false; });

/**
 * Loop principal: atualiza posição das partículas e linhas
 */
function animate() {
  time += 1;
  const positions = [];

  particles.forEach((particle, i) => {
    const cfg = particleConfigs[i];

    // Posição base na órbita (elipse paramétrica)
    let angle = time * cfg.speed + cfg.offset;
    let baseX = CENTER.x + Math.cos(angle) * cfg.rx;
    let baseY = CENTER.y + Math.sin(angle) * cfg.ry;

    // Interatividade forte: partícula FOGE do mouse quando perto
    if (mouse.active) {
      const dx = baseX - mouse.x;
      const dy = baseY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 100;

      if (dist < repelRadius) {
        // Força de repulsão inversamente proporcional à distância
        const force = (repelRadius - dist) / repelRadius;
        baseX += (dx / dist) * force * 40;
        baseY += (dy / dist) * force * 40;

        // Muda cor pra creme quando repelida (feedback visual)
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

  // Desenha linhas entre partículas próximas
  drawConnections(positions);

  requestAnimationFrame(animate);
}

/**
 * Desenha linhas entre partículas próximas + do mouse pra partículas
 */
function drawConnections(positions) {
  connectionsGroup.innerHTML = '';

  // Linhas entre partículas próximas entre si
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

  // Linhas do mouse pras partículas próximas (quando mouse tá ativo)
  if (mouse.active) {
    positions.forEach(pos => {
      const dx = pos.x - mouse.x;
      const dy = pos.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150;

      if (dist < maxDist) {
        const opacity = 0.5 * (1 - dist / maxDist);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', pos.x);
        line.setAttribute('y1', pos.y);
        line.setAttribute('x2', mouse.x);
        line.setAttribute('y2', mouse.y);
        line.setAttribute('stroke', 'var(--cream)');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('opacity', opacity);
        connectionsGroup.appendChild(line);
      }
    });
  }
}

// Inicia
animate();