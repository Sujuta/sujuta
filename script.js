document.getElementById('loginBtn').addEventListener('click', function() {
    showForm('loginForm');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    showForm('registerForm');
});

document.getElementById('forgotPasswordLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    showForm('forgotPasswordForm');
});

function showForm(formId) {
    // Hide all forms
    document.querySelectorAll('.form').forEach(form => {
        form.classList.add('hidden');
    });

    // Show the selected form
    document.getElementById(formId).classList.remove('hidden');
}

// Show the login form by default
showForm('loginForm');