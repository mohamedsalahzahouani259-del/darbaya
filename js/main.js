// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('menu-icon-hamburger');
const closeIcon = document.getElementById('menu-icon-close');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  });

  // Close menu when a link is clicked
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    });
  });
}

// Image Lightbox Gallery (Simple Open/Close only)
const galleryFigures = document.querySelectorAll('#galerie figure');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

if (galleryFigures && lightbox && lightboxImg) {
  galleryFigures.forEach(fig => {
    fig.addEventListener('click', () => {
      const imgEl = fig.querySelector('img');
      if (imgEl) {
        const src = imgEl.getAttribute('src');
        const alt = imgEl.getAttribute('alt');
        lightboxImg.setAttribute('src', src);
        lightboxImg.setAttribute('alt', alt);
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  });
}

if (lightbox) {
  lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  });
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
});
