const checkbox = document.getElementById("messageState");
const message = document.getElementById("message");
const heart = document.getElementById("heart");
const container = document.getElementById("container");
const instruction = document.querySelector(".instruction");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.querySelector(".music-icon");

let isMusicPlaying = false;

// Auto play music ketika user pertama kali interact
function playMusicOnInteraction() {
  if (!isMusicPlaying) {
    bgMusic
      .play()
      .then(() => {
        isMusicPlaying = true;
        musicToggle.classList.remove("muted");
      })
      .catch((err) => {
        console.log("Autoplay prevented:", err);
      });
  }
}

// Tombol toggle music
musicToggle.addEventListener("click", function () {
  if (isMusicPlaying) {
    bgMusic.pause();
    isMusicPlaying = false;
    musicToggle.classList.add("muted");
    musicIcon.textContent = "🔇";
  } else {
    bgMusic.play();
    isMusicPlaying = true;
    musicToggle.classList.remove("muted");
    musicIcon.textContent = "🔊";
  }
});

// Play music saat klik heart
heart.addEventListener("click", playMusicOnInteraction);

// Animasi buka/tutup pesan
checkbox.addEventListener("change", function () {
  playMusicOnInteraction(); // Pastikan music play

  if (this.checked) {
    // Buka pesan
    message.classList.remove("closed");
    message.classList.add("open");
    heart.classList.add("moved");
    container.classList.add("opened");
    instruction.style.opacity = "0";
  } else {
    // Tutup pesan
    message.classList.remove("open");
    message.classList.add("closed");
    heart.classList.remove("moved");
    container.classList.remove("opened");
    instruction.style.opacity = "1";
  }
});
