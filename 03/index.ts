const tabela: number[] = [1, 5, 2];

const multiplicaTabela = (tabela: number[]): string => {

    let resultado: string = "";

    for(let i = 0; i < tabela.length; i++) {
        for(let j = 0; j <= 10; j++) {

            resultado += `${tabela[i]} x ${j} = ${tabela[i] * j} \n`;

            if(j === 10) {
                resultado += "--------------------- \n"
            }
        }

       
    }

    return resultado
}

console.log(multiplicaTabela(tabela));