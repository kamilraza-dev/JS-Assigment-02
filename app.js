
// Q no 01: Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed
// to it.


    // function add(no1) {
    //     return function (no2) {
    //         return no1 + no2
    //     }(5)

    // }
    // console.log(add(9));

// --------------------------------------------------------------------------

// Q no 02:  Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// function search(arr,value){
//     if(arr.length === 0){
//         return false;
//     }
//     else if(arr[0] === value){
//         return true;
//     }
//     else {
//         return search(arr.slice(1), value); 
//       }
//  }

//  const arr = [0,2,5,7,9,4];
//  const valueInput = +prompt("Search Here:");

//  console.log(search(arr,valueInput));

// --------------------------------------------------------------------------
 

//Q no 03: Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


// function addParagraph(paragraph) {
    
//     let addPara = document.createElement("p");
//     let addText = document.createTextNode(paragraph);
//     addPara.appendChild(addText);
//     main.appendChild(addPara);
// }


//     let text = prompt("Please Write Something:");
//     addParagraph(text);

// ------------------------------------------------------------------------------------


// Q no 04: Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as
// the text content of the new list item


// let list = document.getElementById('mylist')

// function addlist(myListItem) {

//     let addList = document.createElement("li");
//     let newItem = document.createTextNode(myListItem);

//     addList.appendChild(newItem);
//     list.appendChild(addList);
// }

//     let listItem = prompt("Enter Item to Add in List :");
//     addlist(listItem);

// -------------------------------------------------------------------------------------------




// Q no 05 : Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing the new background color.

// function colorChanger(toChangeColor,bgColor){
//     let elementId = document.getElementById(toChangeColor);
//     elementId.style.backgroundColor = bgColor;
//  }
 
//  let newColor = prompt("Enter a valid color name (e.g red, blue, green etc)");
//  colorChanger("changeColor", newColor);

// ----------------------------------------------------------------------------------------


// Q no 06: Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// function storeData(key, obj) {
//     let myString = JSON.stringify(obj);
//     localStorage.setItem(key, myString);
// }

// -----------------------------------------------------------------------

// Q no 07: Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function getData(id) {
//     let data = localStorage.getItem(id);
//     return data ? JSON.parse(data) : ""
// }

// let data = {
//     name: "M Kamil Raza",
//     age: 21,
//     id: "JS-124591",
    
// };

// storeData("std", data);
// console.log(getData("std"));

// ----------------------------------------------------------------------




// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. 

// The function should also retrieve the object from localStorage
// and return it as a new object.


function saveData(obj) {

    let keys = Object.keys(obj)

    keys.forEach(function (key, index) {
        localStorage.setItem(key, obj[key])
    })

    let newObj = {}
    keys.forEach(function (key, index) {

        let value = localStorage.getItem(key)

        newObj[key] = obj[key]

    })

    return newObj


}

let obj = {

    name: "M Kamil Raza",
    id: "JS-124591"
};

let retrieve = saveData(obj)
console.log(retrieve);




