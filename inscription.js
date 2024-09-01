

document.addEventListener('DOMContentLoaded', function() {
    const formulaire = document.getElementById('monFormulaire');

    formulaire.addEventListener('submit', function(event) {
        // Empêche la soumission du formulaire si ce n'est pas valide
        if (!formulaire.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            formulaire.classList.add('was-validated');
            return; // Arrête le traitement si le formulaire n'est pas valide
        }

        // Si le formulaire est valide, éviter l'action par défaut
        event.preventDefault(); 

        // Effectuez ici des validations supplémentaires ou un traitement des données si nécessaire
        
        // Redirection vers une autre page
        window.location.href = 'PageAcceuil/index.html'; // Assurez-vous que cette URL est correcte
    }, false);

    // Validation en temps réel
    const inputs = formulaire.querySelectorAll('input, select');
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
