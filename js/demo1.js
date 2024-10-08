// Email validation function
function validateEmail(email) {
    return email.includes('@') && email.endsWith('gmail.com');
  }
  function validateUsername(username) {
    return username.trim() !== '';  // Ensures the username is not empty
}
  
  document.getElementById('validationForm').addEventListener('submit', function(event) {
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;
  
      // Validate username
      if (!validateUsername(usernameInput.value)) {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Validate email
    if (!validateEmail(emailInput.value)) {
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // Validate password
    if (passwordInput.value.trim() === '') {
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }
  
    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }else {
        // If validation is successful, redirect to courses.html
        event.preventDefault(); 
        window.location.href = 'courses.html'; // Redirect to index.html if validation succeeds
      }
  });
  
 // Password show/hide toggle
const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePasswordButton.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  // Change the icon of the eye button depending on the password visibility
  this.textContent = type === 'password' ? '👁' : '🙈'; // Adjust this to your desired icons or text
});
  