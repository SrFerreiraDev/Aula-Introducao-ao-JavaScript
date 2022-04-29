alert("Bem Vindo! Sr Ferreira Dev")

/*
var nome = "Sr. Ferreira Dev";
var idade = 26;
var idade2 = 10;
var frase = "Meu hobby é Codar!"
var n1 = 3;
var n2 = 5;
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Codar", "Cozinhar"));
//alert(frase.replace("Cozinhar", "Codar"));
console.log(n1 * n2);
*/

/*
var lista = ["Amora", "Blueberry", "Cereja", "Cranberry", "Framboesa", "Groselha", "Morango"];
lista.push("Maçã Red Imperial");
console.log(lista);
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
*/

/*
var fruta = {nome: "Blueberry", cor: "Azul"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

/*
var frutas = [{nome: "Amora", cor: "Roxa"}, {nome: "Blueberry", cor: "Azul"}, {nome: "Cereja", cor: "Vermelho"}, {nome: "Cranberry", cor: "Vermelho"}, {nome: "Framboesa", cor: "Cor de Rosa"}, {nome: "Groselha", cor: "Roxa"}, {nome: "Morango", cor: "Vermelho"}]
console.log(frutas);
console.log(frutas[0].nome);
*/

/*
var idade = prompt("Qual a sua idade?")
if (idade >= 18)
{
    alert("Maior de idade");
}
else
{
    alert("Menor de idade");
};
*/

/*
var count = 0;
while (count <= 5)
{
    console.log(count);
    //alert(count);
    //count = count + 1;
    count++;
};
*/

/*
var count;
for(count=0; count <= 5; count++)
{
    alert(count);
};
*/

/*
var d = new Date();
alert(d);
//alert(d.getFullYear());
//alert(d.getMonth()+1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());
*/

/*
function soma(n1, n2)
{
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
function validaIdade(idade)
{
    var validar;
    if (idade >= 18)
    {
        validar = true
    }
    else
    {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));
*/

function clicou()
{
    //alert("Obrigado por clicar!");
    document.getElementById("Agradecimento").innerHTML = "Obrigado por clicar!";
    //console.log(document.getElementById("Agradecimento"));
}

function redirecionar()
{
    window.open("https://www.linkedin.com/in/edinaldo-ferreira-srferreiradev/");
    //window.location.href = "https://www.linkedin.com/in/edinaldo-ferreira-srferreiradev/";
}

function trocar(elemento)
{
    //alert("Trocar texto");
    //document.getElementById("Mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento)
{
    //document.getElementById("Mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load()
{
    alert("Página carregada!");
}

function funcaoChange(elemento)
{
    console.log(elemento.value)
}