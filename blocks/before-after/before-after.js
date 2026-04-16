/**
 * Before-After block - side-by-side comparison of treatment photos
 * Content model: rows with before image | after image
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const slides = [...block.children];
  if (slides.length === 0) return;

  const container = document.createElement('div');
  container.className = 'before-after-container';

  slides.forEach((row, i) => {
    const slide = document.createElement('div');
    slide.className = 'before-after-pair';
    if (i === 0) slide.classList.add('before-after-pair-active');

    const cols = [...row.children];
    if (cols[0]) {
      cols[0].className = 'before-after-before';
      const label = document.createElement('span');
      label.className = 'before-after-label';
      label.textContent = 'Voor';
      cols[0].prepend(label);
      slide.append(cols[0]);
    }
    if (cols[1]) {
      cols[1].className = 'before-after-after';
      const label = document.createElement('span');
      label.className = 'before-after-label';
      label.textContent = 'Na';
      cols[1].prepend(label);
      slide.append(cols[1]);
    }

    container.append(slide);
  });

  // Navigation if multiple pairs
  if (slides.length > 1) {
    const nav = document.createElement('div');
    nav.className = 'before-after-nav';

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'before-after-dot';
      if (i === 0) dot.classList.add('before-after-dot-active');
      dot.textContent = `${i + 1}`;
      dot.setAttribute('aria-label', `Voorbeeld ${i + 1}`);
      dot.addEventListener('click', () => {
        container.querySelectorAll('.before-after-pair').forEach((p, j) => {
          p.classList.toggle('before-after-pair-active', j === i);
        });
        nav.querySelectorAll('.before-after-dot').forEach((d, j) => {
          d.classList.toggle('before-after-dot-active', j === i);
        });
      });
      nav.append(dot);
    });

    block.replaceChildren(container, nav);
  } else {
    block.replaceChildren(container);
  }
}
