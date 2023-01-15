const correctAnswers = ["C", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, i) => {
    if (answer === correctAnswers[i]) {
      score += 25;
    }
  });

  // going to the top of page
  scrollTo(0, 0);

  // showing score
  result.classList.remove("d-none");

  let i = 0;
  const timer = setInterval(() => {
    result.querySelector("span").innerText = `${i}%`;
    if (i === score) {
      clearInterval(timer);
    } else {
      i++;
    }
  }, 20);
});
