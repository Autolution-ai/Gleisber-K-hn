// Sticky-Header Shadow on scroll
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

// Reveal-on-scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// Fallback: stelle sicher, dass keine Sektion dauerhaft unsichtbar bleibt
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1200);
});

// Before/After Slider (drag + click)
document.querySelectorAll('.ba').forEach(ba => {
  const after = ba.querySelector('.after');
  const handle = ba.querySelector('.handle');
  const knob = ba.querySelector('.knob');
  if (!after || !handle || !knob) return;

  let dragging = false;
  const setPos = (px) => {
    const rect = ba.getBoundingClientRect();
    const clamped = Math.max(0, Math.min(rect.width, px - rect.left));
    const pct = (clamped / rect.width) * 100;
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + '%';
    knob.style.left = pct + '%';
  };
  const onPointerDown = (e) => { dragging = true; ba.setPointerCapture(e.pointerId); setPos(e.clientX); };
  const onPointerMove = (e) => { if (dragging) setPos(e.clientX); };
  const onPointerUp = (e) => { dragging = false; try { ba.releasePointerCapture(e.pointerId); } catch (_) {} };
  ba.addEventListener('pointerdown', onPointerDown);
  ba.addEventListener('pointermove', onPointerMove);
  ba.addEventListener('pointerup', onPointerUp);
  ba.addEventListener('pointercancel', onPointerUp);
});

// Form: honeypot + demo bestätigung
document.querySelectorAll('form.form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.querySelector('input[name="website"]').value) return; // bot
    const ok = document.createElement('div');
    ok.className = 'ok';
    ok.textContent = 'Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns zeitnah.';
    form.replaceWith(ok);
  });
});

// Active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav .links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});
