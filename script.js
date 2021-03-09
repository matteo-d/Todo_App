const form = document.getElementById("form");
const input = document.getElementById("input");
// todos = Ul
const todos = document.getElementById("todos");
// Lorsque le le form est soumit...
form.addEventListener('submit', (e) => {
    //Empeche le reload de la page ( comportement nromal submition sur le form)
    e.preventDefault();
    // input = valeur taper dans l'input
    const todoText = input.value;
    // Si l'input a une value entré
    if(todoText) {
        // Créer un li sous le ul
        const todoEl = document.createElement('li');
        // Le texte du li sera l'input de l'user
        todoEl.innerText = todoText;
        // Interrupteur activation class / desactivation
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });
        // Retirer l'élément todo au clic droit grace a contextmenu
        todoEl.addEventListener('contextmenu',  (e) => {
            e.preventDefault();
            todoEl.remove();
        })
        // Pas compris
        todos.appendChild(todoEl);

        // Vider l'input après submition
        input.value = ''; 
    }
});

// Stocker les notes en local

