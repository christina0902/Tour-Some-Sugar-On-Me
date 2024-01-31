import { getVenues, getBands, getBookings } from "./database.js"



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "venue") {
            const venueId = itemClicked.dataset.id
            const bands = getBands()
            const bookings = getBookings()
            const bandsArr = []
            for (const booking of bookings) {
                for (const band of bands) {
                    if(parseInt(venueId) === booking.venueId && booking.bandId === band.id) {
                        bandsArr.push(band.name)
                    }
                }
            }
            const modifiedArr = bandsArr.join(", ")
            window.alert(`${modifiedArr}`)
        }
    }
)



export const venuesList = () => {
    let htmlString = "<ul>"
    const venues = getVenues()

    for (const venue of venues) {
        htmlString += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`
    }

    htmlString += "</ul>"
    return htmlString
}