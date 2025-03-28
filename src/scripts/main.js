/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

// PARA CARGAR LAS CARDS
import { loadCards } from "./utils.js"
import { stays } from "./stays.js"

const contenedor_cards = document.querySelector("#section_cards_box")
const staysCount = document.querySelector("#contador_stays")

loadCards(contenedor_cards, stays)


// PARA CARGAR Y QUITAR EL BORDE DE LOCATION Y GUESTS CUANDO
// SE HAGA FOCUS EN INPUT_LOCATION Y EN INPUT_GUESTS
import { FOCUS } from "./utils.js"
import { BLUR } from "./utils.js"

const locationInput = document.querySelector("#input_location")
const guestsInput = document.querySelector("#input_guests")
const locationDiv = document.querySelector("#div_location")
const guestsDiv = document.querySelector("#div_guests")

locationInput.addEventListener("focus", () => FOCUS(locationDiv))
locationInput.addEventListener("blur", () => BLUR(locationDiv))
guestsInput.addEventListener("focus", () => FOCUS(guestsDiv))
guestsInput.addEventListener("blur", () => BLUR(guestsDiv))


// PARA EL DESPLIEGUE Y CIERRE DEL MENÚ TOOGLE
import { show_menuH } from "./utils.js"
import { hide_menuH } from "./utils.js"

const addlocationH = document.querySelector("#header_add_location")
const addguestsH = document.querySelector("#header_add_guests")
const searchiconH = document.querySelector("#header_search_icon")
const menuH = document.querySelector("#menu_toogle")
const closemenuH = document.querySelector("#equis_icon")
const searchButton = document.querySelector(".search_button")

menuH.style.display = "none"

addlocationH.addEventListener("click", (event) => {
    event.preventDefault()
    show_menuH(menuH)
})

addguestsH.addEventListener("click", (event) => {
    event.preventDefault()
    show_menuH(menuH)
})

searchiconH.addEventListener("click", (event) => {
    event.preventDefault()
    show_menuH(menuH)
})

closemenuH.addEventListener("click", () => hide_menuH(menuH))


// PARA LOS BOTONES + Y - DE ADULTS Y CHILDREN
import { actualizarHuespedes } from "./utils.js"

const adultsContador = document.querySelector("#contador_adults")
const childrenContador = document.querySelector("#contador_children")
const adultsPlus = document.querySelector("#adults_plus")
const adultsMinus = document.querySelector("#adults_minus")
const childrenPlus = document.querySelector("#children_plus")
const childrenMinus = document.querySelector("#children_minus")
const guestsControls = document.querySelector("#guests_controls")
const divGuests = document.querySelector("#div_guests")

let adults = 0
let children = 0

    /*Para aumentar o disminuir la cantidad de adults y children*/
    adultsPlus.addEventListener("click", () => {
        adults++
        adultsContador.textContent = adults
        actualizarHuespedes(adults, children, guestsInput)
    })

    adultsMinus.addEventListener("click", () => {
        if(adults > 0) {
            adults--
            adultsContador.textContent = adults
            actualizarHuespedes(adults, children, guestsInput)
        }
    })

    childrenPlus.addEventListener("click", () => {
        children++
        childrenContador.textContent = children
        actualizarHuespedes(adults, children, guestsInput)
    })

    childrenMinus.addEventListener("click", () => {
        if(children > 0) {
            children--
            childrenContador.textContent = children
            actualizarHuespedes(adults, children, guestsInput)
        }
    })

/*Para que se muestre el guests_controls cuando hacemos focus
en input_guests o en cualquier parte del div_guests, y para que
se deje de mostrar al hacer click fuera del div_guests*/
guestsInput.addEventListener("focus", () => {
    actualizarHuespedes(adults, children, guestsInput)
    guestsControls.style.display = "block"
})

divGuests.addEventListener("click", () => {
    guestsControls.style.display = "block"
})

document.addEventListener("click", (event) => {
    if (!divGuests.contains(event.target)) {
        guestsControls.style.display = "none"
    }
})


// PARA LA LISTA DE AUTOCOMPLETADO QUE SE DESPLEGARÁ AL
// HACER FOCUS EN EL INPUT_LOCATION
import { generarListaUbicaciones } from "./utils.js"

const locationList = document.querySelector("#location_list")

locationInput.addEventListener("input", () => {
    const inputValue = locationInput.value.toLowerCase()

    const filteredLocations = stays.filter(stay => {
        return stay.city.toLowerCase().includes(inputValue) || stay.country.toLowerCase().includes(inputValue)
    })

    generarListaUbicaciones(inputValue, filteredLocations, locationList, locationInput)
})

/*Para ocultar la lista cuando dejamos de hacer focus*/
locationInput.addEventListener("blur", () => {
    setTimeout(() => {
        locationList.style.display = "none"
    }, 200)
})

document.addEventListener("click", (event) => {
    if (event.target !== locationInput && !locationList.contains(event.target)) {
        locationList.style.display = "none"
    }
})


// PARA FILTRAR LAS CARDS Y ACTUALIZAR EL CONTADOR
searchButton.addEventListener("click", () => {
    const locationValue = locationInput.value.toLowerCase()
    const guestsValue = parseInt(guestsInput.value)

    const filteredStays = stays.filter((stay) => {
        let locationMatch = false
        if (locationValue === "") {
            locationMatch = true
        } else {
            if ((stay.city.toLowerCase() + ", " + stay.country.toLowerCase()) === locationValue) {
                locationMatch = true
            }
        }

        let guestsMatch = false
        if (isNaN(guestsValue)) {
            guestsMatch = true
        } else {
            if (stay.maxGuests >= guestsValue) {
                guestsMatch = true
            }
        }

        if (locationMatch && guestsMatch) {
            return true
        } else {
            return false
        }
    })

    loadCards(contenedor_cards, filteredStays)

    if (filteredStays.length > 12) {
        staysCount.textContent = "+12 stays"
    } else {
        staysCount.textContent = `${filteredStays.length} stays`
    }

    hide_menuH(menuH)

    addlocationH.textContent = locationInput.value
    addguestsH.textContent = guestsInput.value
})