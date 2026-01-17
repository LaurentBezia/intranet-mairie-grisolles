fetch('../data/agents.json')
  .then(r => r.json())
  .then(agents => displayAgents(agents));

function displayAgents(agents) {
  const container = document.getElementById("annuaire");
  container.innerHTML = "";

  agents.forEach(a => {
    container.innerHTML += `
      <div class="card">
        <img src="${a.photo}">
        <h3>${a.prenom} ${a.nom}</h3>
        <p>${a.fonction}</p>
        <p>${a.service}</p>
        <p>📞 ${a.telephone}</p>
        <p>✉️ ${a.email}</p>
        <p>⏰ ${a.horaires}</p>
      </div>
    `;
  });
}
