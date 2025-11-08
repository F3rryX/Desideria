// Database delle pizze - TUTTI GLI INGREDIENTI IN MINUSCOLO per evitare problemi di confronto
const pizzaDatabase = {
    classiche: [
        { name: "Marinara", ingredients: ["pomodoro", "aglio", "origano"] },
        { name: "Capricciosa", ingredients: ["pomodoro", "mozzarella", "prosciutto cotto", "funghi", "carciofini"] },
        { name: "Carciofi", ingredients: ["pomodoro", "mozzarella", "carciofini"] },
        { name: "Funghi", ingredients: ["pomodoro", "mozzarella", "funghi"] },
        { name: "Funghi freschi", ingredients: ["pomodoro", "mozzarella", "funghi freschi"] },
        { name: "Funghi porcini", ingredients: ["pomodoro", "mozzarella", "funghi porcini"] },
        { name: "Margherita", ingredients: ["pomodoro", "mozzarella"] },
        { name: "Napoli", ingredients: ["pomodoro", "mozzarella", "acciughe", "origano"] },
        { name: "Primavera", ingredients: ["pomodoro", "mozzarella", "pomodoro a fette", "capperi", "acciughe", "origano"] },
        { name: "Prosciutto cotto", ingredients: ["pomodoro", "mozzarella", "prosciutto cotto"] },
        { name: "Prosciutto cotto e funghi", ingredients: ["pomodoro", "mozzarella", "prosciutto cotto", "funghi"] },
        { name: "Romana", ingredients: ["pomodoro", "mozzarella", "acciughe", "capperi", "origano"] },
        { name: "Salsiccia", ingredients: ["pomodoro", "mozzarella", "salsiccia"] },
        { name: "4 Formaggi", ingredients: ["pomodoro", "mozzarella", "latteria"] },
        { name: "4 Stagioni", ingredients: ["pomodoro", "mozzarella", "prosciutto cotto", "funghi", "carciofi"] },
        { name: "Asparagi", ingredients: ["pomodoro", "mozzarella", "asparagi"] },
        { name: "Bresaola", ingredients: ["pomodoro", "bufala", "bresaola", "rucola", "grana"] },
        { name: "Bufala", ingredients: ["pomodoro", "bufala"] },
        { name: "Buffalo Bill", ingredients: ["pomodoro", "mozzarella", "bufala", "pomodorini", "grana"] },
        { name: "Cipolla", ingredients: ["pomodoro", "mozzarella", "cipolla"] },
        { name: "Così Così", ingredients: ["pomodoro", "mozzarella", "gorgonzola", "peperoni", "broccoli", "pancetta affumicata", "wurstel", "salame piccante"] },
        { name: "Del Capo", ingredients: ["pomodoro", "mozzarella", "salame piccante", "pancetta affumicata", "cipolla", "gorgonzola"] },
        { name: "Del Vecchio", ingredients: ["pomodoro", "mozzarella", "salmone", "gamberetti"] },
        { name: "Delizia", ingredients: ["pomodoro", "mozzarella", "salmone", "spinaci", "radicchio"] },
        { name: "Desideria", ingredients: ["specialità della casa"] },
        { name: "Diavola", ingredients: ["pomodoro", "mozzarella", "salame piccante"] },
        { name: "Gamberetti", ingredients: ["pomodoro", "mozzarella", "gamberetti"] },
        { name: "Gorgonzola", ingredients: ["pomodoro", "mozzarella", "gorgonzola"] },
        { name: "Marlon Brando", ingredients: ["pomodoro", "mozzarella", "salame piccante", "pancetta affumicata", "prosciutto cotto", "spinaci", "gorgonzola"] },
        { name: "Mediterranea", ingredients: ["pomodoro", "burrata", "melanzane", "funghi freschi", "pomodorini", "rucola"] },
        { name: "Melanzane", ingredients: ["pomodoro", "mozzarella", "melanzane"] },
        { name: "Pancetta affumicata", ingredients: ["pomodoro", "mozzarella", "pancetta affumicata"] },
        { name: "Pancetta arrotolata", ingredients: ["pomodoro", "mozzarella", "pancetta arrotolata"] },
        { name: "Peperoni", ingredients: ["pomodoro", "mozzarella", "peperoni"] },
        { name: "Pippo", ingredients: ["specialità del pizzaiolo"] },
        { name: "Prosciutto Crudo", ingredients: ["pomodoro", "mozzarella", "prosciutto crudo"] },
        { name: "Pugliese", ingredients: ["pomodoro", "mozzarella", "salame piccante", "cipolla"] },
        { name: "Rock", ingredients: ["pomodoro", "mozzarella", "salame piccante", "pancetta affumicata", "spinaci", "gorgonzola"] },
        { name: "Salmone", ingredients: ["pomodoro", "mozzarella", "salmone"] },
        { name: "Spinaci", ingredients: ["pomodoro", "mozzarella", "spinaci"] },
        { name: "Stracchino", ingredients: ["pomodoro", "mozzarella", "stracchino"] },
        { name: "Stria Angy", ingredients: ["pancetta arrotolata", "spinaci", "funghi freschi", "scamorza", "crema di pistacchio"] },
        { name: "Tonno", ingredients: ["pomodoro", "mozzarella", "tonno"] },
        { name: "Tonno e Cipolla", ingredients: ["pomodoro", "mozzarella", "tonno", "cipolla"] },
        { name: "Verdure", ingredients: ["pomodoro", "mozzarella", "verdure di stagione", "grana"] },
        { name: "Wurstel", ingredients: ["pomodoro", "mozzarella", "wurstel"] }
    ],
    bianche: [
        { name: "5 Formaggi", ingredients: ["mozzarella", "gorgonzola", "grana", "speck", "rucola"] },
        { name: "Blues", ingredients: ["mozzarella", "pomodoro a fette", "melanzane", "acciughe", "origano"] },
        { name: "Cicciolina", ingredients: ["mozzarella", "ciccioli", "gorgonzola", "grana"] },
        { name: "Crema di Asparagi", ingredients: ["mozzarella", "asparagi", "gorgonzola", "grana"] },
        { name: "Crema di carciofi", ingredients: ["mozzarella", "carciofi", "gorgonzola", "grana"] },
        { name: "Crema di Gamberetti", ingredients: ["mozzarella", "gamberetti", "pomodorini", "rucola", "grana"] },
        { name: "Crema di Noci", ingredients: ["mozzarella", "noci", "panna", "gorgonzola", "grana", "speck", "radicchio"] },
        { name: "Crema di Peperoni", ingredients: ["mozzarella", "peperoni", "pancetta arrotolata", "gorgonzola", "grana"] },
        { name: "Crema di Pistacchio", ingredients: ["mozzarella", "panna", "grana", "prosciutto cotto", "crema di pistacchio"] },
        { name: "Crema di Radicchio", ingredients: ["mozzarella", "pancetta arrotolata", "radicchio", "gorgonzola", "grana", "glassa di aceto balsamico"] },
        { name: "Crema di Zucca", ingredients: ["mozzarella", "zucca", "gorgonzola", "grana", "rucola"] },
        { name: "Friarielli", ingredients: ["bufala", "friarielli", "salsiccia"] },
        { name: "Panna", ingredients: ["mozzarella", "panna", "prosciutto cotto", "funghi freschi", "grana"] },
        { name: "Patacca", ingredients: ["mozzarella", "pancetta arrotolata", "patate lesse", "grana"] },
        { name: "Porcini tartufata", ingredients: ["mozzarella", "porcini", "crema di tartufo", "grana"] },
        { name: "Rucola", ingredients: ["mozzarella", "gorgonzola", "stracchino", "grana", "rucola"] },
        { name: "Scamorza", ingredients: ["mozzarella", "scamorza affumicata", "speck"] },
        { name: "Sitting Bull", ingredients: ["bufala", "acciughe", "pelati", "origano"] },
        { name: "Vecchia Modena", ingredients: ["mozzarella", "pancetta arrotolata", "grana", "glassa di aceto balsamico"] }
    ],
    calzoni: [
        { name: "Calzone", ingredients: ["pomodoro", "mozzarella", "prosciutto cotto", "funghi"] },
        { name: "Calzone Farcito", ingredients: ["pomodoro", "mozzarella", "prosciutto cotto", "funghi", "carciofi", "salsiccia"] }
    ]
};

// Funzione per ottenere tutte le pizze o per categoria
function getPizzas(category = 'all') {
    if (category === 'all') {
        return [
            ...pizzaDatabase.classiche,
            ...pizzaDatabase.bianche,
            ...pizzaDatabase.calzoni
        ];
    }
    return pizzaDatabase[category] || [];
}

// Funzione per ottenere il nome della categoria in italiano
function getCategoryName(category) {
    const names = {
        'classiche': 'Classiche',
        'bianche': 'Bianche',
        'calzoni': 'Calzoni',
        'all': 'Tutte le Pizze'
    };
    return names[category] || category;
}
