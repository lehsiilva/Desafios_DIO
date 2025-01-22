/* # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/


function SaldoVitorias(vitorias, derrotas){
    let rankeadas = vitorias - derrotas

    return rankeadas
}


function NivelHeroi(rankeadas){
    
    let nivel
    
    if(rankeadas < 10){
        nivel = "Ferro"
    } else if(rankeadas >= 11 && rankeadas <= 20 ){
        nivel = "Bronze"
    } else if(rankeadas >= 21 && rankeadas <= 50 ){
        nivel = "Prata"
    } else if(rankeadas >= 51 && rankeadas <= 80 ){
        nivel = "Ouro"
    } else if(rankeadas >= 81 && rankeadas <= 90 ){
        nivel = "Diamante"
    } else if(rankeadas >= 91 && rankeadas <= 100 ){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return nivel
}

let VitoriaseDerrotas = SaldoVitorias(21,10)
let Nivel = NivelHeroi(VitoriaseDerrotas)

console.log("O Herói tem de saldo "+ VitoriaseDerrotas + " e está no nível " + Nivel)
