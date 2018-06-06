//first step was creating a large object with smaller objects in it that create a newsfeed.
const newsfeed = {
    section1: {
        h1: "News About Walter Off-White"
    },
    section2: {
        h3: "Walter Off-White Found in Underwear",
        p: "Mr. Off-White was found on August 12th aimlessly wandering around Albuquerque in his underwear. He was found in a dazed and confused state in a local grocery store. Sources are telling us his medicine was the cause of this incident. Police returned him safely back with his family.",
        h4: "Likelyhood of this being Walter is 10/10."
    },
    section3: {
        h3: "Bald Man and Small Angry Twenty Year-Old Spotted at Los Gatos",
        p: "Two men were seen eating questionable food at Los Gatos on June 1st while chatting quietly in the corner. Police are suspicious of these two men and are wondering if they are connected to local meth ring.",
        h4: "Likelyhood of this being Walter is 4/10."
    },
    section4: {
        h3: "Random Car Blown Up in Vacant Parking Lot",
        p: "Police discovered a red sports car up in flames in a vacant parking lot off of Highway 81.",
        h4: "Likelyhood of this being Walter is 6/10."
    },
    section5: {
        h3: "Detective Hank Discovers Meth Lab in Laundry Facility",
        p: "Police recently discovered a large meth lab in a laundry facility. Police have zero leads and are sad this was hidden from them so long.",
        h4: "Likelyhood of this being Walter is 15/10."
    }
};

//now I want to do some sort of function that uses .createElement that also appends child to the fragment... i think

//for in loop that will go through the large keys (sections) then dive into each section with a second for in loop
//make into a function 

const populateNews = function (myNewsfeed) {
    //this clears the html in that section
    document.querySelector("article").innerhtml = " ";
    //putting that object in a fragment so that I can then push that to DOM
    const newsFragment = document.createDocumentFragment();
    //now making a for in loop to go through 
    for (const section in myNewsfeed) {
        if (myNewsfeed[section].h1 != undefined) {
            let sectionH1 = document.createElement("h1");
            sectionH1.textContent = myNewsfeed[section].h1;
            newsFragment.appendChild(sectionH1);
        }
        if (myNewsfeed[section].h3 != undefined) {
            let sectionMain = document.createElement("section");

            let sectionH3 = document.createElement("h3");
            sectionH3.textContent = myNewsfeed[section].h3;
            sectionMain.appendChild(sectionH3);

            let sectionP = document.createElement("p");
            sectionP.textContent = myNewsfeed[section].p;
            sectionMain.appendChild(sectionP);

            let sectionH4 = document.createElement("h4");
            sectionH4.textContent = myNewsfeed[section].h4;
            sectionMain.appendChild(sectionH4);

            newsFragment.appendChild(sectionMain);
        }
    }
    document.querySelector("article").appendChild(newsFragment);
}

populateNews(newsfeed);