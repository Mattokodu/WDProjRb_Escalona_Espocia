let population = [];
let generation = 0;

const populationDiv = document.getElementById("population");
const generationText = document.getElementById("generation");
const frequenciesText = document.getElementById("frequencies");
const frequenciesText2 = document.getElementById("frequencies2");

function createInitialPopulation(size, prob) {
  population = [];
  generation = 0;

  for (let i = 0; i < size; i++) {
    population.push(Math.random() < prob ? "A" : "a");
  }

  updateDisplay();
}

function nextGeneration() {
  let size = population.length;
  let newpop = [];

  for (let i = 0; i < size; i++) {
    let randomParent1 = population[Math.floor(Math.random() * size)];
    let randomParent2 = population[Math.floor(Math.random() * size)];
    let randomParent = '';
    if (randomParent1 == "a" && randomParent2 == "a") {
        randomParent = "a";
    }
    else {
        randomParent = "A";
    }
    newpop.push(randomParent);
  }

  population = newpop;
  generation++;
  updateDisplay();
}

function updateDisplay() {
  populationDiv.innerHTML = "";

  let countA = 0;

  population.forEach(allele => {
    const div = document.createElement("div");
    div.classList.add("individual", allele);
    populationDiv.appendChild(div);

    if (allele === "A") { countA++; }
  });

  const frequA = (countA / population.length).toFixed(2);
  const frequa = (1 - frequA).toFixed(2);

  generationText.textContent = `Generation: ${generation}`;
  frequenciesText.textContent =
    `Allele A distribution: ${frequA} | Allele a distribution: ${frequa}`;

  if (frequA === "1.00" || frequA === "0.00") {
    frequenciesText.textContent += "- Allele fixed!";
  }
}

// Event Listeners
document.getElementById("nextGen").addEventListener("click", nextGeneration);



document.getElementById("reset").addEventListener("click", () => {
  const size = Number(document.getElementById("populationSize").value);
  const prob = Number(document.getElementById("allele-distrib").value);
  createInitialPopulation(size, prob);
});

// Initialize
createInitialPopulation(10, 0.5);
