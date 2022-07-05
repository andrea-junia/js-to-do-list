const NOVATAREFA = document.getElementById("novas-tarefa")
const ENVIAR = document.getElementById("enviar")
const LIMPAR = document.getElementById("limpar")

ENVIAR.onclick = function(x){    
    x.preventDefault();
    var NOVO = document.createElement("INPUT");

    NOVO.type = 'checkbox';
    NOVO.id = 'novoCheck';
    NOVO.name = 'novo';
    NOVO.value = document.getElementById("tarefa").value; 

    var label = document.createElement('label');
    label.appendChild(document.createTextNode(document.getElementById("tarefa").value));

    var br = document.createElement('br');
    var itemDiv = document.createElement('div'); 

    NOVATAREFA.appendChild(NOVO);
    NOVATAREFA.appendChild(label);
    NOVATAREFA.appendChild(br);
}

LIMPAR.onclick = function(){    
    NOVATAREFA.clear();
}