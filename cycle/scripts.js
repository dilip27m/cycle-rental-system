document.addEventListener("DOMContentLoaded", function() {
    const cyclesContainer = document.getElementById("cycles");

    // Function to create a cycle card
    function createCycleCard() {
        const card = document.createElement("div");
        card.classList.add("cycle-card");

        const name = document.createElement("h2");
        name.textContent = "Cycle Name";

        const description = document.createElement("p");
        description.textContent = "Description of the cycle.";

        const rentPrice = document.createElement("p");
        rentPrice.textContent = "Rent Price: $10/hour";

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(rentPrice);

        cyclesContainer.appendChild(card);
    }

    // Create sample cycle cards
    for (let i = 0; i < 3; i++) {
        createCycleCard();
    }
});
