

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        // Empêche la soumission du formulaire si ce n'est pas valide
        if (!loginForm.checkValidity()) {
            event.preventDefault(); // Empêche la soumission du formulaire
            event.stopPropagation(); 
            loginForm.classList.add('was-validated'); // Ajoute la classe pour les styles de validation
            return; 
        }

        // Formulaire valide; empêche la soumission par défaut pour faire la redirection
        event.preventDefault();

        // Redirection vers une autre page après une validation réussie
        window.location.href = '/PageAcceuil/index.html'; // Remplacez par l'URL de votre choix
    }, false);

    // Validation en temps réel
    const inputs = loginForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });
});
