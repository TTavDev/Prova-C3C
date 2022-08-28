/* receber os comprimentos dos lados de um triângulo através de inputs 
   e retornar sua classificação quanto ao tamanho de seus lados.
*/

/* Para tal questão foi criada uma função que receberá três parâmetros para
   determinar a classificação do triângulo. 
    * Para o "Triângulo Equilátero" todos os lados devem ser iguais;
    * Para o "Triângulo Isóceles" dois lados são iguais e a base diferentes;
    * Para o "Triângulo Escaleno" todos os lados são diferente, porém seguindo a regra de que 
    cada lado deve ser menor que a soma dos outros dois lados e
    * Para nenhuma das situações acima o triângulo será inexistente 
*/

function triangulo(a, b, c) {
        
    var lado1 = a;
    var lado2 = b;
    var lado3 = c;
    
    if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)){

        if (lado1 == lado2 && lado2 == lado3) {
            return("Equilátero: Os três lados são iguais.");
        } 
        else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {
            return("Isósceles: Dois lados iguais.");
        }else
        {
            return("Escaleno: Todos os lados são diferentes.");
        }
    }
    else {
        return("Com os valores informados não forma triângulo");
    }
}
