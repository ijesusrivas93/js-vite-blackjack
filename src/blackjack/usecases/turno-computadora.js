
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

//Turno 0 primer jugador y el último será la computadora
export const acumularPuntos = (carta,turno,puntosJugadores,smalls) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smalls[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
};


export const crearCarta = (carta, turno, divCartasJugadores) => {

    if(!carta) throw new Error('La carta es obligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src = 'assets/cartas/'+carta+'.png';
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta)
};

export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout( () => {
        if(puntosComputadora === puntosMinimos){
            alert("Nadie gana")
        } else if(puntosMinimos > 21){
            alert('La computadora gana')
        } else if(puntosComputadora > 21){
            alert('Ganaste')
        } else {
            alert('La computadora gana')
        }
    }, 100);
}

//turno computadora
/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<any>} puntosJugadores 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, deck, smalls, divCartasJugadores) => {

    if (!puntosMinimos) throw new Error('Puntos mínimos necesarios')
    if (!deck) throw new Error('Deck es necesario')

    let puntosComputadora = 0;

    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1,puntosJugadores,smalls);
        crearCarta(carta,puntosJugadores.length-1, divCartasJugadores);
    }while((puntosComputadora < puntosMinimos)&&(puntosMinimos<=21));

    determinarGanador(puntosJugadores);
}