//function that creates the financial page
let financialPageFunc = () => {
    
    //object that holds all of the financial page text
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

    let article = document.querySelector("#art"); //create a variable with a reference to the DOM location where all content is to be appended

    article.innerHTML = ""; //on fuction call, clear the current content of the html

    let heading = document.createElement("h1"); //create a h1
    heading.textContent = "Wanted: Walter Off-White"; //set the h1 to the proper title
    fragment.appendChild(heading); //append the heading to the document fragment

    let heading2 = document.createElement("h2"); //create a h2
    heading2.textContent = "Walter Off-White's Financial Interests"; //set the h1 to the proper title
    fragment.appendChild(heading2); //append the heading to the document fragment

    // for in loop that will sequentially access all of the objects in the financialPage object, and construct the propper HTML elements from them in turn
    for (key in financialPage) {
        let object = financialPage[key]; //create a variable that contains the object contained in the current key
        let valLength = object.val; //get the length of the array in the current key
        let title = document.createElement("h2"); //create a h2
        let ul = document.createElement("ul"); //create a ul

        title.textContent = `${object.title}: `; //set the content of the title h2 to the value of the title key in each object
        fragment.appendChild(title); //append each title to the document fragment

        //for loop that itereates through the array contained in the value key to create list items
        for (i = 0; i < valLength.length; i++) {
            let lis = document.createElement("li"); //create an li
            lis.textContent = `${object.val[i]}`; //set the content of each li to the current iteration of the array
            ul.appendChild(lis); //append the lew li to the ul
        }

        fragment.appendChild(ul); //append the finished ul to the fragment

        article.appendChild(fragment); //append the fragment to the DOM
    }
}
