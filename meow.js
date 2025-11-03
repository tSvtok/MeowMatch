let cats = [];
let currentIndex = 0;
let likedCats = [];


fetch('paw.json')
  .then(res => res.json())
  .then(data => {
    cats = data;
    showCat();
  });

const home = document.getElementById('home');
const match = document.getElementById('match');
const startBtn = document.getElementById('startBtn');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const catCard = document.getElementById('catCard');


startBtn.addEventListener('click', () => {
  home.classList.add('hidden');
  match.classList.remove('hidden');
});


function showCat() {
  if (currentIndex >= cats.length) {
    catCard.innerHTML = "<h2>No more cats 😿</h2>";
    document.querySelector('.buttons').style.display = 'none';
    saveLikedCats();
    return;
  }

  const cat = cats[currentIndex];
  catCard.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}">
    <h2>${cat.name}</h2>
  `;
}


likeBtn.addEventListener('click', () => {
  likedCats.push(cats[currentIndex]);
  currentIndex++;
  showCat();
});


dislikeBtn.addEventListener('click', () => {
  currentIndex++;
  showCat();
});


function saveLikedCats() {
  localStorage.setItem('likedpaw', JSON.stringify(likedCats));
  console.log("Liked cats saved to localStorage ✅");
}

function saveLikedCats() {
  localStorage.setItem('likedpaw', JSON.stringify(likedCats));
}

const saved = JSON.parse(localStorage.getItem('likedpaw')) || [];
console.log(saved);



function showCat() {
  if (currentIndex >= cats.length) {
    catCard.innerHTML = `
      <h2>No more cats </h2>
      <button id="homeBtn">Return Home</button>
    `;
    document.querySelector('.buttons').style.display = 'none';
    saveLikedCats();

    // make the return home button work
    document.getElementById('homeBtn').addEventListener('click', () => {
      match.classList.add('hidden');
      home.classList.remove('hidden');
      document.querySelector('.buttons').style.display = 'flex';
      currentIndex = 0; // reset if you want to start over
    });

    return;
  }

  const cat = cats[currentIndex];
  catCard.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}">
    <h2>${cat.name}</h2>
  `;
}
