
const travelObject = {
  Airport: ["Albuquerque", "Mexico Airport Bueno", "Somewhere in the middle of nowhere that also has an airport for some reason"],
  Bus: ["Albuquerque", "Schmalbuquerque"],
  Cities: ["Albuquerque", "The Desert", "Albaquerque 2: Meth Methaloo"],
  Rental: ["Albuquerque Meth Trailers", "Rented a movie from redbox"]
}


const travelFragment = document.createDocumentFragment()

const travelListBuilder = () => {

  for(let key in travelObject) {
    let array = travelObject[key]
    const sectionElement = document.createElement("section")
    const ulElement = document.createElement("ul")
    for(let i = 0; i < key[i].length; i++) {
      const liElement = document.createElement("li")
        liElement.textContent = `${key}: ${key[i]}`
        ulElement.appendChild(liElement)
        travelFragment.appendChild(ulElement)
        console.log(travelFragment)
    }
  }
}

travelListBuilder()