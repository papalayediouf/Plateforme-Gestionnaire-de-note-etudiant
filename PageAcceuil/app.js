


// Initialisation des variables globales
let nbr_etudiant = document.querySelector(".nbr-etudiant");
let totalEtudiants = 0;

let sommes_des_notes = document.querySelector(".sommes-des-notes");
let sommeNotes = 0;

let Moyenne_plus_grand = document.querySelector(".Moyenne-plus-grand");
let maxMoyenne = 0;

let tr = null; // Pour stocker la ligne en cours de modification

// STORAGE
// tableauBody.innerHTML = localStorage.getItem("table")

// STOREGE 



// Fonction pour ajouter des étudiants
function f() {
    let nomEtudiant = document.getElementById("nom").value;
    let noteEtudiant = parseFloat(document.getElementById("note").value); 
    let moyenneEtudiant = parseFloat(document.getElementById("moyenne").value);

    if (nomEtudiant === '' || isNaN(noteEtudiant) || isNaN(moyenneEtudiant)) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    let tableauBody = document.getElementById("tableauBody");

    let table = document.createElement("tr");
    table.innerHTML = `
        <td>${nomEtudiant}</td>
        <td>${noteEtudiant}</td>
        <td>${moyenneEtudiant}</td>
        <td>
            <button class="btn btn-warning btn-actions" onclick="modification(this)">Modifier</button>
            <button class="btn btn-danger btn-actions" onclick="supprimerLigne(this)">Supprimer</button>
        </td>
    `;

    tableauBody.appendChild(table);

    // localStorage.setItem("table" , tableauBody.innerHTML)

    totalEtudiants++;
    nbr_etudiant.textContent = totalEtudiants;

    sommeNotes += noteEtudiant;
    sommes_des_notes.textContent = sommeNotes;

    if (moyenneEtudiant > maxMoyenne) {
        maxMoyenne = moyenneEtudiant;
        Moyenne_plus_grand.textContent = maxMoyenne;
    }

    // Réinitialisation des champs
    document.getElementById("nom").value = "";
    document.getElementById("note").value = "";
    document.getElementById("moyenne").value = "";

}

// Fonction pour supprimer une ligne
function supprimerLigne(button) {
    let row = button.parentNode.parentNode;
    let note = parseFloat(row.cells[1].textContent);

    // Met à jour les statistiques
    totalEtudiants--;
    nbr_etudiant.textContent = totalEtudiants;
    
    sommeNotes -= note;
    sommes_des_notes.textContent = sommeNotes;

    if (parseFloat(row.cells[2].textContent) === maxMoyenne) {
        moyenneMaximal();
    }

    row.remove();
}

// Fonction pour mettre à jour la moyenne maximale
function moyenneMaximal() {
    let rows = document.querySelectorAll("#tableauBody tr");
    maxMoyenne = 0;
    rows.forEach(row => {
        let moyenne = parseFloat(row.cells[2].textContent);
        if (moyenne > maxMoyenne) {
            maxMoyenne = moyenne;
        }
    });
    Moyenne_plus_grand.textContent = maxMoyenne;
}

// Fonction pour éditer une ligne
function modification(button) {
    tr = button.parentNode.parentNode;
    document.getElementById("nom").value = tr.cells[0].textContent;
    document.getElementById("note").value = tr.cells[1].textContent;
    document.getElementById("moyenne").value = tr.cells[2].textContent;

    // Change le texte du bouton pour "Mettre à jour"
    let bouttonModificaton = document.querySelector(".btn-primary");
    bouttonModificaton.textContent = "Mettre à jour";
    bouttonModificaton.setAttribute("onclick", "mise_a_jour()");
}

// Fonction pour mettre à jour une ligne
function mise_a_jour() {
    let nomEtudiant = document.getElementById("nom").value;
    let noteEtudiant = parseFloat(document.getElementById("note").value);
    let moyenneEtudiant = parseFloat(document.getElementById("moyenne").value);

    if (nomEtudiant === '' || isNaN(noteEtudiant) || isNaN(moyenneEtudiant)) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Met à jour la ligne
    tr.cells[0].textContent = nomEtudiant;
    tr.cells[1].textContent = noteEtudiant;
    tr.cells[2].textContent = moyenneEtudiant;

    // Met à jour les statistiques
    sommeNotes = Array.from(document.querySelectorAll("#tableauBody tr")).reduce((acc, row) => acc + parseFloat(row.cells[1].textContent), 0);
    sommes_des_notes.textContent = sommeNotes;

    moyenneMaximal();

    // Réinitialise le formulaire
    document.getElementById("nom").value = "";
    document.getElementById("note").value = "";
    document.getElementById("moyenne").value = "";

    // Réinitialise le bouton à son texte d'origine
    let updateButton = document.querySelector(".btn-primary");
    updateButton.textContent = "Ajouter etudiant";
    updateButton.setAttribute("onclick", "f()");

   
}

// Fonction pour rechercher des étudiants
document.querySelector('input[aria-label="Search"]').addEventListener('input', function() {
    let rechercheEtudiants = this.value.toLowerCase();
    let rows = document.querySelectorAll("#tableauBody tr");
    rows.forEach(row => {
        let nom = row.cells[0].textContent.toLowerCase();
        if (nom.includes(rechercheEtudiants)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

