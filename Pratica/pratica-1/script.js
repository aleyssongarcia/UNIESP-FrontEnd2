function logar() {
    var txtname = document.getElementById("txtname").value;
    var txtemail = document.getElementById("txtemail").value;
    var txtdatanascimento = document.getElementById("txtdatanascimento").value;


var dadosCliente = {
    nome: txtname,
    email: txtemail,
    datanascimento: txtdatanascimento,
}
    enviarDadosServico(dados);
}

function enviarDadosServico(dados){
    console.log(dados)
    console.log(dados.nome);
    console.log(dados.email);
}