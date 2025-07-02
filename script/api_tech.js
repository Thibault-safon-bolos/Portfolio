async function chargerArticlesDevTo() {
    const container = document.getElementById("devto-articles");

    try {
      const response = await fetch("https://dev.to/api/articles?per_page=9");
      const articles = await response.json();

      articles.forEach(article => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";

        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description || "Pas de description."}</p>
              <a href="${article.url}" target="_blank" class="btn btn-primary">Lire sur Dev.to</a>
            </div>
            <div class="card-footer text-muted small">
              Par ${article.user.name} le ${new Date(article.published_at).toLocaleDateString()}
            </div>
          </div>
        `;
        container.appendChild(col);
      });
    } catch (error) {
      console.error("Erreur chargement Dev.to :", error);
      container.innerHTML = "<p class='text-danger'>Impossible de charger les articles Dev.to.</p>";
    }
  }

  chargerArticlesDevTo();