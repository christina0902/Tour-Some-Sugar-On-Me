import { getBands, getVenues, getBookings } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "bands") {
            const venuesArr = []
            const bandId = itemClicked.dataset.id
            const venues = getVenues()
            const bookings = getBookings()
            for (const booking of bookings) {
                for (const venue of venues) {
                    if(parseInt(bandId) === booking.bandId && venue.id === booking.venueId) {
                        venuesArr.push(venue.name)
                    }
                }
            }
            const resultString = venuesArr.join(", ")
            window.alert(`${resultString}`)
        }
    }
)

export const bandsList = () => {
    let htmlString = "<ul>"
    const bands = getBands()
    for (const band of bands) {
        htmlString += `<li data-type="bands" data-id=${band.id}>${band.name}</li>`
    }

    htmlString += "</ul>"
    return htmlString
}