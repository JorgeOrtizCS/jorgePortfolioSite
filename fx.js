/* ── SHARED CANVAS FX for the ctOS/DedSec dossier ── */
(function () {
  const DPR = () => Math.min(window.devicePixelRatio || 1, 2);

  /* CYBER SNOW - drifting dots that link to nearby dots + the cursor */
  function cyberSnow(canvas) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dots = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK = 132, MLINK = 170;

    function resize() {
      const r = DPR();
      W = canvas.clientWidth = window.innerWidth;
      H = canvas.clientHeight = window.innerHeight;
      canvas.width = W * r; canvas.height = H * r;
      ctx.setTransform(r, 0, 0, r, 0, 0);
      const count = Math.min(120, Math.floor((W * H) / 13000));
      dots = [];
      for (let i = 0; i < count; i++) dots.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28 });
    }

    function frame() {
      if (!W || !H) { requestAnimationFrame(frame); return; }
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
      }
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.x - b.x, dy = a.y - b.y, dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const mdx = a.x - mouse.x, mdy = a.y - mouse.y, md = Math.hypot(mdx, mdy);
        if (md < MLINK) {
          ctx.strokeStyle = `rgba(255,43,43,${0.5 * (1 - md / MLINK)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = md < MLINK ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.4)';
        ctx.fillRect(a.x - 0.8, a.y - 0.8, 1.6, 1.6);
      }
      requestAnimationFrame(frame);
    }
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseout', () => { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', resize);
    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
    requestAnimationFrame(() => { resize(); frame(); });
  }

  /* FIELD MAP - US view that zooms into South Florida, plotting real work sites */
  function fieldMap(canvas) {
    const ctx = canvas.getContext('2d');
    const nodes = [
      { lat: 26.371, lng: -80.102, k: '_FAU', s: 'BOCA RATON · CS 2027' },
      { lat: 26.271, lng: -80.271, k: '_SKYTEK', s: 'CORAL SPRINGS · CYBERSEC INTERN 2026' },
      { lat: 26.318, lng: -80.100, k: '_RCC', s: 'DEERFIELD BEACH · IT SYS ANALYST 2025' },
      { lat: 26.238, lng: -80.125, k: '_BANYAN', s: 'POMPANO BEACH · HELP DESK 2022–25' },
      { lat: 26.252, lng: -80.179, k: '_BROWARD COLLEGE', s: 'COCONUT CREEK · AA CS 2024' },
      { lat: 26.122, lng: -80.137, k: '_BCPS', s: 'FT LAUDERDALE · IT INTERN 2019' },
    ];
    const hub = { lat: 26.262, lng: -80.14 };
    const US = { latMin: 24.4, latMax: 49.4, lngMin: -125, lngMax: -66.9 };
    const SF = { latMin: 26.02, latMax: 26.46, lngMin: -80.42, lngMax: -79.96 };
    const decoys = [];
    for (let i = 0; i < 210; i++) decoys.push({ lat: US.latMin + Math.random() * (US.latMax - US.latMin), lng: US.lngMin + Math.random() * (US.lngMax - US.lngMin) });
    const ambient = [];
    for (let i = 0; i < 60; i++) ambient.push({ lat: SF.latMin + Math.random() * (SF.latMax - SF.latMin), lng: SF.lngMin + Math.random() * (SF.lngMax - SF.lngMin) });

    let W = 0, H = 0, p = 0, started = false, t0 = 0;
    const mouse = { x: -9999, y: -9999 };
    const ease = (x) => 1 - Math.pow(1 - x, 3);
    const lerp = (a, b, u) => a + (b - a) * u;
    const view = () => ({ latMin: lerp(US.latMin, SF.latMin, ease(p)), latMax: lerp(US.latMax, SF.latMax, ease(p)), lngMin: lerp(US.lngMin, SF.lngMin, ease(p)), lngMax: lerp(US.lngMax, SF.lngMax, ease(p)) });
    const proj = (lat, lng, v) => [(lng - v.lngMin) / (v.lngMax - v.lngMin) * W, (v.latMax - lat) / (v.latMax - v.latMin) * H];

    function resize() {
      const r = DPR();
      W = canvas.clientWidth = canvas.parentElement.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * r; canvas.height = H * r;
      ctx.setTransform(r, 0, 0, r, 0, 0);
    }

    function frame(now) {
      if (!W || !H) { requestAnimationFrame(frame); return; }
      if (started && p < 1) { if (!t0) t0 = now; p = Math.min(1, (now - t0) / 2600); }
      const v = view();
      ctx.clearRect(0, 0, W, H);
      // grid
      ctx.strokeStyle = 'rgba(255,255,255,.05)'; ctx.lineWidth = 1;
      for (let gx = 0; gx <= W; gx += 46) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke(); }
      for (let gy = 0; gy <= H; gy += 46) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }
      // decoys + ambient
      ctx.fillStyle = 'rgba(255,255,255,.28)';
      for (const d of decoys) { const [x, y] = proj(d.lat, d.lng, v); if (x > -5 && x < W + 5 && y > -5 && y < H + 5) ctx.fillRect(x, y, 1.4, 1.4); }
      ctx.fillStyle = `rgba(255,255,255,${0.15 + 0.35 * p})`;
      for (const d of ambient) { const [x, y] = proj(d.lat, d.lng, v); if (x > -5 && x < W + 5 && y > -5 && y < H + 5) ctx.fillRect(x, y, 1.5, 1.5); }
      // hub + connecting lines
      const [hx, hy] = proj(hub.lat, hub.lng, v);
      const lineA = Math.max(0, (p - 0.72) / 0.28);
      const labA = Math.max(0, (p - 0.5) / 0.35);
      if (lineA > 0) {
        ctx.strokeStyle = `rgba(255,255,255,${0.22 * lineA})`;
        for (const n of nodes) { const [nx, ny] = proj(n.lat, n.lng, v); ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(nx, ny); ctx.stroke(); }
      }
      const pulse = 3 + Math.sin(now / 400) * 1.6;
      let hovered = -1, best = 16;
      nodes.forEach((n, i) => { const [nx, ny] = proj(n.lat, n.lng, v); const d = Math.hypot(nx - mouse.x, ny - mouse.y); if (d < best) { best = d; hovered = i; } });
      nodes.forEach((n, i) => {
        const [nx, ny] = proj(n.lat, n.lng, v);
        const on = i === hovered;
        ctx.strokeStyle = `rgba(255,43,43,${(on ? 0.9 : 0.55) * (labA || (p >= 1 ? 1 : 0))})`;
        ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(nx, ny, pulse + (on ? 4 : 0), 0, 7); ctx.stroke();
        ctx.fillStyle = `rgba(255,43,43,${labA || (p >= 1 ? 1 : 0)})`; ctx.fillRect(nx - 1.6, ny - 1.6, 3.2, 3.2);
        if (labA > 0) {
          ctx.font = '10px "Share Tech Mono", monospace';
          ctx.fillStyle = `rgba(233,233,233,${on ? 1 : labA})`;
          ctx.fillText(n.k, nx + 8, ny - 3);
          if (on) { ctx.fillStyle = 'rgba(140,140,140,1)'; ctx.fillText(n.s, nx + 8, ny + 10); }
        }
      });
      // hub label
      if (labA > 0) {
        ctx.strokeStyle = `rgba(255,255,255,${labA})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(hx, hy, 6, 0, 7); ctx.stroke();
        ctx.font = '10px "Share Tech Mono", monospace';
        ctx.fillStyle = `rgba(255,255,255,${labA})`;
        ctx.fillText('_JORGE // SOUTH FL', hx + 10, hy + 3);
      }
      // scan sweep
      const sx = ((now / 22) % (W + 120)) - 60;
      const g = ctx.createLinearGradient(sx - 40, 0, sx + 40, 0);
      g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,.05)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g; ctx.fillRect(sx - 40, 0, 80, H);
      requestAnimationFrame(frame);
    }
    canvas.addEventListener('mousemove', (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', resize);
    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas.parentElement);
    const io = new IntersectionObserver((ents) => { ents.forEach((en) => { if (en.isIntersecting) started = true; }); }, { threshold: 0.3 });
    io.observe(canvas);
    requestAnimationFrame(() => { resize(); requestAnimationFrame(frame); });
  }

  window.FX = { cyberSnow, fieldMap };
})();
