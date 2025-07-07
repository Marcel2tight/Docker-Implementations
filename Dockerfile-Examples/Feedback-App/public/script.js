const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;

  // Simulate checking if feedback exists
  if (feedback === 'existing feedback') {
    window.location.href = 'exists.html';
  } else {
    // Simulate submitting feedback
    console.log(`Feedback submitted: ${feedback}`);
    window.location.href = 'public/index.html';
  }
});
