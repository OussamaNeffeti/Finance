function calculateAccount() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interest_rate = parseFloat(document.getElementById('interest_rate').value) / 100;
    const term = parseFloat(document.getElementById('term').value);
    const compound_frequency = parseFloat(document.getElementById('compound_frequency').value);

    const interet_simple = calculateSimpleInterest(principal, interest_rate, term);
    const interet_compose = calculateCompoundInterest(principal, interest_rate, term, compound_frequency);
    const annuite = calculateAnnuity(principal, interest_rate, term);

    const results = document.getElementById('results');
    results.innerHTML = `
        <p>Intérêt Simple : ${interet_simple}</p>
        <p>Intérêt Composé : ${interet_compose}</p>
        <p>Annuité : ${annuite}</p>
    `;
}

function calculateSimpleInterest(principal, interest_rate, term) {
    return principal * interest_rate * term;
}

function calculateCompoundInterest(principal, interest_rate, term, compound_frequency) {
    const compound_frequency_factor = 1 + interest_rate / compound_frequency;
    const total_times = term * compound_frequency;
    const amount = principal * Math.pow(compound_frequency_factor, total_times);
    return amount - principal;
}

function calculateAnnuity(principal, interest_rate, term) {
    const total_times = term * 1;
    const payment = principal * interest_rate / (1 - Math.pow(1 + interest_rate, -total_times));
    return payment * term;
}