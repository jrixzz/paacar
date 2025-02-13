document.getElementById("openLetter").addEventListener("click", function() {
    document.querySelector(".letter").classList.remove("hidden");
});

document.getElementById("playMusic").addEventListener("click", function() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

// Efek hati berjatuhan
function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
