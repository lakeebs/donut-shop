import Hero from './img/hero.jpg';
import { createMenuPageContent } from './content-menu.js';

export function createHomePageContent() {
  const element = document.createElement('div');
  element.classList.add('home');

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

  // Tagline
  const divElement = document.createElement('div');

  const tagline = document.createElement('p');
  tagline.classList.add('tagline');
  tagline.textContent = 'Crafting excellence with quality ingredients.';

  const viewMenu = document.createElement('button');
  viewMenu.classList.add('view-menu')
  viewMenu.textContent = 'View our menu';

  function displayMenuPage() {
    const menuContent = createMenuPageContent();
    content.innerHTML = '';
    content.appendChild(menuContent);
  }

  viewMenu.addEventListener('click', () => { 
    displayMenuPage();
  });

  element.appendChild(divElement);
  divElement.appendChild(tagline);
  divElement.appendChild(viewMenu);

  return element;
}