// fonction générique pour charger un fragment HTML dans un container
function includeHTML(selector, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Échec du chargement : ${res.status}`);
      return res.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(err => console.error(err));
}

// on importe header et footer
includeHTML('#header-placeholder', 'header.html');
includeHTML('#footer-placeholder', 'footer.html');
