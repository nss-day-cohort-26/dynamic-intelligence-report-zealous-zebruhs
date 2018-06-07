const execSummary = {
    manWanted: {
        sectionTitle: "Wanted: Walter Off-White",
        src: "https://metrouk2.files.wordpress.com/2013/08/750x100010.jpg?w=748&h=997&crop=1",
        alt: "Walter Off-White",
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
    }, 
    
    aliases: {
        sectionTitle: "Aliases",
        pTag: ["Walter Eggshell ", "Walter beige"],
    },
    country: {
        sectionTitle: "Country",
        pTag: ["United States of 'Merica"]
    }

}


function loadSummary() {
    const summaryFragment = document.createDocumentFragment();
    document.querySelector("#art").innerHTML = ""
    
    for (key in execSummary) {


        if (execSummary[key].sectionTitle != null) {

            let hOne = document.createElement("h1");
            hOne.textContent = execSummary[key].sectionTitle;
            summaryFragment.appendChild(hOne);
        }

        if (execSummary[key].src != null) {
            console.log(execSummary[key]);
            let image = document.createElement("img");
            image.src = execSummary[key].src;
            summaryFragment.appendChild(image);
            
        }
        if (execSummary[key].pTag != null) {
            let para = document.createElement("p");
            para.textContent = execSummary[key].pTag;
            summaryFragment.appendChild(para);
        }

    }
    document.querySelector("#art").appendChild(summaryFragment)
}









