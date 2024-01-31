import { getBookings, getBands, getVenues } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "booking") {
            const bookingBandId = itemClicked.dataset.bandid
            const bands = getBands()
            let bandsObj = {}
            for (const band of bands) {
                if(parseInt(bookingBandId) === band.id) {
                    bandsObj = structuredClone(band)
                }
            }
            window.alert(`${bandsObj.name}
${bandsObj.genre}
Formed in ${bandsObj.yearFormed}
${bandsObj.numberOfMembers} band members`)
        }
    }
)

export const bookingsList = () => {
    let htmlString = "<ul>"
    const bookings = getBookings()
    const bands = getBands()
    const venues = getVenues()

   for (const booking of bookings) {
    for (const band of bands) {
        for (const venue of venues) {
            if (booking.venueId === venue.id && booking.bandId === band.id) {
                htmlString += `<li class="bookingList" data-type="booking" data-bandid ="${booking.bandId}">${band.name} are playing at ${venue.name} on ${booking.date}.</li>`
            }
    }
    }
   }
    

    htmlString += "</ul>"
    return htmlString
}