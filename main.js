// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
window.onscroll = function ()  { progressBar(); }

function progressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}

// API CALL
// const originalURL = 'https://docs.google.com/spreadsheets/d/1dQxUB4awT-p7naX00MSJSYbyXKmI-7mfIsoh5BJsizk/edit#gid=0';

// ID for sheet:
const id = '1dQxUB4awT-p7naX00MSJSYbyXKmI-7mfIsoh5BJsizk';

const source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;

console.log(source);

// // TESTING OBJECT
// const cardData = [{
//   image: 'https://i.ebayimg.com/images/g/dEMAAOSwqRlcO3u6/s-l300.jpg',
//   heading: 'D&D',
//   text: 'This is my project that is all about D&D. Being a nerd is the best thing ever.',
// }, {
//   image: 'https://i.ebayimg.com/images/g/dEMAAOSwqRlcO3u6/s-l300.jpg',
//   heading: 'D&D',
//   text: 'This is my project that is all about D&D. Being a nerd is the best thing ever.',
// }];

// VARIABLES
// const containerDiv = document.querySelector('main');


// ============CONSTRUCT A CARD=============//
// const buildCard = (cardData) => {
//   const newCard = document.createElement('div');
//   const textDiv = document.createElement('div');
//   const cardImage = document.createElement('img');
//   const cardHeading = document.createElement('h2');
//   const cardText = document.createElement('p');
//   newCard.classList.add('eachCard');
//   textDiv.classList.add('cardWords');
//   cardImage.src = cardData.image;
//   cardImage.classList.add('cardPart');
//   cardHeading.innerText = cardData.heading;
//   cardHeading.classList.add('cardPart');
//   cardText.innerText = cardData.text;
//   cardText.classList.add('cardPart');
//   newCard.appendChild(cardImage);
//   containerDiv.appendChild(newCard);
// };
//
// cardData.forEach(buildCard);
