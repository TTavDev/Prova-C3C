//Criar um método que irá receber um valor inteiro como argumento e
//retornar um array com uma contagem até o argumento como limite.

/* Na seguinte questão foi construida uma função em que quanto o número de entrada for
divisível por 5, será substituído o número pela String “ Luidy” e
quando o número de entrada for divisível por 9, será substituído o número por  “Moura”.
E quando o número de entrada for divisível por 5 e 9 o número será substituído “LuidyMoura”. 
*/

function substituir(num) {
    let resultado = [num]

    for (let i = 1; i <= num; i++){
        if( i % 5 == 0 && i % 9 ==0){
        resultado[i-1]="LuidyMoura"; 
        }
        else if(i % 5 == 0){
        resultado[i-1]="Luidy";
        }
        else if(i % 9 == 0){
        resultado[i-1]="Moura";
        }
        else{
        resultado[i-1]=i;
        }
    }
    return resultado;
}
    console.log(substituir(45));
