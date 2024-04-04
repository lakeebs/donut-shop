import './style.css';
import { createHomePageContent } from './content-home.js';
import { createMenuPageContent } from './content-menu.js';
import { createAboutPageContent } from './content-about.js';

const content = document.getElementById('content');

// Button click event listeners
const homeButton = document.querySelector('h1');
homeButton.addEventListener('click', () => { 
  displayHomePage();
});

const menuButton = document.querySelector('button#menu');
menuButton.addEventListener('click', () => { 
  displayMenuPage();
});

const aboutButton = document.querySelector('button#about');
aboutButton.addEventListener('click', () => { 
  displayAboutPage();
});

// Content
function displayHomePage() {
  const homeContent = createHomePageContent();
  content.innerHTML = '';
  content.appendChild(homeContent);
}

function displayMenuPage() {
  const menuContent = createMenuPageContent();
  content.innerHTML = '';
  content.appendChild(menuContent);
}

function displayAboutPage() {
  const aboutContent = createAboutPageContent();
  content.innerHTML = '';
  content.appendChild(aboutContent);
}

window.onload = displayHomePage;