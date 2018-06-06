const execSummary = {
    manWanted: {
        sectionTitle: "Wanted: Walter Off-White",
        src: "https://metrouk2.files.wordpress.com/2013/08/750x100010.jpg?w=748&h=997&crop=1",
        alt: "Walter Off-White",
    },
    associates: {
        pTag: ["Jesse Fushia-man", "Sal Bad-Dude"], 
      sectionTitle: "Associates",
      src: "https://vignette.wikia.nocookie.net/walkingdead/images/5/55/Jesse_Pinkman.jpg/revision/latest?cb=20150313041401",
      alt: "associates",
    },
      aliases: {
          sectionTitle: "Aliases",
          pTag: ["Walter Eggshell", "Walter beige"],     
      }, 
      country: {
          sectionTitle: "Country",
          pTag: ["United States of 'Merica"]
      }

}
const summaryFragment = document.createDocumentFragment();


for (key in execSummary) {
 if (execSummary[key].pTag != null) {
     for (let i =0; i <= execSummary[key].pTag.length; i++) {
let para = document.createElement("p");
para.textContent = execSummary[key].pTag[i];
console.log("stuff");
summaryFragment.appendChild(para);
     }
 }
let sec = document.createElement("section");
let hOne = document.createElement("h1");


}
document.querySelector("#art").appendChild(summaryFragment)