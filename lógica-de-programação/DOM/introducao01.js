document.getElementById("titulo").textContent = "titulo alterado 2";

let p = document.getElementById("paragrafo");
//p.textContent = "outro <b>texto</b> continua com qualquer texto"; -- não funciona dessa maneira
p.innerHTML = "outro <b>texto</b> continua com qualquer texto";

let user = document.getElementById("user");
user.value = "Matheus Luan";

const lista = document.getElementById("listaTarefas");
let novaTarefa = "Aplicar à vagas de emprego";

lista.innerHTML = lista.innerHTML + "<li>teste</li>";