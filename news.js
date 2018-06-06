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

//second step is putting that object in a fragment so that I can then push that to DOM
//make into a function artcile.innerhtml = " "
const newsElement = document.querySelector("#news");
const newsFragment = document.createDocumentFragment();
//this adds the entire news fragment to the #news div I made in the html
newsElement.appendChild(newsFragment);

//now I want to do some sort of function that uses .createElement that also appends child to the fragment... i think

//for in loop that will go through the large keys (sections) then dive into each section with a second for in loop