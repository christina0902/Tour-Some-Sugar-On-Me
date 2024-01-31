import { bookingsList } from "./bookings.js"
import { venuesList } from "./venues.js"
import { bandsList } from "./bands.js"

const bookingsHTML = bookingsList()
const bookingsElement = document.querySelector(".bookings")
bookingsElement.innerHTML = bookingsHTML

const venuesHTML = venuesList()
const venuesElement = document.querySelector(".venues")
venuesElement.innerHTML += venuesHTML

const bandsHTML = bandsList()
const bandsElement = document.querySelector(".bands")
bandsElement.innerHTML += bandsHTML