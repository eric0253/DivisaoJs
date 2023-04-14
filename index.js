let numerador = prompt("Por favor, Digite o numerador:");
let denominador = prompt("Por favor,Digite o denominador:");

if (denominador == 0)
{
    alert("Oush, Não da pra dividir por 0 ne? kk")
}
else
{
    alert(`${numerador} dividido por ${denominador} = ${(numerador / denominador)}`)
}