import airplane from "./airplane.jpg";
import amusementPark from "./amusement-park.jpg";
import beach from "./beach.jpg";
import circusTent from "./circus-tent.jpg";
import concertStadium from "./concert-stadium.jpg";
import cruiseLine from "./cruise-line.jpg";
import hospital from "./hospital.jpg";
import marsStation from "./mars-station.jpg";
import movieSet from "./movie-set.jpg";
import nbaCourt from "./nba-court.jpg";
import prison from "./prison.jpg"
import restaurant from "./restaurant.jpg";
import school from "./school.jpg";
import skiResort from "./ski-resort.jpg";
import weddingVenue from "./wedding-venue.jpg";
import whiteHouse from "./white-house.jpg";
import locationAndRoles from './locationAndRoles.json';

const locationImages = {
    airplane,
    amusementPark,
    beach,
    circusTent,
    concertStadium,
    cruiseLine,
    hospital,
    marsStation,
    movieSet,
    nbaCourt,
    prison,
    restaurant,
    school,
    skiResort,
    weddingVenue, 
    whiteHouse,
}

export const getLocationImage = (imageName) => {
    return locationImages[imageName]
}

export const getAllLocations = () => {
    return locationAndRoles.map((locationAndRole) => (
        {
            name: locationAndRole.location,
            image: getLocationImage(locationAndRole.image),
            selected: false,
        }
    ))
}