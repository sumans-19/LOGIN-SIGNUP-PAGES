const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const formTitle = document.getElementById('formTitle');
const toggleLogin = document.getElementById('toggleLogin');
const toggleSignup = document.getElementById('toggleSignup');

toggleLogin.addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    formTitle.innerText = 'Login';
});

toggleSignup.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    formTitle.innerText = 'Signup';
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Redirect to main page
    window.location.href = 'main.html'; // Ensure you create main.html
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Redirect to main page
    window.location.href = 'main.html'; // Ensure you create main.html
});
