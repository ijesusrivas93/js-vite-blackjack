import _ from 'underscore';
import {crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases';

//import { variable } from './usecases/crear-deck'; //export individual
//import crearDeck from './usecases/crear-deck'; //export por defecto
//import pedirCarta from './usecases/pedir-carta';
//import valorCarta from './usecases/valor-carta';

const modulo = (() => {

  'use strict'

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  //let puntosJugador = 0, puntosComputadora = 0;
  let puntosJugadores = [];

  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const smalls = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');

  //Inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {

      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];

      for(let i = 0; i< numJugadores; i++){
          puntosJugadores.push(0);
      }

      smalls.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach(elem => elem.innerHTML = '');
      
      btnPedir.disabled = false;
      btnDetener.disabled = false;

      console.log('Juego iniciado')
  }


  //Eventos
  btnPedir.addEventListener('click', () => {
      
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta,0, puntosJugadores, smalls);

      crearCarta(carta, 0, divCartasJugadores);

      if(puntosJugador>21){
          console.warn('Perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, puntosJugadores, deck, smalls, divCartasJugadores);
      }else if(puntosJugador === 21){
          console.warn("Ganaste")
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, puntosJugadores, deck, smalls, divCartasJugadores);
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], puntosJugadores, deck, smalls, divCartasJugadores);
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego: inicializarJuego
  };

})();

