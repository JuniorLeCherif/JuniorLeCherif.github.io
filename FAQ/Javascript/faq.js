console.log("salut je suis JUnior le DEV");

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// code javascript permettant le clic de la flèche ci-dessus !
