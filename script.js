document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const timeDisplay = document.querySelector('.time span');
  const flipCounterDisplay = document.querySelector('.flips span');
  const resetButton = document.querySelector('.details button');
  const timeSelect = document.querySelector('#time-select');
  let flippedCards = []; // För att hålla reda på vända kort
  let flipCount = 0; // Räkna vända kort
  let matchesFound = 0; // Räkna antalet matcher
  let timer; // Timer för nedräkning
  let timeRemaining;
  let selectedTime = 30; // Standard tid

  // Event listener för att starta om spelet
  resetButton.addEventListener('click', resetGame);

  // Event listener för att ändra tid från dropdown
  timeSelect.addEventListener('change', () => {
      selectedTime = parseInt(timeSelect.value);
      resetGame();
  });

  // Starta spelet vid laddning
  startGame();

  function startGame() {
      timeRemaining = selectedTime;
      flipCount = 0;
      matchesFound = 0;
      flippedCards = [];
      timeDisplay.textContent = timeRemaining;
      flipCounterDisplay.textContent = flipCount;
      clearInterval(timer); // Rensa eventuell tidigare timer
      timer = setInterval(updateTimer, 1000);
      shuffleCards();
  }

  function updateTimer() {
      if (timeRemaining === 0) {
          clearInterval(timer);
          alert('Tiden är slut!');
      } else {
          timeRemaining--;
          timeDisplay.textContent = timeRemaining;
      }
  }

  // Slumpa om korten
  function shuffleCards() {
      const cardArray = Array.from(cards);
      cardArray.forEach(card => {
          const randomIndex = Math.floor(Math.random() * cardArray.length);
          card.style.order = randomIndex;
      });

      setupCards(); // Initiera korten med bilder
  }

  // Initiera kort med bilder
  function setupCards() {
      const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];
      const cardImages = [...images, ...images]; // Duplicera bilder för att skapa matcher
      shuffleArray(cardImages);

      cards.forEach((card, index) => {
          const backImg = card.querySelector('.back-view img');
          const frontView = card.querySelector('.front-view');
          
          // Dold bild på baksidan
          backImg.src = `img/${cardImages[index]}`;
          backImg.style.display = 'block'; // Se till att bakbilden är synlig

          // Framsidan ska vara synlig, här kan vi ha en ikon eller ett mönster
          frontView.style.display = 'block'; // Framsidan ska vara synlig

          // Dölja baksidan av kortet
          card.querySelector('.back-view').style.display = 'none';
      });
  }

  // Slumpa om bilderna i arrayen
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Byt plats på element
      }
  }

  // Hantera kort som vänds
  function flipCard(card) {
      if (flippedCards.length < 2 && !card.classList.contains('flip')) {
          card.classList.add('flip');
          card.querySelector('.front-view').style.display = 'none'; // Dölja framsidan
          card.querySelector('.back-view').style.display = 'block'; // Visa baksidan
          flippedCards.push(card);
          flipCount++;
          flipCounterDisplay.textContent = flipCount;

          if (flippedCards.length === 2) {
              checkMatch();
          }
      }
  }

  // Kontrollera om de vända korten matchar
  function checkMatch() {
      const [firstCard, secondCard] = flippedCards;
      const firstImgSrc = firstCard.querySelector('.back-view img').src;
      const secondImgSrc = secondCard.querySelector('.back-view img').src;

      if (firstImgSrc === secondImgSrc) {
          matchesFound++;
          flippedCards = [];
          if (matchesFound === cards.length / 2) {
              clearInterval(timer);
              alert('Du vann!');
          }
      } else {
          setTimeout(() => {
              resetFlippedCards(firstCard, secondCard);
          }, 1000);
      }
  }

  // Återställ vända kort till sin ursprungliga position
  function resetFlippedCards(firstCard, secondCard) {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      firstCard.querySelector('.front-view').style.display = 'block';
      firstCard.querySelector('.back-view').style.display = 'none';
      secondCard.querySelector('.front-view').style.display = 'block';
      secondCard.querySelector('.back-view').style.display = 'none';
      flippedCards = [];
  }

  // Starta om spelet
  function resetGame() {
      flippedCards = [];
      flipCount = 0;
      matchesFound = 0;
      flipCounterDisplay.textContent = flipCount;
      timeRemaining = selectedTime;
      timeDisplay.textContent = timeRemaining;
      startGame();
      cards.forEach(card => {
          card.classList.remove('flip');
          card.querySelector('.front-view').style.display = 'block';
          card.querySelector('.back-view').style.display = 'none';
      });
  }

  // Lyssnare för kortklick
  cards.forEach(card => {
      card.addEventListener('click', () => flipCard(card));
  });
});



 




