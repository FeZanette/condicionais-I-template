// if e if/else

const booleano1 = true
const booleano2 = false

// if (booleano1){
//     alert("booleano1 é TRUE")
// }else{
//     alert("boolenao1 é FALSE")
// }

// ----------------------------

// if e if/else

const booleano3 = true

if(booleano1 === booleano2){
    alert("booleano1 é IGUAL a booleano2")
}else if(booleano2 === booleano3){
    alert("booleano2 é IGUAL a booleano3")
}else if(booleano1 === booleano3){
    alert("booleano1 é IGUAL a booleano3")
}else{

}

// ----------------------------

//if/else if/else (if else encadeado)
let idade = Number(prompt("Digite sua idade:"))

if(idade>=18 && idade < 70){
    alert("Pode votar")
}else if(idade === 16 || idade === 17){
    alert("Pode votar com autorização dos pais")
}else if(idade >= 70){
    alert("Pode votar, mas não é obrigatório")
}else{
    alert("Não pode votar")
}


// OUTRA MANEIRA DE FAZER

// if (idade >= 70){
//     alert("Pode votar, mas não é obrigatório")
// }else if(idade === 16 || idade === 17){
//     alert("Pode votar com autorização dos pais")
// }else if(idade >= 18){
//     alert("Pode votar")
// }else{
//     alert("Não pode votar")
// }


// ----------------------------

let media = Number(prompt("Digite sua média"))

if(media >= 5 && media <= 10){
    console.log("Você foi aprovado")
}else if(media >= 3 && media < 5){
    console.log("Recuperação")
}else if(media < 3){
    console.log("Estudante reprovado")
}else{
    console.log("Dado inválido")
}