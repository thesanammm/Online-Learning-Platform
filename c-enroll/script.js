const video = document.getElementById("myVideo");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const certificate = document.getElementById("certificate");
const quizButton = document.getElementById("quizButton");

// Start video
function playVideo() {
  video.play();
  certificate.style.display = "none"; // Hide certificate when video starts
  quizButton.style.display = "none";  // Hide quiz button when video starts
}

// Pause video
function pauseVideo() {
  video.pause();
}

// Resume video
function resumeVideo() {
  video.play();
}

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.value = percentage;
  progressPercent.textContent = `${Math.floor(percentage)}%`;

  // Show quiz button and certificate when video reaches 100%
  if (Math.floor(percentage) === 100) {
    showCertificate();
    showQuizButton();
  }
});

// Show certificate when video is completed
function showCertificate() {
  certificate.style.display = "block";  // Display certificate when video reaches 100%
}

// Show the quiz button when video is completed
function showQuizButton() {
  quizButton.style.display = "inline-block";  // Display quiz button
}

// Redirect to the quiz page
function takeQuiz() {
  window.location.href = "qindex.html";  // Redirect to quiz page (create a quiz.html file for the quiz)
}
