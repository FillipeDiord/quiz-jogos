function handleCheckAnswers() {
  const answersQuestions = [`C`, `D`, `A`, `B`,];
  
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
  
    backToTop();
    
    let counterScore = 0;
  
    showPanelScore(counterScore, score);
  
  });
}

function backToTop() {
  scrollTo(0, 0);
}

function showPanelScore(counterScore, score) {
  const finalResult = document.querySelector(`.result`);
  
  finalResult.classList.remove(`d-none`);

  const idInterval = setInterval(() => {
    if (counterScore === score) {
      clearInterval(idInterval);
    }

    finalResult.querySelector(`span`).textContent = `${counterScore}%`;

    counterScore++

  }, 10);
}

handleCheckAnswers();