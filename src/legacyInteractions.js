export function initPortfolioInteractions() {
  /* ============================================================
     PORTFOLIO — script.js
     Custom cursor · Nav · Scroll reveal · Filter · Counter · Form
     ============================================================ */
  
  
  
  /* ---- Helpers ----------------------------------------------- */
  const qs  = (s, ctx = document) => ctx.querySelector(s);
  const qsa = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  
  /* ---- Custom Cursor ----------------------------------------- */
  const cursor     = qs('#cursor');
  const cursorRing = qs('#cursorRing');
  
  let mx = 0, my = 0;   // mouse position
  let rx = 0, ry = 0;   // ring position (lerped)
  
  if (cursor && cursorRing) {
    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });
  
    // Smooth ring follow
    (function animateRing() {
      rx += (mx - rx) * .13;
      ry += (my - ry) * .13;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top  = ry + 'px';
      requestAnimationFrame(animateRing);
    })();
  
    // Hover enlargement
    const hovers = qsa('a, button, .pcard, .discipline, .tag, .soc, .f-btn, .skill-block');
    hovers.forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });
  
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity     = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity     = '1';
      cursorRing.style.opacity = '1';
    });
  }
  
  /* ---- Navigation -------------------------------------------- */
  const nav    = qs('#nav');
  const burger = qs('#burger');
  const mMenu  = qs('#mobileMenu');
  
  // Sticky nav
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
  
  // Burger toggle
  burger?.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  
  // Close mobile menu on link click
  qsa('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
  
  /* ---- Smooth Scroll for anchor links ------------------------ */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = qs(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav?.offsetHeight ?? 0;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
  
  /* ---- Scroll Reveal (Intersection Observer) ----------------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
  
      const el     = entry.target;
      const parent = el.parentElement;
      const isGrid = parent?.matches(
        '.skills__grid, .projects__grid, .about__cards, .filter-bar'
      );
  
      if (isGrid) {
        const siblings = [...parent.children].filter(c => c.classList.contains('reveal'));
        const idx      = siblings.indexOf(el);
        setTimeout(() => el.classList.add('in'), idx * 90);
      } else {
        el.classList.add('in');
      }
      revealObs.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  
  // Observe all reveal elements
  qsa('.reveal').forEach(el => revealObs.observe(el));
  
  // Also immediately reveal anything already visible in the viewport on load/navigation
  function revealInView() {
    qsa('.reveal:not(.in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add('in');
        revealObs.unobserve(el);
      }
    });
  }
  window.addEventListener('scroll', revealInView, { passive: true });
  document.addEventListener('DOMContentLoaded', revealInView);
  setTimeout(revealInView, 100); // catch elements visible on initial load
  
  /* ---- Animated Stat Counters -------------------------------- */
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el   = entry.target;
      const end  = parseInt(el.dataset.count, 10);
      const dur  = 1400; // ms
      const step = end / (dur / 16);
      let   cur  = 0;
  
      const tick = () => {
        cur = Math.min(cur + step, end);
        el.textContent = Math.floor(cur);
        if (cur < end) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      statObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  
  qsa('.stat__num').forEach(el => statObs.observe(el));
  
  /* ---- Project Filter ---------------------------------------- */
  const fBtns = qsa('.f-btn');
  const pCards = qsa('.pcard');
  
  fBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
  
      // Update active button
      fBtns.forEach(b => b.classList.remove('f-btn--on'));
      btn.classList.add('f-btn--on');
  
      pCards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
  
        if (match) {
          // Show with fade-in
          card.classList.remove('hide');
          card.style.opacity   = '0';
          card.style.transform = 'translateY(16px)';
          // Force reflow then animate
          requestAnimationFrame(() => requestAnimationFrame(() => {
            card.style.transition = 'opacity .4s ease, transform .4s ease';
            card.style.opacity    = '1';
            card.style.transform  = 'none';
          }));
        } else {
          card.style.transition = 'opacity .25s ease';
          card.style.opacity    = '0';
          setTimeout(() => card.classList.add('hide'), 260);
        }
      });
    });
  });
  
  /* ---- Contact Form ------------------------------------------ */
  const form      = qs('#contactForm');
  const submitBtn = qs('#submitBtn');
  
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
  
    const label = qs('.btn-label', submitBtn);
    const icon  = qs('svg',        submitBtn);
    submitBtn.disabled = true;
  
    if (label) label.textContent = 'Sending…';
    if (icon)  icon.style.opacity = '0';
  
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
  
      if (res.ok) {
        if (label) label.textContent = 'Message Sent ✓';
        submitBtn.style.background = '#2d6a4f';
        form.reset();
      } else {
        if (label) label.textContent = 'Error — Try Again';
        submitBtn.style.background = '#8a0018';
      }
    } catch {
      if (label) label.textContent = 'Error — Try Again';
      submitBtn.style.background = '#8a0018';
    }
  
    setTimeout(() => {
      if (label) label.textContent = 'Send Message';
      submitBtn.style.background = '';
      if (icon)  icon.style.opacity = '1';
      submitBtn.disabled = false;
    }, 3500);
  });
  
  /* ---- Parallax on hero portrait ----------------------------- */
  const heroPortrait = qs('.hero__portrait-wrap');
  
  window.addEventListener('scroll', () => {
    if (!heroPortrait) return;
    const y = window.scrollY * 0.12;
    heroPortrait.style.transform = `translateY(${y}px)`;
  }, { passive: true });
  
  /* ---- Active nav link on scroll ----------------------------- */
  const sections  = qsa('section[id]');
  const navLinks  = qsa('.nav__link');
  
  const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  }, { threshold: 0.4 });
  
  sections.forEach(s => activeObs.observe(s));
  
  /* ---- Projects Carousel -------------------------------------- */
  const projectsGrid = qs('.projects__grid');
  const arrowLeft    = qs('.carousel__arrow--left');
  const arrowRight   = qs('.carousel__arrow--right');
  const counterCur   = qs('.carousel__current');
  const counterTot   = qs('.carousel__total');
  
  if (projectsGrid && arrowLeft && arrowRight) {
    function getVisibleCards() {
      return qsa('.pcard:not(.hide)', projectsGrid);
    }
  
    function getCardWidth() {
      const card = getVisibleCards()[0];
      if (!card) return 360;
      return card.offsetWidth + 1; // +1 for the gap (1px from background trick)
    }
  
    function updateCounter() {
      const cards     = getVisibleCards();
      const total     = cards.length;
      const cardW     = getCardWidth();
      const scrollPos = projectsGrid.scrollLeft;
      const current   = Math.round(scrollPos / cardW) + 1;
  
      if (counterCur) counterCur.textContent = String(Math.min(current, total)).padStart(2, '0');
      if (counterTot) counterTot.textContent = String(total).padStart(2, '0');
  
      const atStart = scrollPos <= 2;
      const atEnd   = scrollPos >= projectsGrid.scrollWidth - projectsGrid.clientWidth - 2;
      arrowLeft.classList.toggle('at-end', atStart);
      arrowRight.classList.toggle('at-end', atEnd);
    }
  
    arrowRight.addEventListener('click', () => {
      projectsGrid.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });
  
    arrowLeft.addEventListener('click', () => {
      projectsGrid.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });
  
    projectsGrid.addEventListener('scroll', updateCounter, { passive: true });
  
    projectsGrid.addEventListener('wheel', (e) => {
      e.preventDefault();
      projectsGrid.scrollBy({ left: e.deltaY, behavior: 'auto' });
    });
  
    updateCounter();
  
    const filterObserver = new MutationObserver(() => {
      requestAnimationFrame(updateCounter);
    });
    qsa('.pcard', projectsGrid).forEach(card => {
      filterObserver.observe(card, { attributes: true, attributeFilter: ['class'] });
    });
  }
  
  /* ---- Vimeo Modal ------------------------------------------- */
  const vModal  = qs('#vimeoModal');
  const vFrame  = qs('#vimeoFrame');
  const vClose  = qs('.vmodal__close');
  const vBdrop  = qs('.vmodal__backdrop');
  
  function openVimeo(id) {
    vFrame.src = `https://player.vimeo.com/video/${id}?autoplay=1&color=b40020&title=0&byline=0&portrait=0`;
    vModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
function closeVimeo() {
  vModal.classList.remove('open');
  vFrame.src = 'about:blank';
  document.body.style.overflow = '';
}
  
  document.addEventListener('click', e => {
    const trigger = e.target.closest('.js-vimeo-open');
    if (trigger) {
      e.preventDefault();
      openVimeo(trigger.dataset.vimeo);
    }
  });
  
  vClose?.addEventListener('click', closeVimeo);
  vBdrop?.addEventListener('click', closeVimeo);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeVimeo();
  });
  

  return () => {
    document.body.style.overflow = '';
  };
}
