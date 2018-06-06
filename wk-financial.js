
//function that creates the financial page
let financialPageFunc = () => {
    const financialPage = {
        bank_Accounts: {
            title: "Bank Accounts",
            val: ["Table Credit Union", "Mesa Rojo Bank and Trust"]
        },
        businesses: {
            title: "Businesses",
            val: ["A1B Car Wash", "Red Matter Technologies", "Paul Baddude & Associates"],
        },
        blackmail: {
            title: "People Walter Off-White has blackmailed",
            val: ["Frank Schrager", "Fred Beneke"]
        },
        laundering: {
            title: "Money Laundering Locations",
            val: ["A1B Car Wash", "SaveWalterOffWhite.com", "Los Gatos Hermanos"]
        }
    };

    const fragment = document.createDocumentFragment(); //create a document fragment so there is only one write event to the DOM

    let article = document.querySelector("#art")

    article.innerHTML = ""

    for (key in financialPage) {
        let object = financialPage[key];
        let valLength = object.val;
        let title = document.createElement("h2");
        let ul = document.createElement("ul");

        title.textContent = `${object.title}: `;
        fragment.appendChild(title);

        for (i = 0; i < valLength.length; i++) {
            let lis = document.createElement("li");
            lis.textContent = `${object.val[i]}`;
            ul.appendChild(lis);
        }

        fragment.appendChild(ul);

        article.appendChild(fragment);
    }
}






















// //function for making a paragraph element
// const mkPara = () => {
//     return document.createElement('p');
// }
// //function for making a section element
// const mkSec = () => {
//     return document.createElement("section")
// }
// //function for making an h1 element
// const mkH1 = () => {
//     return document.createElement("h1")
// }



// //default function that creates a section for each object in the database
// const defaultSectionMaker = () => {
//     for (let obj in financialPage) {
//         let array = financialPage[obj];

//         for (i = 0; i < 1; i++) {
//             let sec = mkSec();
//             let h1 = mkH1();
//             let para1 = mkPara();
//             let para2 = mkPara();
//             let para3 = mkPara();
//             let para4 = mkPara();

//             para1.textContent = `Bank Accounts: ${array[0]}`
//             para2.textContent = `Businesses: ${array[1]}`;
//             para3.textContent = `People Blackmailed: ${array[2]}`;
//             para4.textContent = `Money laundering locations: ${array[3]}`;

//             sec.appendChild(para1);
//             sec.appendChild(para2);
//             sec.appendChild(para3);
//             sec.appendChild(para4);

//             fragment.appendChild(sec)
//         }

//     } let article = document.querySelector('#art');
//         article.appendChild(fragment)
// } 


//default on page load is to print everything
// defaultSectionMaker();