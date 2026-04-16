/**
 * Carousel block - rotating content/product showcase
 * Content model: each row is a slide with image and text
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const slides = [...block.children];
  if (slides.length === 0) return;

  const carousel = document.createElement('div');
  carousel.className = 'carousel-slides';

  slides.forEach((slide, i) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'carousel-slide';
    if (i === 0) slideEl.classList.add('carousel-slide-active');
    slideEl.setAttribute('data-index', i);

    // Move content from row
    while (slide.firstElementChild) {
      const child = slide.firstElementChild;
      if (child.querySelector('picture')) {
        child.className = 'carousel-slide-image';
      } else {
        child.className = 'carousel-slide-content';
      }
      slideEl.append(child);
    }

    carousel.append(slideEl);
  });

  // Navigation buttons
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-nav-prev';
  prevBtn.setAttribute('aria-label', 'Vorige');
  prevBtn.textContent = '‹';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-nav-next';
  nextBtn.setAttribute('aria-label', 'Volgende');
  nextBtn.textContent = '›';

  nav.append(prevBtn, nextBtn);

  // Indicators
  const indicators = document.createElement('div');
  indicators.className = 'carousel-indicators';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-indicator';
    if (i === 0) dot.classList.add('carousel-indicator-active');
    dot.setAttribute('aria-label', `Ga naar slide ${i + 1}`);
    dot.setAttribute('data-index', i);
    indicators.append(dot);
  });

  let currentIndex = 0;

  function showSlide(index) {
    const allSlides = carousel.querySelectorAll('.carousel-slide');
    const allDots = indicators.querySelectorAll('.carousel-indicator');
    const total = allSlides.length;

    currentIndex = ((index % total) + total) % total;

    allSlides.forEach((s, i) => {
      s.classList.toggle('carousel-slide-active', i === currentIndex);
    });
    allDots.forEach((d, i) => {
      d.classList.toggle('carousel-indicator-active', i === currentIndex);
    });

    // Scroll to active slide
    const activeSlide = carousel.querySelector('.carousel-slide-active');
    if (activeSlide) {
      carousel.scrollTo({ left: activeSlide.offsetLeft, behavior: 'smooth' });
    }
  }

  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  indicators.addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-indicator');
    if (dot) showSlide(parseInt(dot.dataset.index, 10));
  });

  block.replaceChildren(carousel, nav, indicators);
}
