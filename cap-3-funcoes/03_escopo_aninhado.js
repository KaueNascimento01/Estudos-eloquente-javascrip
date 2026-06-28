//Função com escopo aninhado que exibe a quantidade necessária de ingredientes para fazer uma porção de homus com base no fator multiplicador
const homus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;

        if (ingredientAmount > 1) {
            unit += "s";
        };
    console.log(`${ingredientAmount} ${unit} ${name}`)
    };
    

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

homus(1);