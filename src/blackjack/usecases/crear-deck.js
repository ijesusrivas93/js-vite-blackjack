import _ from "underscore";
  
export const variable = 'Ejemplo' //export individual

/**
 * Esta función crea una nueva baraja
 * @param {Array<string>} tiposDeCarta Ej: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ej: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} Regresa una nueva baraja
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string')
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string')

    let deck = [];

    for(let i = 2; i<=10; i++){
        for(let tipo of tiposDeCarta){
            deck.push(i + tipo)
        }
    }

    for(let tipo of tiposDeCarta){
        for(let especial of tiposEspeciales){
            deck.push(especial + tipo)
        }
    }

    return _.shuffle(deck);

}

//export default crearDeck;