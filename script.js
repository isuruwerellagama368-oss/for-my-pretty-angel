
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

bgMusic.volume = 0.34;

function startMusic() {
  bgMusic.play().then(() => {
    musicToggle.classList.add("playing");
    musicToggle.innerHTML = "♫ <span>playing</span>";
  }).catch(() => {});
}

function stopMusic() {
  bgMusic.pause();
  musicToggle.classList.remove("playing");
  musicToggle.innerHTML = "♫ <span>music</span>";
}

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) startMusic();
  else stopMusic();
});

const envelope = document.getElementById("openEnvelope");
const hero = document.getElementById("hero");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  startMusic();
  setTimeout(() => document.getElementById("years").scrollIntoView({behavior:"smooth"}), 900);
});

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.next).scrollIntoView({behavior:"smooth"});
  });
});

document.getElementById("replay").addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
  setTimeout(() => {
    envelope.classList.remove("open");
  }, 700);
});

// Tiny drifting stars for a living, subtle background.
const stars = document.querySelector(".stars");
for(let i=0;i<35;i++){
  const s=document.createElement("i");
  s.style.position="absolute";
  s.style.width=s.style.height=(Math.random()*2+1)+"px";
  s.style.left=Math.random()*100+"%";
  s.style.top=Math.random()*100+"%";
  s.style.background="#fff";
  s.style.borderRadius="50%";
  s.style.opacity=(Math.random()*.45+.1);
  s.style.animation=`twinkle ${3+Math.random()*5}s ease-in-out ${Math.random()*3}s infinite`;
  stars.appendChild(s);
}
const style=document.createElement("style");
style.textContent="@keyframes twinkle{0%,100%{opacity:.08;transform:scale(.8)}50%{opacity:.7;transform:scale(1.2)}}";
document.head.appendChild(style);
