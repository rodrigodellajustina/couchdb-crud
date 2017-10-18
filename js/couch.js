const const_url      = "http://localhost:5984"
const const_colecao  = "projetocrud"
var jsonAluno = {}
var jsonResultSearch = {}
var i=0;

function couchRest(pmetodo, ptype){

// Responsável para comunicação do REST com JavaScript.
// JavaScript + AJAX.

var curl = ""

if(pmetodo == ""){
    curl = const_url+"/"+const_colecao;
}else{
    curl = const_url+"/"+const_colecao+"/"+pmetodo;
}

$.ajax({
        url : curl,
        type : "POST",
        data : JSON.stringify(jsonAluno),
        contentType : "application/json",
        success : function(jsonResultSearch){
            alert(JSON.stringify(jsonResultSearch));
        },
        error : function(error){
            alert(error.error);
        }
       })

return;

}


function AlunoInserir(){
    
    jsonAluno.nome         = document.getElementById("aluno_nome").value;
    jsonAluno.sobrenome    = document.getElementById("aluno_sobrenome").value;
    jsonAluno.cidade       = document.getElementById("aluno_cidade").value;
    jsonAluno.dtnascimento = document.getElementById("aluno_nascimento").value;
    couchRest("", "POST");
    jsonAluno = {};
    
}


function RedirecionarRelacionarLivro(){
    
    document.location.href = "livro.html";

}

function RedirecionarCadastro(){
    
    document.location.href = "index.html";

}


function AlunoBuscar(){

    
}