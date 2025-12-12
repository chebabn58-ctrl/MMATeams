// Exemple simple pour tester SonarCloud - version sécurisée

// Bonne pratique : éviter totalement eval
function executeAction(action) {
    const actionsAllowed = {
        log: () => console.log("Test sécurité"),
        hello: () => console.log("Hello !"),
    };

    if (actionsAllowed[action]) {
        actionsAllowed[action]();
    } else {
        console.warn("Action non autorisée !");
    }
}

// Appel de la fonction avec une action autorisée
executeAction("log");
