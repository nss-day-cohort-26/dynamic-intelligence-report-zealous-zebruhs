var rapSheetObj = {
    pageTitle: "Rap sheet",
    section: {
        sectionTitle: "List of alleged crimes",
        ul: [
            "Meth",
            "Murder",
            "Mean"
        ]
    },
    section1: {
        sectionTitle: "Convictions",
        p: "No convictions... yet."
    },
    section2: {
        sectionTitle: "Prisons",
        p: "Marriage to skyler",
        img: {
            src: "",
            alt: "",
            width: "",
            height: ""
        }
    },
    section3: {
        sectionTitle: "Witnesses",
        p: "There have been several witnesses to Walter's alleged crimes.",
        ul: [
            "Hank Schrader",
            "Skyler White",
            "Walter Jr. White"
        ]
    },
    section4: {
        sectionTitle: "Victims",
        p: "Walter's crimes are not victimless.  He has hurt and even killed innocent people.",
        ul: [
            "Tuco Salamanca",
            "Gus Fring",
            "Gale Boetticher"
        ]
    }
}

const populateRapSheet= function(myObj){
    let article = document.querySelector("article");
    article.innerHTML = " ";

    let fragment = document.createDocumentFragment();

    let sectionArray = [];
    let title = "";

    for(item in myObj){
        if(item == "pageTitle"){
            let pageTitle = document.createElement("h1");
            pageTitle.textContent = myObj[item];
            title = pageTitle;
        }
        if(item.includes("section")){
            let newSection = document.createElement("section");
            let sectionTitle = document.createElement("h2");
            sectionTitle.textContent = myObj[item].sectionTitle;
            newSection.appendChild(sectionTitle);

            console.log("info: ", myObj[item], myObj[item].ul, myObj[item].p)

            if(myObj[item].p != undefined){
                let sectionP = document.createElement("p");
                sectionP.textContent = myObj[item].p;
                newSection.appendChild(sectionP);
            }
            if(myObj[item].ul != undefined){
                let newUl = document.createElement("ul");
                console.log(myObj[item].ul)
                for(let i = 0; i < myObj[item].ul.length; i++){
                    let newLi = document.createElement("li");
                    newLi.textContent = myObj[item].ul[i];
                    newUl.appendChild(newLi);
                }
                newSection.appendChild(newUl);
            }
            if(myObj[item].img != undefined){
                let newImg = document.createElement("img");
                newImg.src = myObj[item].img.src;
                newImg.alt = myObj[item].img.alt;
                newImg.style.height= myObj[item].img.height;
                newImg.style.width = myObj[item].img.width;
                newSection.appendChild(newImg);
            }
            sectionArray.push(newSection);
            
            
        }
    }
    fragment.appendChild(title);
    for(i=0; i < sectionArray.length; i++){
        fragment.appendChild(sectionArray[i]);
    }


    article.appendChild(fragment);
}

populateRapSheet(rapSheetObj);