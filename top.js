// Sélectionnez la case à cocher
const checkbox = document.getElementById('burger');

// Sélectionnez le menu (utilisez le même nom de classe que dans le HTML et le CSS)
const hidden = document.querySelector('.hiden');

// Ajoutez un gestionnaire d'événement pour le changement d'état de la case à cocher
checkbox.addEventListener('change', function () {
    // Ajoutez ou supprimez la classe 'active' en fonction de l'état de la case à cocher
    hidden.classList.toggle('active', checkbox.checked);
});