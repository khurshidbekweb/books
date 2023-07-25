"use strict";
let wrapper = $(".wrapper");
let elForm = $(".formMain");
let elForm1 = $(".formFoor");
let authorSel = $(".author");
let languageSel = $(".language");
let elImput = $(".search");

function renderUi(data){
    data.forEach((e)=>{
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
        <div class="cardImg text-center position-relative">
            <img src="${e.imageLink}" class="imgMain" alt="${e.country}">
            <button class="btnLiki"><img src="./images/heart.svg" alt="basket" style="width:30px;  overflow: hidden;"></button>
        </div>
        <div class="infoCart mt-2">
            <h4 class="title">${e.author}: ${e.title}</h4>
            <div class="infoUM d-flex justify-content-between align-items-lg-center mt-4">
                <h5 class="year"><strong>${Math.abs(e.year)}</strong></h5>
                <h5 class="pages"><strong>${e.pages}</strong></h5>
            </div>
            <div class="infoUM d-flex justify-content-between align-items-lg-center mt-2 mb-3">
                <a href="${e.link}" target="_blank" class="fs-4 text-decoration-none"> Wikipediya </a>
                <h5 class="launguich"><i>${e.language}</i></h5>
            </div>
        </div>
        `
        wrapper.append(card);
    })
}
renderUi(books);

function selectLang(){
    let newArr = [];
    books.forEach(e =>{
        if(!newArr.includes(e.language)){
            newArr.push(e.language);
        }        
    })    

    newArr.forEach(e =>{
        let option = document.createElement("option");
        option.textContent = e;
        $(".language").append(option);
    })
}
selectLang();
function selectAuth(){
    let newArr = [];
    books.forEach(e =>{
        if(!newArr.includes(e.author)){
            newArr.push(e.author);
        }
    })
    newArr.forEach(e =>{
        let option = document.createElement("option");
        option.textContent = e;

        $(".author").append(option);
    })
}
selectAuth();

// elForm1.addEventListener("submit", (e)=>{  
//     e.preventDefault();
//     let setValue = authorSel.value;
    
//     let filterArr = books.filter((item) =>{
//         return item.author == setValue;
//     })
//     wrapper.innerHTML = "";
//     console.log(filterArr);
//     renderUi(filterArr)
// })
elForm1.addEventListener("change", (e)=>{
    e.preventDefault();
    let setValuse = languageSel.value;
    
    if(setValuse == "all"){
        wrapper.innerHTML = ""
        renderUi(books);
    } else{
        let filterArr = books.filter((e)=>{
            return e.language == setValuse;
        })
        wrapper.innerHTML = "";

        renderUi(filterArr);
    }
})
elImput.addEventListener("keyup", (evt)=>{
    evt.preventDefault();

    let setValue = evt.target.value;
    let filterArr = books.filter(evt=>{
        return evt.author.toLowerCase().includes(setValue.toLowerCase());
    })
    wrapper.innerHTML = "";
    renderUi(filterArr);
})