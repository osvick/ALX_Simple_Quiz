function checkAnswer() {
  const correctAnswer = "4"; // Define the correct answer

  // Get the selected radio input
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  const feedback = document.getElementById("feedback");

  // Check if an option was selected
  if (!selectedOption) {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "#dc3545"; // red
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // green
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // red
  }
}

// Add click event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);