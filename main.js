// TESTING OBJECT
const cardData = [{
  image: 'https://i.ebayimg.com/images/g/dEMAAOSwqRlcO3u6/s-l300.jpg',
  heading: 'D&D',
  text: 'This is my project that is all about D&D. Being a nerd is the best thing ever.',
}, {
  image: 'https://i.ebayimg.com/images/g/dEMAAOSwqRlcO3u6/s-l300.jpg',
  heading: 'D&D',
  text: 'This is my project that is all about D&D. Being a nerd is the best thing ever.',
}];

// VARIABLES
const containerDiv = document.querySelector('main');


// ============CONSTRUCT A CARD=============//
const buildCard = (cardData) => {
  const newCard = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardHeading = document.createElement('h2');
  const cardText = document.createElement('p');
  newCard.classList.add('eachCard');
  cardImage.src = cardData.image;
  cardImage.classList.add('cardPart');
  cardHeading.innerText = cardData.heading;
  cardHeading.classList.add('cardPart');
  cardHeading.classList.add('cardWords');
  cardText.innerText = cardData.text;
  cardText.classList.add('cardPart');
  cardText.classList.add('cardWords');
  newCard.appendChild(cardImage);
  newCard.appendChild(cardHeading);
  newCard.appendChild(cardText);
  containerDiv.appendChild(newCard);
};

cardData.forEach(buildCard);
