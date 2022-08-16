function logar(){
    var senha = document.getElementById("senha").value;
    if(senha == "teste"){
        alert("Sucesso");
        location.href = "home.html";
    }
    else{
        alert("Senha incorreta");
    }
}