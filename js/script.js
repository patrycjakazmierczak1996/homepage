console.log("Siemka, witam wszystkich developerów. Mój kod jest już w Git.");

let contactButton = document.querySelector(".section__contactwithme");
let contactData = document.querySelector(".section__contactData");
contactButton.addEventListener("click", () => {
  contactData.classList.toggle("section__contactData--show");
  contactData.classList.contains("section__contactData--show")
    ? (contactButton.innerText = "Ukryj")
    : (contactButton.innerText = "Kontakt");
});

let background = document.querySelector(".section__background");
let body = document.querySelector(".section__body");


background.addEventListener("click", () => {
    body.classList.toggle("section__grey");
});


