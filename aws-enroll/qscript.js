// Correct answers array
const correctAnswers = ['b', 'b', 'b'];

// Function to check the user's answers
function checkAnswers() {
  let score = 0;
  const form = document.getElementById('quizForm');
  
  const q1 = form.q1.value;
  const q2 = form.q2.value;
  const q3 = form.q3.value;
  
  // Calculate score
  if (q1 === correctAnswers[0]) score++;
  if (q2 === correctAnswers[1]) score++;
  if (q3 === correctAnswers[2]) score++;

  // Show the result
  const resultDiv = document.getElementById('result');
  const scoreDisplay = document.getElementById('score');
  
  scoreDisplay.textContent = `You got ${score} out of ${correctAnswers.length} correct.`;
  resultDiv.classList.remove('hidden');
}
