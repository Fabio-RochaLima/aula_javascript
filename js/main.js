

function clicou() {    
    alert(document.getElementById("agradecimento").textContent);
    document.getElementById("agradecimento").innerHTML = "<b>Isso</b> <i>mesmo!</i>";
  
    //console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com");
}

function redirect(){
    window.location.href="http://www.google.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("interact").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texo");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
    //document.getElementById("interact").innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Pagina carregada!");
}
function change(elemento){
    alert(elemento.value);
}

/*function soma(n1,n2){
    return n1 + n2;    
}
alert (soma(5,10));

function validaIdade(idade){
   var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }     
    return validar;
}

var idade = prompt("Qual a sua idade?");
alert(validaIdade(idade).toString());

var d = new Date();
alert(d.getDate());
alert(d.getMonth()+1);

var count;
for(count=0; count < 5; count++){
    alert(count);
}

var count = 0;

while(count <5){
console.log(count);
count ++;
}

var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};


var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);

var nome = "Fabio";
var idade = 35;
var frase = "Tudo numa boa";
alert(nome + " tem " + idade +" anos.");
console.log(frase.toUpperCase());

var lista = ["maçã", "pêra", "laranja"];
lista.pop();
lista.push("uva");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/