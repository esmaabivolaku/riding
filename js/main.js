const faqItems = document.querySelectorAll(".eb-faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".eb-faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
