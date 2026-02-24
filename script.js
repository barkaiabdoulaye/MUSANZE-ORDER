// Récupérer les éléments
let qte = document.getElementById('qte');
let prix = document.getElementById('prix');
let totalSpan = document.getElementById('totalLive');

// Fonction de calcul
function calculerTotal() {
    totalSpan.textContent = qte.value * prix.value;
}

// Calcul en direct
qte.oninput = calculerTotal;
prix.oninput = calculerTotal;

// Validation avant envoi
document.querySelector('form').onsubmit = function() {
    if (qte.value < 1 || prix.value < 50) {
        alert("Quantité min 1kg, Prix min 50 RWF");
        return false;
    }
    return true;
}