const btn1 = document.getElementById("icona");
const card = document.getElementById("dropdown");

btn1.addEventListener("click", () => {
  if (card.style.display === "block") {
    card.style.display = "none";
  } else {
    card.style.display = "block";
  }
});
