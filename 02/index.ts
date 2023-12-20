const usuarios: {nome: string, idade: number, status: boolean}[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const filtraUsuarios = (lista: {nome: string, idade: number, status: boolean}[], nomeLista: string): {nome: string, idade: number, status: boolean}[] => {
    
    let novoArray = lista.filter((usuario) => {
        return usuario.nome.toLowerCase().includes(nomeLista.toLowerCase());
    });

    return novoArray;
    
}

console.log(filtraUsuarios(usuarios, "Jo"));