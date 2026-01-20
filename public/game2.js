const alleles = [
  { name: "A", color: "#4da6ff" }, // blue
  { name: "B", color: "#4dff88" }, // green
  { name: "C", color: "#ffd24d" }, // yellow
  { name: "D", color: "#ff4d4d" }  // red
];

function createInitialPopulation(size) {
  population = [];
  generation = 0;

  for (let i = 0; i < size; i++) {
    const allele = alleles[Math.floor(Math.random() * alleles.length)];
    population.push(allele);
  }

  updateDisplay();
}

function nextGeneration() {
  const size = population.length;

  // Random deaths
  let survivors = population.filter(() => Math.random() > 0.3);

  if (survivors.length === 0) {
    survivors = [population[Math.floor(Math.random() * size)]];
  }

  // Reproduction
  let newPopulation = [];
  for (let i = 0; i < size; i++) {
    const parent = survivors[Math.floor(Math.random() * survivors.length)];
    newPopulation.push(parent);
  }

  population = newPopulation;
  generation++;
  updateDisplay();
}


function updateDisplay() {
  populationDiv.innerHTML = "";

  let counts = {};

  population.forEach(individual => {
    const div = document.createElement("div");
    div.classList.add("individual");
    div.style.backgroundColor = individual.color;
    populationDiv.appendChild(div);

    counts[individual.name] = (counts[individual.name] || 0) + 1;
  });

  generationText.textContent = `Generation: ${generation}`;

  let text = "";
  for (let allele of alleles) {
    const freq = ((counts[allele.name] || 0) / population.length).toFixed(2);
    text += `${allele.name}: ${freq}  `;
  }

  // Detect allele loss
  const lost = alleles.filter(a => !counts[a.name]).map(a => a.name);

  if (lost.length > 0) {
    text += ` — Lost alleles: ${lost.join(", ")}`;
  }

  frequenciesText.textContent = text;
}
