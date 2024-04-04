import menuItem0 from './img/menu-item-0.jpg';
import menuItem1 from './img/menu-item-1.jpg';
import menuItem2 from './img/menu-item-2.jpg';
import menuItem3 from './img/menu-item-3.jpg';
import menuItem4 from './img/menu-item-4.jpg';
import menuItem5 from './img/menu-item-5.jpg';

const menuItems = {
  menuItem0: {
    title: 'Pumpernickel Bread',
    price: '$14',
    image: menuItem0,
  },
  menuItem1: {
    title: 'Potato Bread',
    price: '$25',
    image: menuItem1,
  },
  menuItem2: {
    title: 'Almond Croissant',
    price: '$12',
    image: menuItem2,
  },
  menuItem3: {
    title: 'Classic Butter Croissant',
    price: '$35',
    image: menuItem3,
  },
  menuItem4: {
    title: 'Old-Fashioned Donut',
    price: '$18',
    image: menuItem4,
  },
  menuItem5: {
    title: 'Sourdough Bread',
    price: '$20',
    image: menuItem5,
  },
}

export function createMenuPageContent() {
  // Intro
  const h2 = document.createElement('h2');
  h2.classList.add('favorites');
  h2.textContent = `Try some of our customer favorites made with love.`;

  // Menu
  const element = document.createElement('div');
  element.classList.add('menu');

  Object.keys(menuItems).forEach(key => {
    const divElement = document.createElement('div');
    divElement.classList.add(`menu-item`);

    const menuItem = menuItems[key];
    const itemImg = document.createElement('img');
    itemImg.src = menuItem.image;
    itemImg.alt = menuItem.title;
    divElement.appendChild(itemImg);

    const title = document.createElement('h3');
    title.textContent = menuItem.title;
    const price = document.createElement('p');
    price.textContent = menuItem.price;
    divElement.appendChild(title);
    divElement.appendChild(price);
    element.appendChild(divElement);
  });

  const fragment = document.createDocumentFragment();
  fragment.appendChild(h2);
  fragment.appendChild(element);

  return fragment;
}