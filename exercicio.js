// EXERCICIO 01 //
let nome = "Thaís";
let idade = 17;
let curso = "Desenvolvimento de Sistemas";
let semestre = 2;

console.log("=== DADOS DO ALUNO ===");
console.log("nome", nome);
console.log("idade", idade);
console.log("curso", curso);
console.log("semestre", semestre);

// EXERCICIO 02 //
const teclado = 150;
const mouse = 80;
const total = teclado + mouse;

console.log("=== CALCULADORA DE COMPRA ===");
console.log("Valor do teclado:", teclado);
console.log("Valor do mouse:", mouse);
console.log("Valor total:", total);

// EXERCICO 03 //
const valorPago = 100;
const valorCompra = 67.50;
const valorTroco = valorPago - valorCompra;

console.log("=== TROCO DA COMPRA ===");
console.log("Valor pago:", valorPago);
console.log("Valor da compra:", valorCompra);
console.log("Valor do troco:", valorTroco);

// EXERCÍCIO 04 //
const celsius = 25;

const fahrenheit = (celsius * 9 / 5) + 32;

console.log("=== Conversor de temperatura ===");
console.log("Temperatura em Celsius:", celsius);
console.log("Temperatura em Fahrenheit:", fahrenheit);

// EXERCÍCIO 05 //
const comprimento = 10;
const largura = 8;

const area = comprimento * largura;

console.log("===== ÁREA DO LABORATÓRIO =====");
console.log("Comprimento:", comprimento, "metros");
console.log("Largura:", largura, "metros");
console.log("Área:", area, "m²");

// EXERCÍCIO 06 //
const salario = 3500;
const percentual = 8;

const reajuste = salario * (percentual / 100);
const novoSalario = salario + reajuste;

console.log("==== SALARIO DE UM DESENVOLVEDOR ====");
console.log("Salário atual: R$", salario);
console.log("Reajuste:", percentual + "%");
console.log("Valor do reajuste: R$", reajuste);
console.log("Novo salário: R$", novoSalario);

// EXERCÍCIO 07 //
const preco = 4000;
const percentual = 15;

const desconto = preco * (percentual / 100);
const precoFinal = preco - desconto;

console.log("==== MEDIA DO ALUNO ====");
console.log("Preço original: R$", preco);
console.log("Desconto:", percentual + "%");
console.log("Valor do desconto: R$", desconto);
console.log("Preço final: R$", precoFinal);

// EXERCÍCIO 09 //
const horas = 2;

const minutos = horas * 60;
const segundos = horas * 3600;

console.log("==== CONVERSÃO DE HORAS ====")
console.log("Horas:", horas);
console.log("Minutos:", minutos);
console.log("Segundos:", segundos);

// EXERCÍCIO 10 //
const distancia = 300;
const combustivel = 25;

const consumo = distancia / combustivel;

console.log("===== CONSUMO DE COMBUSTÍVEL =====");
console.log("Distância percorrida:", distancia, "km");
console.log("Combustível gasto:", combustivel, "litros");
console.log("Consumo do veículo:", consumo, "km/L");

// EXERCÍCIO 11 //
function somar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = somar(10, 20);

console.log("===== SOMA DE DOIS NÚMEROS =====");
console.log("Primeiro número:", 10);
console.log("Segundo número:", 20);
console.log("Resultado da soma:", resultado);

// EXERCÍCIO 12 //
function calcular(numero1, numero2, operacao) {

    if (operacao === "+") {
        return numero1 + numero2;
    } else if (operacao === "-") {
        return numero1 - numero2;
    } else if (operacao === "*") {
        return numero1 * numero2;
    } else if (operacao === "/") {
        return numero1 / numero2;
    }
}

const resultado = calcular(20, 5, "*");

console.log("===== CALCULADORA =====");
console.log("Primeiro número:", 20);
console.log("Segundo número:", 5);
console.log("Operação: multiplicação");
console.log("Resultado:", resultado);

// EXERCÍCIO 13 //
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

const media = calcularMedia(8, 7, 9);

console.log("===== MÉDIA DO ALUNO =====");
console.log("Nota 1:", 8);
console.log("Nota 2:", 7);
console.log("Nota 3:", 9);
console.log("Média:", media);

// EXERCÍCIO 14 //
function calcularSalario(salario, bonus) {
    return salario + bonus;
}

const salario = 3500;
const bonus = 500;

const salarioFinal = calcularSalario(salario, bonus);

console.log("===== SALÁRIO COM BÔNUS =====");
console.log("Salário:", "R$", salario);
console.log("Bônus:", "R$", bonus);
console.log("Salário final:", "R$", salarioFinal);

// EXERCÍCIO 15 //
function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    return preco - desconto;
}

const preco = 1000;
const percentual = 10;

const precoFinal = calcularDesconto(preco, percentual);

console.log("===== DESCONTO DO PRODUTO =====");
console.log("Preço original:", "R$", preco);
console.log("Desconto:", percentual + "%");
console.log("Preço final:", "R$", precoFinal);

// EXERCÍCIO 16 //
function calcularPagamento(valorCurso, parcelas) {
    return valorCurso / parcelas;
}

const valorCurso = 1200;
const parcelas = 6;

const valorParcela = calcularPagamento(valorCurso, parcelas);

console.log("===== PAGAMENTO DO CURSO =====");
console.log("Valor do curso:", "R$", valorCurso);
console.log("Quantidade de parcelas:", parcelas);
console.log("Valor de cada parcela:", "R$", valorParcela);

// EXERCÍCIO 17 //
function calcularComissao(valorVenda, percentual) {
    return valorVenda * (percentual / 100);
}

const valorVenda = 5000;
const percentual = 5;

const comissao = calcularComissao(valorVenda, percentual);

console.log("===== COMISSÃO DE VENDA =====");
console.log("Valor da venda:", "R$", valorVenda);
console.log("Percentual de comissão:", percentual + "%");
console.log("Valor da comissão:", "R$", comissao);

// EXERCÍCIO 18 //
function calcularPagamento(horas, valorHora) {
    return horas * valorHora;
}

const horas = 40;
const valorHora = 25;

const pagamento = calcularPagamento(horas, valorHora);

console.log("===== PAGAMENTO POR HORA =====");
console.log("Horas trabalhadas:", horas);
console.log("Valor por hora:", "R$", valorHora);
console.log("Pagamento total:", "R$", pagamento);

// EXERCÍCIO 19 //
function gerarBoletim(nome, nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;

    console.log("===== BOLETIM DO ALUNO =====");
    console.log("Nome:", nome);
    console.log("Nota 1:", nota1);
    console.log("Nota 2:", nota2);
    console.log("Nota 3:", nota3);
    console.log("Média:", media);

    if (media >= 7) {
        console.log("Situação: Aprovado");
    } else {
        console.log("Situação: Reprovado");
    }
}

gerarBoletim("Thaís", 8, 7, 9);

// EXERCÍCIO 20 //
function calcularTotal(precoProcessador, precoMemoria, precoPlacaVideo) {
    return precoProcessador + precoMemoria + precoPlacaVideo;
}

function calcularDesconto(valor, percentual) {
    return valor * (percentual / 100);
}

const processador = 1500;
const memoria = 500;
const placaVideo = 2000;

const total = calcularTotal(processador, memoria, placaVideo);
const desconto = calcularDesconto(total, 10);
const valorFinal = total - desconto;

const valorAvista = valorFinal;
const valorParcelado = valorFinal / 12;

console.log("===== ORÇAMENTO DO PC =====");
console.log("Processador:", "R$", processador);
console.log("Memória RAM:", "R$", memoria);
console.log("Placa de vídeo:", "R$", placaVideo);
console.log("Total:", "R$", total);
console.log("Desconto:", "R$", desconto);
console.log("Valor final:", "R$", valorFinal);
console.log("Valor à vista:", "R$", valorAvista);
console.log("12x de:", "R$", valorParcelado);