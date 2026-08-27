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

// Image Lightbox Gallery
const galleryFigures = document.querySelectorAll('#galerie figure');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentIndex = 0;
const images = [];

// Populate image list
galleryFigures.forEach((fig, index) => {
  const imgEl = fig.querySelector('img');
  if (imgEl) {
    images.push({
      src: imgEl.getAttribute('src'),
      alt: imgEl.getAttribute('alt')
    });
    
    fig.addEventListener('click', () => {
      currentIndex = index;
      showImage(currentIndex);
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }
});

function showImage(index) {
  if (index >= 0 && index < images.length) {
    lightboxImg.setAttribute('src', images[index].src);
    lightboxImg.setAttribute('alt', images[index].alt);
  }
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  });
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
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
