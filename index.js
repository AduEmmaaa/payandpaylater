const btn1 = document.getElementById("icona");
const card = document.getElementById("dropdown");
const showbtn = document.getElementById("showbtn");
const showbtn1 = document.getElementById("showbtn1");
const para = document.getElementById("para");
const para1 = document.getElementById("para1");

btn1.addEventListener("click", () => {
  if (card.style.display === "block") {
    card.style.display = "none";
  } else {
    card.style.display = "block";
  }
});

showbtn.addEventListener("click", () => {
  if (para.style.display === "block") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
});

showbtn1.addEventListener("click", () => {
  if (para1.style.display === "block") {
    para1.style.display = "none";
  } else {
    para1.style.display = "block";
  }
});
