// need an empty array to hold my input links
// const variables for input element and unordered list element
// event listeners for save and delete buttons
// render function which will display <li> with <a> link inside ulElement / refactor to use a parameter
// need to save inputs to localStorage for page refresh reasons it saves only strings so i have to stringify my array first and then JSON.parse it back to array to display as intended
// i will need an if statement for this and to check which parameter to render
// const variable for save tab button with event listener
// use google API to make the save tab button work

let leadsArr = []
const inputEl = document.querySelector('#input-el')
const saveBtn = document.querySelector('#save-btn')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('#save-tab')
const ulEL = document.querySelector('#ul-el')
const localStorageData = JSON.parse(localStorage.getItem('leadsArr'))

if (localStorageData) {
    leadsArr = localStorageData
    render(leadsArr)
}

function render(leads) {
    let listItem = ''
    for (let i = 0; i < leads.length; i++) {
        listItem += `
        <li>
        <a target ='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>
        `
    }
    ulEL.innerHTML = listItem
}

saveBtn.addEventListener('click', function() {
    leadsArr.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('leadsArr', JSON.stringify(leadsArr))
    render(leadsArr) 
})

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    leadsArr = []
    render(leads)
})

tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        leadsArr.push(tabs.[0].url)
        localStorage.setItem('leadsArr', JSON.stringify(leadsArr))
        render(leadsArr)
    })
    
})




















