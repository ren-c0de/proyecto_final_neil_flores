/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

// FUNCIÓN PARA CARGAR LAS CARDS
import {stays} from "./stays.js"

function loadCards(box, staysFiltrados = stays){
    box.innerHTML = ""
    staysFiltrados.forEach(element => {
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
    })
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

// FUNCIONES PARA DESPLEGAR Y CERRAR EL MENÚ
function show_menuH(aux_menuH) {
    aux_menuH.style.display = "block"
    setTimeout(() => {
        aux_menuH.classList.add("show")
    }, 10)
}
  
function hide_menuH(aux_menuH) {
    aux_menuH.classList.remove("show")
    setTimeout(() => {
        aux_menuH.style.display = "none"
    }, 300)
}

export {show_menuH}
export {hide_menuH}

// FUNCIÓN PARA ACTUALIZAR NÚMERO DE HUÉSPEDES
function actualizarHuespedes(adults, children, guestsInput) {
    const totalHuespedes = adults + children
    if (totalHuespedes === 0) {
        guestsInput.value = "0 huéspedes"
    } else {
        guestsInput.value = `${totalHuespedes} huéspedes`
    }
}

export {actualizarHuespedes}


// FUNCIÓN PARA GENERAR LA LISTA DE AUTOCOMPLETADO DE UBICACIONES
function generarListaUbicaciones(inputValue, filteredLocations, locationList, locationInput) {
    locationList.innerHTML = ""

    if (inputValue && filteredLocations.length > 0) {
        filteredLocations.forEach((location) => {
            const listItem = document.createElement("li")
            listItem.innerHTML = `
                <div class="flex flex-row items-center p-2 hover:bg-gray-300 cursor-pointer">
                    <img class="h-3 inline-block mr-2" src="./src/images/icons/localizacion.png" alt="location_icon">${location.city}, ${location.country}
                </div>
            `

            listItem.addEventListener("click", () => {
                locationInput.value = `${location.city}, ${location.country}`
                locationList.style.display = "none"
            })

            locationList.appendChild(listItem)
        })
        locationList.style.display = "block"
    } else {
        locationList.style.display = "none"
    }
}

export {generarListaUbicaciones}