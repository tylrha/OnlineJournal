const allJournals = document.querySelector("#note-div");
const newJournal = document.querySelector("#new-text");
const weeklyGoals = document.querySelector("#weekly-goals");
const helpCenter = document.querySelector("#help");
const list = document.querySelector("ul");
// const newJournal = document.querySelector("#new-text");



const btnNew = document.querySelector("#btn-new");
const btnAll = document.querySelector("#btn-all");
const btnAdd = document.querySelector("#svg-btn");
const btnGoals = document.querySelector("#btn-goals")
const btnSet = document.querySelector("#btn-set")
const btnHelp = document.querySelector("#btn-help")
const btnAddList = document.querySelector("#todo-btn")
const btnSave = document.querySelector("#save-btn")
const dateDisplay = document.querySelector("#date")
const done = document.querySelector("#done")
const check = document.querySelector("check-box")


dateDisplay.innerHTML= Date().toLocaleUpperCase()
btnAdd.addEventListener("click", ()=>{
    newJournal.style.display = "block";
    weeklyGoals.style.display = "none";
    helpCenter.style.display = "none";
    
})
btnNew.addEventListener("click", ()=>{
    newJournal.style.display = "block";
    weeklyGoals.style.display = "none";
    allJournals.style.display = "none"; 
    helpCenter.style.display = "none";
})
btnAll.addEventListener("click", ()=>{
    newJournal.style.display = "none";
    weeklyGoals.style.display = "none";
    allJournals.style.display = "block"; 
    helpCenter.style.display = "none";
        
})
btnGoals.addEventListener("click", ()=>{
    weeklyGoals.style.display = "block";
    newJournal.style.display = "none";    
    allJournals.style.display = "none"; 
    helpCenter.style.display = "none";
        
})
btnHelp.addEventListener("click", ()=>{
    weeklyGoals.style.display = "none";
    newJournal.style.display = "none";    
    allJournals.style.display = "none";
    helpCenter.style.display = "block";
})
btnSave.addEventListener("click", ()=>{
    newTitle.textContent= document.querySelector("#j-title").value 
    newBodyText.textContent= document.querySelector("#journal-text").value 
    const card = document.querySelectorAll(".cardwrap")
    newCardWrap.setAttribute("class", "cardwrap")
    
})


btnAddList.addEventListener("click", ()=>{
    const newItem = document.createElement("li");
    const checkBox =  document.createElement("input");
    newItem.setAttribute("class", "listI")
    checkBox.setAttribute("type", "checkbox");    
    checkBox.setAttribute("class", "check-box");    
    const itemValue = document.querySelector("#todo-box").value;
    list.append(newItem)    
    list.append(checkBox)
    // newItem.className == "listI";
    newItem.innerHTML = `${itemValue}`;
})

done.addEventListener("submit", function(event){
const listArray = document.querySelector("ul").children
    
    
})
// console.log(document.querySelector("ul").children)

// Array.from(list.children).forEach(function(li)
// {
//     li.addEventListener("click", ()=>{
//         li.remove()
//     })
// })



