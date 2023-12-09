//-------------------------------------------------------------------------------
//-------------------------- Avec l'option Congratulation -----------------------
//-------------------------------------------------------------------------------


const form = document.getElementById('quiz-form');
// //Afin de ne pas afficher par défaut le message de félicitation
const CongratMessage = document.getElementById('alert');
CongratMessage.innerHTML = '';

// Pour eviter la recherche constante des questions et des réponses
const questions = Array.from(form.querySelectorAll('.question-item'));

// Fonction qui vérifie une question spécifique
function checkQuestion(question) {
  const answerSelected = question.querySelector('input:checked').value;
  const estCorrect = answerSelected === 'true';
  question.style.color = estCorrect ? 'green' : 'red';
  return estCorrect; // Retourne vrai si la réponse est correcte, sinon faux
}
//Empêche la page de se rafraichir après avoir submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Reduce pour compter le nombre de réponses correctes
  const nombreReponsesCorrectes = questions.reduce((count, question) => {
    return count + (checkQuestion(question) ? 1 : 0);
  }, 0);

  // Affiche le message approprié dans la div avec l'ID "alert"
  if (nombreReponsesCorrectes === questions.length) {
    CongratMessage.innerHTML = 'Félicitation !! Vous avez tout bon!';
  } else{
    CongratMessage.innerHTML = `Vous avez ${nombreReponsesCorrectes}/ ${questions.length} réponses correctes.`;
  }
});






//-------------------------------------------------------------------------------
//-------------------------- Sans l'option Congratulation -----------------------
//-------------------------------------------------------------------------------

// const form = document.getElementById('quiz-form');

// //Afin de ne pas afficher par défaut le message de félicitation
// const CongratMessage = document.getElementById('alert');
// CongratMessage.innerHTML = '';

// // Pour eviter la recherche constante des questions et des réponses
// const questions = Array.from(form.querySelectorAll('.question-item'));

// // Fonction qui vérifie une question spécifique
// function checkQuestion(question) {
//   const answerSelected = question.querySelector('input:checked').value;
//   const estCorrect = answerSelected === 'true';
//   question.style.color = estCorrect ? 'green' : 'red';
// }

// //Empêche la page de se rafraichir après avoir submit
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Parcourir et vérifier chaque question
//   questions.forEach(checkQuestion);
// });




