const saveBtn = document.querySelector('#save-btn');
const title = document.querySelector('#title');
const contents = document.querySelector('#contents');
const allJournals= document.querySelector('.journals')
const dateDisplay = document.querySelector("#date")
const container = document.querySelector(".container")
const addBtn = document.querySelector("#svg-wrap")
// const addBtn = document.querySelector("#svg-wrap")
const cardDisplay = document.getElementById("btn-all")
const btnHelp = document.querySelector("#btn-help")
const helpCenter = document.querySelector("#help")


dateDisplay.innerHTML= new Date().toLocaleString()
container.style.display = "block"
addBtn.style.display = "none"

saveBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    container.style.display="none"
    addBtn.style.display = "block"
    addNotes();
    clear();
});

addBtn.addEventListener("click", ()=>{
    container.style.display="block"
    allJournals.style.display="none"
    addBtn.style.display="none"
    helpCenter.style.display="none"
})

cardDisplay.addEventListener("click", ()=>{
    container.style.display="none"
    allJournals.style.display="block"
    addBtn.style.display="block"
    helpCenter.style.display="none"
    
})

btnHelp.addEventListener("click", ()=>{
    helpCenter.style.display="block"
    allJournals.style.display="none"
    container.style.display="none"
    attBtn.style.display="none"
    
})

function clear(){
    document.querySelector('#title').value = ""
    document.querySelector('#contents').value = ""
}

function addNotes(){
    let titleValue = title.value;
    let contValue = contents.value;
    let card = document.createElement("div");
    // let card = document.createElement("div");
    // let card = document.createElement("div");
    card.classList.add("card");
    
    
    if(titleValue){
        // container2.innerHTML=`${card}`
        card.innerHTML = `
        <h3>${titleValue}</h3>
        <button class="del">X</button>
        <p>${contValue}</p>
        `
        allJournals.appendChild(card);
    }
    const clear = card.querySelector('.del');
    clear.addEventListener('click', ()=>{
        card.remove();
    })    
}