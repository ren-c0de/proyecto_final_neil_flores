/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

// FUNCIÓN PARA CARGAR LAS CARDS
import {stays} from "./stays.js"

function loadCards(box){
    box.innerHTML = ""
    stays.forEach(element => {
        let span_superhost = ""
        if(element.superHost){
            span_superhost = `<span class="py-0.5 px-2.5 border-1 rounded-2xl text-xs">SUPERHOST</span>`
        }

        const template = `
            <div class="mb-5">
                <div class="flex justify-center items-center">
                    <img class="mb-1 border-none rounded-2xl h-50 md:h-60 xl:h-75" src="${element.photo}" alt="${element.type}">
                </div>
                <div class="flex flex-row justify-between items-center">
                    ${span_superhost}
                    <span class="text-xs text-gray-500">${element.type}. ${element.beds} beds</span>
                    <div class="flex flex-row py-2">
                        <img class="h-4 star_icon_orange" src="./src/images/icons/star.svg" alt="icon_star">
                        <span class="text-xs ml-0.5">${element.rating}</span>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-sm italic">${element.title}</span>
                </div>
            </div>
        `

        box.innerHTML += template
    });
}

export {loadCards}

//FUNCIÓN PARA CARGAR Y QUITAR LOS BORDES DE LOCATION Y GUESTS
function FOCUS(box_location_guests) {
    box_location_guests.style.border = "1px solid"
}

function BLUR(box_location_guests){
    box_location_guests.style.border = "none"
}

export {FOCUS}
export {BLUR}