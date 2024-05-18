document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');
    const nameInput = document.getElementById('name-input');
    const submitButton = document.getElementById('submit-button');
    const fateResults = document.getElementById('fate-results');

    const fates = [
        "Prince",
        "Monke, drunken",
        "Merchant"
    ];
    
    const nameFatePairs = {};

    // gets the current tab clicked and makes it "current" displaying its content
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            tabs.forEach(item => item.classList.remove('current'));
            contents.forEach(item => item.classList.remove('current'));

            tab.classList.add('current');
            document.getElementById(tabId).classList.add('current');
        });
    });

    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            const randomFate = fates[Math.floor(Math.random() * fates.length)];
            nameFatePairs[name] = randomFate;
            displayResults();
            nameInput.value = '';
        }
    });

    function displayResults() {
        fateResults.innerHTML = '';
        for (const [name, fate] of Object.entries(nameFatePairs)) {
            const resultItem = document.createElement('p');
            resultItem.textContent = `${name}: ${fate}`;
            fateResults.appendChild(resultItem);
        }
    }
});
