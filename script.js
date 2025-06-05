const movies = [
  {
    title:"Spider-Man: Into the Spider-Verse",
    poster: "images/IntoTheMultiverse.jpg",
    synopsis: "Miles Morales, a young Spider-Man from a different universe, teams up with other Spider-People from various realities to prevent a threat that could collapse the multiverse",
    genre: "Action, Sci-Fi",
    rating: 4.5,
    actors: ["None"],
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson"
  },
  {
    title: "A Minecraft Movie",
    poster: "images/AMinecraftMoviePoster.jpg",
    synopsis: "Four misfits, including Garrett Garrison, Henry, Natalie, and Dawn, are unexpectedly drawn into the Minecraft Overworld through a mysterious portal. In this cubic wonderland, they encounter Steve, a seasoned crafter who guides them on a quest to protect the world from the forces of darkness. They must learn to work together and embrace their individual creativity to overcome challenges and ultimately return home, while also battling Piglins and Zombies.",
    genre: "Fantasy, Adventure, Action",
    rating: 4.2,
    actors: [ "Jason Momoa", "Jack Black"],
    director: "Jared Hess"
  },
  {
    title: "Thunderbolts",
    poster: "images/Thunderbolts*_poster.jpg",
    synopsis: "A detective uncovers a conspiracy in a dystopian city.",
    genre: "Action, Superhero",
    rating: 4.7,
    actors: ["Florence Pugh","Sebastian Stan","Julia Louis-Dreyfus"],
    director: "Jake Schreier"
  },
  {
    title: "Someone",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "Buy Me",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "A Pizza",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "Never Gonna",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "Give You Up",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "Never",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "Gonna Let You Down",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "Never Gonna Turn",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "Around",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "And Desert You",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  },
  {
    title: "lmao you got RickRolled",
    poster: "images/not-lazy-just-conserving-energy-600w-2287940051.jpg.webp",
    synopsis: "Look at a Lazy Guy Build a movie ticket website on the very last day and dosnt have the time to fix crappy lookinf buttons and animations",
    genre: "Laziness, Procrastination",
    rating: "9/11",
    actors: ["A lazy guy", "Coldrink"],
    director: "Lazy Summer Vacation"
  }
];


const container = document.getElementById("moviesContainer");
const modal = document.getElementById("modal");
const modalBody = document.querySelector(".modal-body");
const closeBtn = document.querySelector(".close");
const searchInput = document.getElementById("searchInput");

function generateMovies() {
  container.innerHTML = "";
  const query = searchInput.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(query));

  filtered.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <div class="movie-poster">
        <img src="${movie.poster}" alt="${movie.title}">
      </div>
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <span class="rating">⭐ ${movie.rating}</span>
      </div>
    `;
    card.addEventListener("click", () => showModal(movie));
    container.appendChild(card);
  });
}

function showModal(movie) {
  modalBody.innerHTML = `
    <div class="modal-poster">
      <img src="${movie.poster}" alt="${movie.title}">
    </div>
    <div class="modal-details">
      <h2>${movie.title}</h2>
      <p><strong>Synopsis:</strong> ${movie.synopsis}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <button class="read-more" onclick="goToPayment()">Buy Now</button>
    </div>
  `;
  modal.style.display = "block";
}

function goToPayment() {
  modal.style.display = "none";
  window.location.href = "payment.html";
}

closeBtn.onclick = () => modal.style.display = "none";

if (container) {
  generateMovies();
  searchInput.addEventListener("input", generateMovies);
}