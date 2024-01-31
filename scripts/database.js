const database = {
    bands: [{
        "id": 1,
        "name": "Rock Legends",
        "numberOfMembers": 4,
        "genre": "Rock",
        "yearFormed": 1980
      },
      {
        "id": 2,
        "name": "Jazz Fusion Masters",
        "numberOfMembers": 5,
        "genre": "Jazz Fusion",
        "yearFormed": 1975
      },
      {
        "id": 3,
        "name": "Pop Sensations",
        "numberOfMembers": 3,
        "genre": "Pop",
        "yearFormed": 1995
      },
      {
        "id": 4,
        "name": "Metal Warriors",
        "numberOfMembers": 6,
        "genre": "Metal",
        "yearFormed": 2000
      },{
        "id": 5,
        "name": "Funk Groove Collective",
        "numberOfMembers": 7,
        "genre": "Funk",
        "yearFormed": 1985
      },
      {
        "id": 6,
        "name": "Electronic Explorers",
        "numberOfMembers": 2,
        "genre": "Electronic",
        "yearFormed": 1998
      },
      {
        "id": 7,
        "name": "Alternative Mavericks",
        "numberOfMembers": 4,
        "genre": "Alternative",
        "yearFormed": 2005
      }, {
        "id": 8,
        "name": "Soul Serenaders",
        "numberOfMembers": 5,
        "genre": "Soul",
        "yearFormed": 1982
      },
      {
        "id": 9,
        "name": "Reggae Vibes",
        "numberOfMembers": 6,
        "genre": "Reggae",
        "yearFormed": 1990
      },
      {
        "id": 10,
        "name": "Country Roads",
        "numberOfMembers": 4,
        "genre": "Country",
        "yearFormed": 1988
      }],
    bookings: [{
        "id": 1,
        "bandId": 1,
        "venueId": 2,
        "date": "2024-03-15"
      },
      {
        "id": 2,
        "bandId": 3,
        "venueId": 1,
        "date": "2024-04-20"
      },
      {
        "id": 3,
        "bandId": 2,
        "venueId": 4,
        "date": "2024-05-10"
      },
      {
        "id": 4,
        "bandId": 4,
        "venueId": 3,
        "date": "2024-06-25"
      },{
        "id": 5,
        "bandId": 5,
        "venueId": 1,
        "date": "2024-07-10"
      },
      {
        "id": 6,
        "bandId": 2,
        "venueId": 6,
        "date": "2024-08-15"
      },
      {
        "id": 7,
        "bandId": 6,
        "venueId": 5,
        "date": "2024-09-05"
      },
      {
        "id": 8,
        "bandId": 1,
        "venueId": 4,
        "date": "2024-10-20"
      }, 
      {
        "id": 9,
        "bandId": 7,
        "venueId": 2,
        "date": "2024-11-12"
      },
      {
        "id": 10,
        "bandId": 9,
        "venueId": 8,
        "date": "2024-12-05"
      },
      {
        "id": 11,
        "bandId": 10,
        "venueId": 7,
        "date": "2025-01-18"
      }],
    venues: [{
        "id": 1,
        "name": "Music Hall",
        "address": "123 Main Street, Cityville",
        "squareFootage": 5000,
        "maxOccupancy": 1000
      },
      {
        "id": 2,
        "name": "Rock Arena",
        "address": "456 Broadway, Townburg",
        "squareFootage": 10000,
        "maxOccupancy": 5000
      },
      {
        "id": 3,
        "name": "Jazz Lounge",
        "address": "789 Jazz Street, Melodytown",
        "squareFootage": 3000,
        "maxOccupancy": 500
      },
      {
        "id": 4,
        "name": "Amphitheater",
        "address": "321 Outdoor Lane, Openfield",
        "squareFootage": 15000,
        "maxOccupancy": 10000
      },{
        "id": 5,
        "name": "Club Vibes",
        "address": "567 Groove Avenue, Rhythmtown",
        "squareFootage": 2500,
        "maxOccupancy": 300
      },
      {
        "id": 6,
        "name": "Electronic Warehouse",
        "address": "890 Beat Street, Synth City",
        "squareFootage": 8000,
        "maxOccupancy": 1200
      },
      {
        "id": 7,
        "name": "Country Barn",
        "address": "432 Country Lane, Folksville",
        "squareFootage": 6000,
        "maxOccupancy": 800
      },
      {
        "id": 8,
        "name": "Indie Loft",
        "address": "654 Indie Boulevard, Alternative Springs",
        "squareFootage": 3500,
        "maxOccupancy": 500
      },
      {
        "id": 9,
        "name": "Blues Lounge",
        "address": "876 Blues Avenue, Harmonytown",
        "squareFootage": 4000,
        "maxOccupancy": 600
      },
      {
        "id": 10,
        "name": "Rooftop Garden",
        "address": "765 Skyline Street, Heightsville",
        "squareFootage": 6000,
        "maxOccupancy": 800
      },
      {
        "id": 11,
        "name": "Hip Hop Hangout",
        "address": "543 Rap Lane, Beatcity",
        "squareFootage": 3500,
        "maxOccupancy": 400
      }]
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}

export const getVenues = () => {
    return database.venues.map(venues => ({...venues}))
}