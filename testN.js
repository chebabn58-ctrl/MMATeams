// Exemple simple pour tester SonarCloud - sécurité

// Mauvaise pratique : utiliser eval (SonarCloud le détectera comme vulnérabilité)
function executeCode(userInput) {
    eval(userInput); // ⚠️ Évité en vrai code !
}

// Appel de la fonction avec une chaîne de test
executeCode("console.log('Test sécurité')");
