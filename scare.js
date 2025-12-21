const btn = document.getElementById("buyBtn");
const ui = document.getElementById("ui");
const img = document.getElementById("biriyani");
const sound = document.getElementById("ghostSound");

btn.onclick = () => {
  // kill UI instantly
  ui.remove();
  document.body.style.pointerEvents = "none";

  // prepare image far away
  img.style.opacity = "1";
  img.style.transform = "translate(-250%, -50%) scale(0.15)";

  // force repaint (VERY IMPORTANT)
  img.offsetHeight;

  // INSTANT TELEPORT
  img.style.transform = "translate(-50%, -50%) scale(1.2)";
  sound.currentTime = 0;
  sound.play().catch(()=>{});

  // violent jerks
  setTimeout(()=>img.style.transform="translate(-48%,-52%) scale(1.25)", 30);
  setTimeout(()=>img.style.transform="translate(-52%,-48%) scale(1.3)", 60);
  setTimeout(()=>img.style.transform="translate(-50%,-50%) scale(1.15)", 90);
};
