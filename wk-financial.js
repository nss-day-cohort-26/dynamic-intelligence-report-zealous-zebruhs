//function that creates the financial page
// let financialPageFunc = () => {
//     const financialPage = {
//         bank_Accounts: {
//             title: "Bank Accounts",
//             val: ["Table Credit Union", "Mesa Rojo Bank and Trust"]
//         },
//         businesses: {
//             title: "Businesses",
//             val: ["A1B Car Wash", "Red Matter Technologies", "Paul Baddude & Associates"],
//         },
//         blackmail: {
//             title: "People Walter Off-White has blackmailed",
//             val: ["Frank Schrager", "Fred Beneke"]
//         },
//         laundering: {
//             title: "Money Laundering Locations",
//             val: ["A1B Car Wash", "SaveWalterOffWhite.com", "Los Gatos Hermanos"]
//         }
//     };

//     const fragment = document.createDocumentFragment(); //create a document fragment so there is only one write event to the DOM

//     let article = document.querySelector("#art")

//     article.innerHTML = ""

//     let heading = document.createElement("h1")
//     heading.textContent = "Wanted: Walter Off-White";
//     fragment.appendChild(heading);

//     let heading2 = document.createElement("h2")
//     heading2.textContent = "Walter Off-White's Financial Interests";
//     fragment.appendChild(heading2);


//     for (key in financialPage) {
//         let object = financialPage[key];
//         let valLength = object.val;
//         let title = document.createElement("h2");
//         let ul = document.createElement("ul");

//         title.textContent = `${object.title}: `;
//         fragment.appendChild(title);

//         for (i = 0; i < valLength.length; i++) {
//             let lis = document.createElement("li");
//             lis.textContent = `${object.val[i]}`;
//             ul.appendChild(lis);
//         }

//         fragment.appendChild(ul);

//         article.appendChild(fragment);
//     }
// }
const BevOther = {
    section1: {
        h1: "Aside From What You've Already Seen... Bev Also Enjoys:",
        h3: "Summoning Demons",
        src: "demon-bev.jpg",
       alt: "Demon Bev"
    },
   
    section2: {
        h3: "Relaxing With Cows",
        src: "cow-bev.jpg"
    },
    section3: {
        h3: "Rock Climbing",
        src: "climbing-bev.jpg"
    },
    section4: {
        h3: "Murdering Defensless Goats",
        src: "bevgoat_1024.jpg"
    }
};

//make it all into a function that will create the elements, attach the text content, append to the article which then goes into the html

const populateOther = function () {

//putting that object in a fragment so that I can then push that to DOM
    const newsFragment = document.createDocumentFragment();
    //this clears the html in that section
    document.querySelector("#art").innerHTML = " ";
//now making a for in loop to go through 
    for (const section in BevOther) {
//if statement for the h1 section since it is by itself
        if (BevOther[section].h1 != undefined) {
            let sectionH1 = document.createElement("h1");
            sectionH1.textContent = BevOther[section].h1;
            newsFragment.appendChild(sectionH1);
        }
        if (BevOther[section].src != null) {
            let image = document.createElement("img");
            image.setAttribute("id", "bev-other");
           
            image.src = BevOther[section].src;
            newsFragment.appendChild(image);

        }
//if statement for the sections that have the h3 in it 
        if (BevOther[section].h3 != undefined) {
            let sectionMain = document.createElement("section");
//these are basicall just creating the elements and then attaching the text and appending to the sectionMain 
            let sectionH3 = document.createElement("h3");
            sectionH3.setAttribute("id", "other");
            sectionH3.textContent = BevOther[section].h3;
            sectionMain.appendChild(sectionH3);

            let sectionP = document.createElement("p");
            sectionP.textContent = BevOther[section].p;
            sectionMain.appendChild(sectionP);

            let sectionH4 = document.createElement("h4");
            sectionH4.textContent = BevOther[section].h4;
            sectionMain.appendChild(sectionH4);
//now appending all of those from sectionMain to newsFragment
            newsFragment.appendChild(sectionMain);
        }
    }
//selecting article to then append the entire news fragment 
    document.querySelector("#art").appendChild(newsFragment);
}
