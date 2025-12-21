const btn = document.getElementById("buyBtn");
const ui = document.getElementById("ui");
const img = document.getElementById("biriyani");
const sound = document.getElementById("ghostSound");

btn.onclick = () => {
  // remove UI completely (no layout bugs)
  ui.remove();
  document.body.style.pointerEvents = "none";

  // ensure image natural size is used
  img.style.opacity = "1";
  img.style.transform = "translate(-300%, -50%) scale(0.2)";

  // force browser reflow
  img.getBoundingClientRect();

  // INSTANT JUMPSCARE
  img.style.transform = "translate(-50%, -50%) scale(1.05)";
  sound.currentTime = 0;
  sound.play().catch(()=>{});

  // violent but controlled jerk (no overshoot)
  setTimeout(()=>img.style.transform="translate(-49%,-51%) scale(1.08)", 25);
  setTimeout(()=>img.style.transform="translate(-51%,-49%) scale(1.1)", 55);
  setTimeout(()=>img.style.transform="translate(-50%,-50%) scale(1.0)", 85);
};
