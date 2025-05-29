function toggleButton() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const article = button.closest("article");
      const answer = article.querySelector(".faq-answer");
      const icon = article.querySelector("img");

      const isVisible = !answer.classList.contains("hidden");

      const allAnswers = document.querySelectorAll(".faq-answer");
      const allIcons = document.querySelectorAll("article img");

      allAnswers.forEach((ans) => ans.classList.add("hidden"));
      allIcons.forEach((img) => {
        img.src = "/images/icon-plus.svg";
      });

      if (!isVisible) {
        answer.classList.remove("hidden");
        icon.src = "/images/icon-minus.svg";
      }
    });
  });
}
toggleButton();
