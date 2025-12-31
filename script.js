const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];

// DOM elements
const footer = document.querySelector('.gallery');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const container = document.querySelector('.img');

// Index of the currently displayed image
let currentIndex = 0;


// Displays an image by index and updates the active thumbnail.
let putImg = (index) => {
    currentIndex = index;

    // Render the selected image in the main view
    container.innerHTML = `
    <img 
        src="assets/${images[currentIndex]}" 
        alt="picture ${currentIndex + 1}"
        loading="eager"
        decoding="async"
    >
  `;

    // Highlight the active thumbnail
    const thumbs = footer.querySelectorAll('.footimg');
    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
    });
};


// Shows the next image.
let nextImg = () => {
    if (currentIndex === images.length - 1) {
        putImg(0);
    } else {
        putImg(currentIndex + 1);
    }
};

// Shows the previous image.
let prevImg = () => {
    if (currentIndex === 0) {
        putImg(images.length - 1);
    } else {
        putImg(currentIndex - 1);
    }
};

// Generates thumbnail images below the main viewer.
let openGallery = (list) => {
    list.forEach((image, index) => {
        const figure = document.createElement('figure');
        figure.classList.add('footimg');
        figure.dataset.index = String(index);

        figure.innerHTML = `
      <img 
          src="assets/${image}" 
          alt="thumbnail ${index + 1}"
          loading="lazy"
          decoding="async"
      >
    `;

        footer.appendChild(figure);
    });
};

// Initializes the gallery when the page is fully loaded:
document.addEventListener('DOMContentLoaded', () => {
    openGallery(images);
    putImg(currentIndex);
});

// Navigation buttons
nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

// Keyboard navigation support.
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextImg();
    if (e.key === 'ArrowLeft') prevImg();
});

// Thumbnail click handling using event delegation.
footer.addEventListener('click', (e) => {
    const thumb = e.target.closest('.footimg');
    if (!thumb) return;

    const index = Number(thumb.dataset.index);
    if (Number.isNaN(index)) return;

    putImg(index);
});