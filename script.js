const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const noTexts = [
  "Think again!",
  "Really sure?",
  "Still no?",
  "🥺 Please?",
  "💔 Don't break my heart!",
  "😢",
  "Okay... last chance!",
  "😭 Why not?",
  "👉👈 Say yes please",
  "❤️ You know you want to!"
];

let clickCount = 0;
let yesSize = 1;

noBtn.addEventListener("mouseover", () => {
  if (clickCount < noTexts.length) {
    noBtn.textContent = noTexts[clickCount];

    // Move button randomly
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Grow "Yes" button
    yesSize += 0.1;
    yesBtn.style.transform = `scale(${yesSize})`;

    clickCount++;
  } else {
    noBtn.style.display = "none"; // Hide it forever 💀
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align: center; padding: 40px;">
      <h1 style="color: #e91e63;">Yayyyy!!! 🥰💖</h1>
      <p>You just made me the happiest person alive!</p>
      <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTU5Z3AwOHdnejdoMzI3amU1dWJtNHBiZjJlaDFyMm05dmx1MXBqeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gyuIdNScFyyaPmCyQt/giphy.gif" alt="Happy Bear" style="width: 150px;">
    </div>
  `;
});
