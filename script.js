function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const params = new URLSearchParams(window.location.search);
const boyName = params.get("bf") ?? "Bf";
const girlName = params.get("gf") ?? "Gf";
document.title = `${boyName} ❤️ ${girlName}`;
Array.from(document.getElementsByClassName("bf")).forEach((el) => {
  el.textContent = boyName;
});
Array.from(document.getElementsByClassName("gf")).forEach((el) => {
  el.textContent = girlName;
});

const romanticMusic = document.getElementById("romanticMusic");
const happyMusic = document.getElementById("happyMusic");

// Start romantic music on first interaction (mobile safe)
document.body.addEventListener(
  "click",
  () => {
    romanticMusic.play();
  },
  { once: true },
);

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = getRandomIntInclusive(0, document.documentElement.clientWidth - noBtn.offsetWidth - 200);
  const y = getRandomIntInclusive(0, document.documentElement.clientHeight - noBtn.offsetHeight - 200);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.animationDuration = "0.4s";
}

function sayYes() {
  romanticMusic.pause();
  romanticMusic.currentTime = 0;

  happyMusic.play();

  document.getElementById("proposal").style.display = "none";
  document.getElementById("result").style.display = "block";

  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
