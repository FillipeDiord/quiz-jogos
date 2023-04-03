const answersQuestions = [`A`, `A`, `A`, `A`,];

const form = document.querySelector(`form`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  let score = 0;

  answersUser = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  answersUser.forEach((response, index) => {
    if (response === answersQuestions[index]) {
      score += 25;
    }
  });

  alert(`Você conseguiu: ${score} pontos`);

});