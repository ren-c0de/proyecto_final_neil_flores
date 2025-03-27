/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import {loadCards} from "./utils.js"

const contenedor_cards = document.querySelector("#section_cards_box")

loadCards(contenedor_cards)

// PARA CARGAR Y QUITAR EL BORDE DE LOCATION Y GUESTS
import {FOCUS} from "./utils.js"
import {BLUR} from "./utils.js"

const locationInput = document.querySelector("#input_location")
const guestsInput = document.querySelector("#input_guests")
const locationDiv = document.querySelector("#div_location")
const guestsDiv = document.querySelector("#div_guests")

locationInput.addEventListener('focus', () => FOCUS(locationDiv));
locationInput.addEventListener('blur', () => BLUR(locationDiv));
guestsInput.addEventListener('focus', () => FOCUS(guestsDiv));
guestsInput.addEventListener('blur', () => BLUR(guestsDiv));