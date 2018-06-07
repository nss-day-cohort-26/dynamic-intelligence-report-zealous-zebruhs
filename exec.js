// my big object with pictures and titles and shit
const execSummary = {
    manWanted: {
        sectionTitle: "Wanted: Walter Off-White",
        src: "https://metrouk2.files.wordpress.com/2013/08/750x100010.jpg?w=748&h=997&crop=1",
        alt: "Walter Off-White",
    },
    aliases: {
        sectionTitle: "Aliases",
        pTag: ["Walter Eggshell ", "Walter beige"],
    },
    country: {
        sectionTitle: "Country",
        pTag: ["United States of 'Merica"]
    },
    associates1: 
          {
        pTag: "Jesse Fushia-man",
        sectionTitle: "Associates",
        src: "https://vignette.wikia.nocookie.net/walkingdead/images/5/55/Jesse_Pinkman.jpg/revision/latest?cb=20150313041401",
        alt: "associates"
          },
          associates2:
          {
        pTag: "Sal Bad-Man",
        src: "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
        alt: "associates"
    } 
    

}

// my giant function
function loadSummary() {
    const summaryFragment = document.createDocumentFragment();
    // empties the page
    document.querySelector("#art").innerHTML = ""
    // goes through the smaller objects in my big object
    for (key in execSummary) {

        // if there is a sectionTitle thingy it makes an h1
        if (execSummary[key].sectionTitle != null) {

            let hOne = document.createElement("h1");
            hOne.textContent = execSummary[key].sectionTitle;
            summaryFragment.appendChild(hOne);
        }
        // if there is a src thingy it makes an image tag
        if (execSummary[key].src != null) {
            console.log(execSummary[key]);
            let image = document.createElement("img");
            image.src = execSummary[key].src;
            summaryFragment.appendChild(image);
            
        }
        // if there is a pTag thingy it makes a p tag
        if (execSummary[key].pTag != null) {
            let para = document.createElement("p");
            para.textContent = execSummary[key].pTag;
            summaryFragment.appendChild(para);
        }

    }
    // puts all my shit in the article
    document.querySelector("#art").appendChild(summaryFragment)
}









