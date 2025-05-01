// fonction générique pour charger un fragment HTML dans un container
function includeHTML(selector, url) {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Échec du chargement : ${res.status}`);
        return res.text();
      })
      .then(html => {
        document.querySelector(selector).innerHTML = html;
        // Une fois que le contenu est chargé, on peut initialiser le script pour le menu burger
        initBurgerMenu();  // Appeler la fonction pour initialiser le menu burger
      })
      .catch(err => console.error(err));
  }
  
  // Fonction pour initialiser le menu burger
  function initBurgerMenu() {
    const checkbox = document.getElementById('burger');
    const hidden = document.querySelector('.hiden');
  
    if (checkbox && hidden) {
      checkbox.addEventListener('change', function () {
        hidden.classList.toggle('active', checkbox.checked);
      });
    }
  }
  
  // on importe header et footer
  includeHTML('#header-placeholder', 'header.html');
  includeHTML('#footer-placeholder', 'footer.html');
  