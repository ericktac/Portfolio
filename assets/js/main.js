// Seleciona a área onde os projetos serão inseridos
const projectSection = document.querySelector("#projetos");

// Criar container interno (para manter tudo organizado)
const container = document.createElement("div");
container.classList.add("projects-container");

if (!projects || projects.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add("no-projects-message");
    emptyMessage.classList.add("indentado");
    emptyMessage.textContent = "Nenhum projeto encontrado no momento.";
    container.appendChild(emptyMessage);
} else {
    // Gerar cada projeto
    projects.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("project");

        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <a href="${p.github}" target="_blank">Ver no GitHub</a>
        `;

        container.appendChild(card);
    });
}

// Inserir na página
projectSection.appendChild(container);