const btn = document.getElementById("buyBtn");
const waiterText = document.getElementById("waiterText");
const sound = document.getElementById("ghostSound");

btn.addEventListener("click", () => {

  waiterText.style.opacity = "1";

  setTimeout(() => {
    document.getElementById("app").remove();

    document.body.classList.add("attack");
    sound.currentTime = 0;
    sound.play().catch(()=>{});

  }, 1200); // waiter dialogue delay
});
