function welcome() {
  console.log("Siemka, moja strona jest już na Github. Zapraszam!")
}

welcome();

const background = () => {
  document.body.classList.toggle("section__grey");
};

const contactwithme = () => {

  contactData.classList.toggle("section__contactData--show");
  contactData.classList.contains("section__contactData--show")
    ? (contactButton.innerText = "Ukryj")
    : (contactButton.innerText = "Kontakt");
};

const init = () => {
  const backgroundcolor = document.querySelector(".section__changeBackground");
  backgroundcolor.addEventListener("click", background);
  body = document.querySelector(".section__body");

  const contactButton = document.querySelector(".section__showContactWithMe");
  contactButton.addEventListener("click", contactwithme);
  contactData = document.querySelector(".section__contactData");

};



init();











