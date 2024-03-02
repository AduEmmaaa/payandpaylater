const form = document.getElementById("first");
const card = document.getElementById("card");

form.addEventListener("click", () => {
  //   preventDefault();
  card.style.display = "flex";
  form.style.display = "block";
});
