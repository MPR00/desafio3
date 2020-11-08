/*
Deixa a primeira letra maiuscula
exemplo => Exemplo
*/
const toUpperContato = string => {
    return string[0].toUpperCase() + 
            string.slice(1)
}
 
export default toUpperContato