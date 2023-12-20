const palavra: string = "Augusto";

const soletraPalavra = (palavra: string): string => {

//     let resultado: string = "";

//    for(let i = 0; i <= palavra.length; i++) {        

//         if(i === palavra.length - 1) {
//             resultado += `${palavra[i]}`
//             break;
//         }

//         resultado += `${palavra[i]}-`
//    }               
    
    // return resultado;

    return palavra.split("").join("-");
}

console.log(soletraPalavra(palavra));