/*Chirp Page*/
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("Show");

  const body = document.body;

  if (mobileMenu.classList.contains("Show")) {
    body.classList.add("mobile-menu-open");
  } else {
    body.classList.remove("mobile-menu-open");
  }
}

/*FAQ Page*/
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector("h3");
    const answer = item.querySelector("p");
    question.addEventListener("click", () => {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    });
  });
});
