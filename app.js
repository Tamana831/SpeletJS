// Variabler för spelet
let cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedPairs = 0;
let flipCount = 0;

// Tid och antal flippar
let timeDropdown = document.querySelector('.details .time span');
let flipsDisplay = document.querySelector('.details .flips span');
let startButton = document.querySelector('.details button');

// Tidshantering
let timer;
let timeLeft = 30; // Standard 30 sekunder

// Event: Klicka på ett kort
cards.forEach(card => {
  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.classList.contains('flip')) {
      flipCard(card);
    }
  });
});

function flipCard(card) {
  card.classList.add('flip');
  flippedCards.push(card);
  flipCount++;
  flipsDisplay.textContent = flipCount;

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  let [card1, card2] = flippedCards;
  let img1 = card1.querySelector('.back-view img').src;
  let img2 = card2.querySelector('.back-view img').src;

  if (img1 === img2) {
    matchedPairs++;
    flippedCards = [];
    if (matchedPairs === cards.length / 2) {
      clearInterval(timer);
      alert('Grattis, du vann!');
    }
  } else {
    setTimeout(() => {
      flippedCards.forEach(card => card.classList.remove('flip'));
      flippedCards = [];
    }, 1000);
  }
}

// Tidshantering
function startGame() {
  shuffleCards();
  resetGame();
  timer = setInterval(() => {
    timeLeft--;
    timeDropdown.textContent = `${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      alert('Spelet över! Försök igen.');
    }
  }, 1000);
}

function resetGame() {
  matchedPairs = 0;
  flipCount = 0;
  timeLeft = parseInt(document.querySelector('select').value, 10);
  flipsDisplay.textContent = 0;
  timeDropdown.textContent = `${timeLeft}s`;
  cards.forEach(card => card.classList.remove('flip'));
  flippedCards = [];
}

// Shuffla kort
function shuffleCards() {
  let cardArray = Array.from(cards);
  cardArray.sort(() => Math.random() - 0.5);
  let container = document.querySelector('.cards');
  container.innerHTML = '';
  cardArray.forEach(card => container.appendChild(card));
}

// Dropdown för tid
document.querySelector('.details .time').innerHTML = `
  <label for="time">Tid:</label>
  <select id="time">
    <option value="15">15s</option>
    <option value="30" selected>30s</option>
    <option value="60">60s</option>
  </select>
`;

// Starta om-knapp
startButton.addEventListener('click', startGame);

// Starta spelet direkt
startGame();
