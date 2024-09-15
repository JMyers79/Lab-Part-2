// Part 1
// let firstFactor = 1;
// let secondFactor = 1;

// let displayStr = "";
// for(firstFactor = 1; firstFactor <=12; firstFactor++){
//     for (secondFactor = 1; secondFactor <=12; secondFactor++){
//         let product = firstFactor * secondFactor;
//         displayStr +=`${firstFactor} X ${secondFactor} = ${product}<br>`;
        
//     }
//     displayStr += "<br>----------------------<br>"
// }

// let refToDisplay = document.querySelector(".tables");
// refToDisplay.innerHTML = displayStr;

// Part 2

// let firstFactor = 1;
// let secondFactor = 1;

// let displayStr = "";

// const timeTables = (firstFactor) =>{
// for (secondFactor = 1; secondFactor <=12; secondFactor++){
//     let product = firstFactor * secondFactor;
//     displayStr +=`${firstFactor} X ${secondFactor} = ${product}<br>`;
// }
// displayStr += "<br>----------------------<br>"
// return displayStr;
// }
// let fullDisplayStr = "";
// for(firstFactor = 1; firstFactor <=12; firstFactor++){
//     fullDisplayStr += timeTables(firstFactor)
// }

// let refToDisplay = document.querySelector(".tables");
// refToDisplay.innerHTML = fullDisplayStr;

// Part 3

let firstFactor = 1;
let secondFactor = 1;

let displayStr = ""; 
const timeTables = (firstFactor,delimeter) =>{
for (secondFactor = 1; secondFactor <= delimeter; secondFactor++){
    let product = firstFactor * secondFactor;
    displayStr +=`${firstFactor} X ${secondFactor} = ${product}<br>`;
}
displayStr += "<br>----------------------<br>"
return displayStr;
}

let fullDisplayStr = "";
const allTables = () =>{
delimeter = prompt('Enter the number you want to end at for each times table: ')
for(firstFactor = 1; firstFactor <=12; firstFactor++){
    fullDisplayStr += timeTables(firstFactor,delimeter)
}
}

allTables()
let refToDisplay = document.querySelector(".tables");
refToDisplay.innerHTML = fullDisplayStr;