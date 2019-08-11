// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
// window.onscroll = function ()  { progressBar(); }
//
// function progressBar() {
//   const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   const scrolled = (winScroll / height) * 100;
//   document.getElementById('myBar').style.width = scrolled + '%';
// }

// ============API CALL=============//
// const originalURL = 'https://docs.google.com/spreadsheets/d/1dQxUB4awT-p7naX00MSJSYbyXKmI-7mfIsoh5BJsizk/edit#gid=0';
// ID for sheet:
const id = '1dQxUB4awT-p7naX00MSJSYbyXKmI-7mfIsoh5BJsizk';
const source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;

// ==========CARD OBJECT CONSTRUCTOR=========//
class Cardclass {
  constructor(title, image, text, url) {
    this.title = title;
    this.image = image;
    this.text = text;
    this.url = url;
  }
}
// ==========CARD BUILDING FUNCTION==========//
const buildCard = (cardData) => {
  const newCard = document.createElement('div');
  const bodyDiv = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const cardLink = document.createElement('a');
  const cardImage = document.createElement('img');
  const cardText = document.createElement('p');
  newCard.classList.add('card', 'col-8', 'col-md-5', 'col-lg-4', 'my-4', 'mx-3', 'bg-light', 'card-body', 'text-justify');
  cardTitle.classList.add('text-center', 'text-primary');
  cardTitle.innerText = cardData.title;
  cardLink.href = cardData.url;
  cardLink.setAttribute('target', '_blank');
  cardImage.src = cardData.image;
  cardImage.classList.add('card-img-top');
  cardText.innerText = cardData.text;
  cardText.classList.add('card-text');
  newCard.appendChild(cardTitle);
  newCard.appendChild(cardLink);
  cardLink.appendChild(cardImage);
  newCard.appendChild(bodyDiv);
  bodyDiv.appendChild(cardText);
  document.querySelector('#card-holder').appendChild(newCard);
};
// ============API CALL=============//
async function makeAPICall() {
  const cardData = [];
  const res = await axios(source);
  const entry = res.data.feed.entry;
  for (let i = 0; i < entry.length; i += 1) {
    cardData.push(
      new Cardclass(
        entry[i].gsx$title.$t,
        entry[i].gsx$image.$t, entry[i].gsx$description.$t,
        entry[i].gsx$url.$t,
      ),
    );
  }
  cardData.forEach(buildCard);
}

makeAPICall();

// ============EMAIL FORM=============//
// CITATION: https://stackoverflow.com/questions/271171/sending-emails-with-javascript/271172#271172
function sendMail() {
  const link = 'mailto:andrew.hollingworth@gmail.com'
             + '?cc='
             + '&subject=' + escape(document.querySelector('#sender-subject').value)
             + '&body=' + escape(document.querySelector('#sender-message').value);
  window.location.href = link;
}
