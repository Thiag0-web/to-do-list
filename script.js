class ToDoList {
    constructor() {
        this.taskList = document.querySelector("ul");
    }

    addTask() {
        let item = document.getElementById("addTask").value //Pega o valor do item inserido
        
        if (item.length < 1) {
            alert("A tarefa precisa ter pelo menos 5 caracteres.");
             return//O return faz bloquear caso for menor que 1
        }
    
        let li = document.createElement("li")//Cria um novo elemento HTML do tipo <li>
        li.innerHTML = item //Coloca o valor de "item" dentro do <li></li>

        
        let removeButton = document.createElement("button") // Criando o botão de remover ❌
        removeButton.textContent = "❌";
        removeButton.classList.add("remove-btn");

        // Ligando a função de remoção ao botão
        removeButton.onclick = () => {
            this.removeTask(li);
        };

        // Adicionando o botão à li
        li.appendChild(removeButton);

        // Adicionando o item à lista
        this.taskList.appendChild(li);

        // Limpando o campo de entrada
        document.getElementById("addTask").value = "";
    }

    removeTask(li) {
        // Removendo o item da lista
        li.remove();
    }
}

// Criando uma instância da classe ToDoList
const toDoList = new ToDoList();

// Adicionando evento ao botão "Adicionar" para chamar a função addTask da classe
document.querySelector("button").addEventListener("click", () => {
    toDoList.addTask();
});
