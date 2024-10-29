// Fichier script.js

// Fonction pour créer un avatar
function createAvatar() {
    const avatarName = prompt("Entrez votre nom d'avatar :");
    const avatarRole = prompt("Choisissez une classe (Exemple : Chef de projet, Développeur, etc.)");

    const avatarSection = document.getElementById("profil");
    avatarSection.innerHTML = `
        <h2>Votre Avatar de Compétences</h2>
        <p>Nom : ${avatarName}</p>
        <p>Classe : ${avatarRole}</p>
        <button onclick="earnExperience()">Accomplir une mission</button>
        <div id="experience-bar">
            <div id="progress" style="width: 0%; background: #ff7878; height: 20px;"></div>
        </div>
    `;
}

// Fonction pour augmenter l'expérience
function earnExperience() {
    const progress = document.getElementById("progress");
    let currentWidth = parseInt(progress.style.width);

    if (currentWidth < 100) {
        currentWidth += 20; // Augmente la progression de 20% à chaque mission accomplie
        progress.style.width = currentWidth + "%";
        if (currentWidth >= 100) {
            alert("Félicitations ! Votre avatar a gagné un niveau !");
            progress.style.width = "0%"; // Réinitialise la barre de progression
        }
    }
}

// Fonction pour mettre à jour le leaderboard
function updateLeaderboard() {
    const leaderboardSection = document.getElementById("leaderboard");
    leaderboardSection.innerHTML += `
        <p>${prompt("Entrez votre nom pour le classement")} - Points : ${Math.floor(Math.random() * 100)}</p>
    `;
}

// Initialisation de l'avatar à la première visite de la page
window.onload = function () {
    createAvatar();
    updateLeaderboard();
};
