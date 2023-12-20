const objeto: {produto: string, lote: number, ano: number, qtd: number} =  {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 102
}

const imprimiEntiqueta = (objeto: {produto: string, lote: number, ano: number, qtd: number}): string[] => {

    let resultado: string[] = [];

    for(let i = 1; i <= objeto.qtd; i++) {
        let entiqueta = `${objeto.lote}-${objeto.ano}-${String(i).padStart(3,"0")}`

        resultado.push(entiqueta);
    }

    return resultado;
} 

console.log(imprimiEntiqueta(objeto));

