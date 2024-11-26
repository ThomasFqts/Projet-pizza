let bouton = document.getElementsByClassName("button")[0];
let wrapper = document.getElementsByClassName("wrapper")[0];
let preview = document.getElementsByClassName("preview")[0];

bouton.addEventListener('click', function () {
    fetch('pizzas.json')
        .then((wrapper) => wrapper.json())
        .then((data) => {
            console.log(data);
            createPizzas(data);
        });
});


function createPizzas(_data) {
    preview.innerHTML = "";
    let name = document.createElement('p');
    name.setAttribute('class', 'header');
    name.innerHTML = _data.Name;

    preview.appendChild(name);

    let slogan = document.createElement('p');
    slogan.setAttribute('class', 'header');
    slogan.innerHTML = _data.Slogan;

    preview.appendChild(slogan);

    let carte = document.createElement('div');
    let nom;
    let prix;
    let img;
    let pizza;
    let listeingredient;

    for (let i = 0; i < _data.Pizzas.length; i++) {

        carte.setAttribute('class', 'carte');

        pizza = document.createElement('div');
        pizza.setAttribute('class', 'pizza');

        nom = document.createElement('h1');
        nom.innerHTML = _data.Pizzas[i].Nom;
        pizza.appendChild(nom);
        
        prix = document.createElement('h2');
        prix.innerHTML = _data.Pizzas[i].Prix;
        pizza.appendChild(prix);

        img = document.createElement('img');
        img.setAttribute('class', 'img');
        img.src = _data.Pizzas[i].Image;
        pizza.appendChild(img);

        listeingredient = document.createElement('ul');
        for (let j = 0; j < _data.Pizzas[i].Ingredients.length; j++) {
            let ingredient = document.createElement('li');
            ingredient.innerHTML = _data.Pizzas[i].Ingredients[j];
            listeingredient.appendChild(ingredient);
        }

        pizza.appendChild(listeingredient);
        carte.appendChild(pizza)
    }

    preview.appendChild(carte);
}