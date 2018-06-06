
const travelObject = {
  Airport: ["Albuquerque", "Mexico Airport Bueno", "Somewhere in the middle of nowhere that also has an airport for some reason"],
  Bus: ["Albuquerque", "Schmalbuquerque"],
  Cities: ["Albuquerque", "The Desert", "Albaquerque 2: Meth Methaloo"],
  Rental: ["Albuquerque Meth Trailers", "Rented a movie from Redbox"]
}

const travelFragment = document.createDocumentFragment()

const travelListBuilder = () => {

  for(let key in travelObject) {
    const sectionElement = document.createElement("section")
    const h2Element = document.createElement("h2")
    const ulElement = document.createElement("ul")
    h2Element.textContent = `${key}: `
    sectionElement.appendChild(h2Element)
    sectionElement.appendChild(ulElement)
    for(let i = 0; i < travelObject[key].length; i++) {
      let liElement = document.createElement("li")
      liElement.textContent = `${travelObject[key][i]}`
      ulElement.appendChild(liElement)
      travelFragment.appendChild(sectionElement)
      let article = document.querySelector("#art")
      article.appendChild(travelFragment)
    }
  }
}


travelListBuilder()