// Construir um código JS que receba uma valor através de um input para um sistema de notas
// de uma instituição.   


 /* Na seguinte questão foi criada uma função onde todos os aluno receberão uma nota de 0 a 100. 
    Os Alunos com nota abaixo de 40 são reprovados e as notas que tenha a diferença entre o
    próximo múltiplo de 5 for menor que 3 será arredondado para o próximo múltiplo de 5.
	Para a nota abaixo de 38, não é feito nenhum arredondamento. 
*/

function calcularNota(nota){
    if(nota < 0 || nota > 100){
    return "Nota Inválida";
    }
        if(nota < 40){
            if(nota < 38){
            return "Nota: " + nota + " - Reprovado!";
            }
            else{
                let arredondamento=proximoDivisivelPor5(nota);
                if(arredondamento-nota<3)
                {
                nota = arredondamento;
                return "Nota: " + nota + " - Aprovado!";
                }
                return nota;
                }
        }
        else{
            let arredondamento=proximoDivisivelPor5(nota);
            if(arredondamento-nota<3){
            nota = arredondamento;
            }
        return "Nota: " + nota + " - Aprovado!"; 
            }
}
function proximoDivisivelPor5(x) {
    return Math.ceil(x / 5) * 5;
}
    console.log(calcularNota(nota));
