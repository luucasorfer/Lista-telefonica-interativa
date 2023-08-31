const cardFlutuante = document.createElement("div");
cardFlutuante.className = "fixed bg-gray-100 p-2 rounded shadow text-sm hidden";
document.body.appendChild(cardFlutuante);

function criarListaTelefonica() {
  const listaTelefonica = document.getElementById("lista-telefonica");
  const searchInput = document.getElementById("search");

  // Fazer uma solicitação GET à API JSON Server para buscar os contatos
  fetch("http://localhost:3001/contatos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((contato) => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded shadow cursor-pointer";
        card.dataset.nome = contato.nome.toLowerCase();
        card.dataset.setor = contato.setor.toLowerCase();

        const nome = document.createElement("h2");
        nome.className = "text-lg font-semibold";
        nome.textContent = contato.nome;

        const empresaSetor = document.createElement("p");
        empresaSetor.className = "text-sm";
        empresaSetor.textContent = `${contato.empresa} / ${contato.setor}`;

        const ramal = document.createElement("p");
        ramal.className = "text-sm";
        ramal.textContent = `Ramal: ${contato.ramal || "N/A"}`;

        card.appendChild(nome);
        card.appendChild(empresaSetor);
        card.appendChild(ramal);

        card.addEventListener("mouseenter", (event) => {
          mostrarCardInfo(event, contato);
        });

        card.addEventListener("mouseleave", () => {
          ocultarCardInfo();
        });

        listaTelefonica.appendChild(card);
      });

      // Adicionar evento de digitação na barra de busca
      searchInput.addEventListener("input", () => {
        const termoBusca = searchInput.value.toLowerCase();

        const cards = listaTelefonica.querySelectorAll(".bg-white");

        cards.forEach((card) => {
          const nomeContato = card.dataset.nome;
          const setorContato = card.dataset.setor;

          if (
            nomeContato.includes(termoBusca) ||
            setorContato.includes(termoBusca)
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
}

// Chama a função para criar a lista telefônica quando a página carrega
window.addEventListener("load", criarListaTelefonica);

// Função para mostrar o card flutuante com informações completas
function mostrarCardInfo(event, contato) {
  const cardNome = contato.nome;
  const cardEmpresaSetor = `${contato.empresa} / ${contato.setor}`;
  const cardRamal = `Ramal: ${contato.ramal || "N/A"}`;
  const cardCelPart = `Celular Particular: ${contato.cel_part || "N/A"}`;

  cardFlutuante.innerHTML = `
          <h2 class="text-xl font-semibold">${cardNome}</h2>
          <p>${cardEmpresaSetor}</p>
          <p>${cardRamal}</p>
          <p>${cardCelPart}</p>
      `;

  cardFlutuante.style.top = `${event.clientY + 10}px`;
  cardFlutuante.style.left = `${event.clientX + 10}px`;

  cardFlutuante.style.display = "block";
}

// Função para ocultar o card flutuante
function ocultarCardInfo() {
  cardFlutuante.style.display = "none";
}

// Chama a função para criar a lista telefônica quando a página carrega
window.addEventListener("load", criarListaTelefonica);