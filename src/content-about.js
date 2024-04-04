import Hero from './img/about.jpg';

export function createAboutPageContent() {
  const element = document.createElement('div');
  element.classList.add('about');

  // Hero image
  const heroImg = new Image();
  heroImg.src = Hero;
  heroImg.alt = 'Hero Image';
  heroImg.width = "2000";
  heroImg.classList.add('hidden');
  element.appendChild(heroImg);

  // Check if the image is already loaded
  if (heroImg.complete) {
    fadeInImage();
  } else {
    // If the image is not yet loaded, wait for the load event
    heroImg.addEventListener('load', fadeInImage);
  }

  // Add a delay before removing the hidden class
  function fadeInImage() {
    heroImg.classList.remove('hidden');
  }
  
  const p = document.createElement('p');
  p.textContent = `At Breadcrumbs, we're dedicated to crafting irresistible treats using only the freshest, finest ingredients sourced from trusted suppliers. Our commitment to quality ensures that every bite is not only delicious but also nourishing for the body and soul. From organic flours and grains to locally sourced fruits and nuts, our carefully curated selection reflects our passion for providing a healthier option for indulging in baked goods. Join us in savoring the goodness of wholesome ingredients and experience the difference that quality makes in every bite.`;

  element.appendChild(p);

  return element;
}