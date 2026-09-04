/// exercico 01 ///

let idade = 17;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

/// exercico 02 ///

let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

/// exercício 03 ///

{
    let numero = -5;

    if (numero >= 0) {
        console.log("Positivo");
    } else {
        console.log("Negativo");
    }
}

/// exercício 04 ///

{
    let numero = 10;

    if (numero % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

/// exercício 05 ///
{
  let nota = 8;
  let frequencia = 80;

  if (nota >= 7 && frequencia >= 75) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

/// exercício 06 ///

let valorCompra = 400;
let possuiCartao = true;

if (valorCompra > 500 || possuiCartao === true) {
    console.log("Desconto aplicado");
} else {
    console.log("Sem desconto");
}

/// exercício 07 ///

let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado");
} else {
    console.log("Usuário ou senha incorretos");
}

/// exercício 08 ///
{
  let idade = 25;
  if (idade <= 12) {
    console.log("Criança");
  } else if (idade <= 17) {
    console.log("Adolescente");
  } else {
    console.log("Adulto");
  }
}

/// exercício 08 ///
{
  let idade = 25;

  if (idade <= 12) {
    console.log("Criança");
  } else if (idade <= 17) {
    console.log("Adolescente");
  } else {
    console.log("Adulto");
  }
}

/// exercício 09 ///

let compra = 250;
let clienteVIP = true;

if (compra >= 300 || clienteVIP === true) {
    console.log("Frete grátis");
} else {
    console.log("Frete pago");
}

/// exercício 10 ///
{
  let idade = 21;
  let possuiIngresso = true;

  if (idade >= 18 && possuiIngresso === true) {
    console.log("Liberada");
  } else {
    console.log("Bloqueada");
  }
}

/// desafio final ///
{
  let nome = "Carlos";
  let idade = 18;
  let nota = 8;
  let frequencia = 80;
}
if (idade >= 18) {
    if (nota >= 7 && frequencia >= 75) {
        console.log("========================");
        console.log("     RESULTADO");
        console.log("========================");
        console.log("");
        console.log("Aluno:", nome);
        console.log("Idade:", idade);
        console.log("Nota:", nota);
        console.log("Frequência:", frequencia + "%");
        console.log("");
        console.log("Situação: APROVADO");
    } else {
        console.log("========================");
        console.log("     RESULTADO");
        console.log("========================");
        console.log("");
        console.log("Aluno:", nome);
        console.log("Idade:", idade);
        console.log("Nota:", nota);
        console.log("Frequência:", frequencia + "%");
        console.log("");
        console.log("Situação: REPROVADO");
    }
} else {
    console.log("========================");
    console.log("     RESULTADO");
    console.log("========================");
    console.log("");
    console.log("Aluno:", nome);
    console.log("Idade:", idade);
    console.log("Nota:", nota);
    console.log("Frequência:", frequencia + "%");
    console.log("");
    console.log("Situação: REPROVADO");
}

let aluno1 = "João";
let nota1 = 8;

let aluno2 = "Maria";
let nota2 = 9;

let aluno3 = "Pedro";
let nota3 = 6;
