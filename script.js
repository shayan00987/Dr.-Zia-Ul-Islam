(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  $('#year').textContent = new Date().getFullYear();

  const menuToggle = $('#menuToggle');
  const mainNav = $('#mainNav');
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  $$('#mainNav a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  const backdrop = $('#authModal');
  const authTitle = $('#authTitle');
  const authSubtitle = $('#authSubtitle');
  const authEyebrow = $('#authEyebrow');
  const authSubmit = $('#authSubmit');
  const authSwitch = $('#authSwitch');
  const passwordWrap = $('#passwordWrap');
  const password = $('#authPassword');
  const email = $('#authEmail');
  let authMode = 'login';
  let toastTimer;
  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
  }
  function setAuthMode(mode) {
    authMode = mode;
    const signup = mode === 'signup';
    authTitle.textContent = signup ? 'Create your account.' : 'Welcome back.';
    authSubtitle.textContent = signup ? 'Save your details for a smoother visit.' : 'Sign in to manage your saved information.';
    authEyebrow.textContent = signup ? 'A MORE PERSONAL EXPERIENCE' : 'YOUR PRIVATE SPACE';
    authSubmit.innerHTML = (signup ? 'Create account' : 'Log in') + ' <span>↗</span>';
    authSwitch.innerHTML = signup
      ? 'Already have an account? <button type="button" data-auth="login">Log in</button>'
      : 'New here? <button type="button" data-auth="signup">Create an account</button>';
    passwordWrap.style.display = 'block';
    password.required = true;
    $$('#authSwitch [data-auth]').forEach(button => button.addEventListener('click', () => setAuthMode(button.dataset.auth)));
  }
  function openAuth(mode) {
    setAuthMode(mode);
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => email.focus(), 50);
  }
  function closeAuth() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  $$('[data-auth]').forEach(button => button.addEventListener('click', () => openAuth(button.dataset.auth)));
  $('#modalClose').addEventListener('click', closeAuth);
  backdrop.addEventListener('click', event => { if (event.target === backdrop) closeAuth(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeAuth(); });
  $('#authForm').addEventListener('submit', event => {
    event.preventDefault();
    const action = authMode === 'signup' ? 'Account creation' : 'Sign in';
    showToast(`${action} is a design preview. Connect secure authentication before accepting real accounts.`);
  });
  $$('[data-social]').forEach(button => button.addEventListener('click', () => {
    showToast(`${button.dataset.social} sign-in needs approved OAuth credentials and a secure backend before launch.`);
  }));

  // Lightweight auto-advancing image carousel, with manual controls and reduced-motion support.
  const track = $('#galleryTrack');
  const slides = $$('.gallery-slide', track);
  const progress = $('#galleryProgress');
  const count = $('#galleryCount');
  let activeIndex = 0;
  let carouselTimer;
  function goToSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    const slide = slides[activeIndex];
    const distance = slide.offsetLeft - slides[0].offsetLeft;
    track.style.transform = `translateX(${-distance}px)`;
    slides.forEach((item, i) => item.classList.toggle('active', i === activeIndex));
    count.textContent = String(activeIndex + 1).padStart(2, '0');
    progress.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
  }
  function startCarousel() {
    clearInterval(carouselTimer);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      carouselTimer = setInterval(() => goToSlide(activeIndex + 1), 4600);
    }
  }
  $('#galleryPrev').addEventListener('click', () => { goToSlide(activeIndex - 1); startCarousel(); });
  $('#galleryNext').addEventListener('click', () => { goToSlide(activeIndex + 1); startCarousel(); });
  window.addEventListener('resize', () => goToSlide(activeIndex));
  const gallery = $('#gallery');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { startCarousel(); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(gallery);
  } else startCarousel();
  goToSlide(0);
})();