
// console.log(document);


// let heads =(document.getElementsByTagName("h1"));

// for (const item of heads) {
//     console.log(item);
// }


// let head = document.getElementsByClassName("test");

// console.log(head);

// let head = document.querySelector(".test");
// let heads = document.querySelectorAll("#test");

// console.log(heads);


//    for (const item of heads) {
//        console.log(item);
//    }


//  console.log(document.querySelector("#list-news .test ul"));

// let elem = document.querySelector(".test");

// let elem = document.querySelector(".test");
//  elem.className = "salamlar";

// elem.classList.add("salam");
//  if (elem.classList.contains("test1")) {
// elem.classList.remove("test1");

//  }else{
//     console.log("Bu adda cllass yoxdur");
//  }


// elem.classList.add("salam");

// console.log(elem);

// let span = document.querySelector("#list-news .small-text");
// console.log(span.innerHTML);
// console.log(span.innerText);

// span.innerText = "<b>Salam millet</b>";
//    span.innerHTML = "<b>Salam millet</b>";


//    let addBtn = document.querySelector(".add-btn");

//    console.log(addBtn);
//     function clickBtn(){
//         alert("Added")
//     }
//    addBtn.onclick = function(){
//        alert("Salam")

//    }

//    function test(){
//     console.log("Salamlar")
//    }

// addBtn.addEventListener("click",test())

//     addBtn.addEventListener("click",function(){
//          alert("Salamlar")

//     })
//     addBtn.addEventListener("click",function(){
//         alert("Sagolun")

//    })



// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area");


//  let head = document.querySelector("h1");


// addBtn.addEventListener("click",function(){
//      head.innerText = text.value;

//      text.value ="";
// })




// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area");


//  let head = document.querySelector("h1");

// addBtn.addEventListener("click",function(){
//     if (text.value == "") {
//         alert("Bosolmaz");
//         return;
//     }

//      head.innerText = text.value;
//      if (head.classList.contains("active-head")) {
//         head.classList.remove("active-head")
//         head.classList.add("inActive-head")
//      }
//      text.value = "";
// })


// removeBtn.addEventListener("click",function(){
//     if (text.value == "") {
//         alert("Bosolmaz");
//         return;
//     }
//     head.innerText = text.value;
//     text.value = "";

//     if (head.classList.contains("inActive-head")) {
//        head.classList.remove("inActive-head")
//        head.classList.add("active-head")
//     }
// })


let addBtn = document.querySelector(".add-btn");

let removeBtn = document.querySelector(".remove-btn");

let text = document.querySelector(".text-area");


let head = document.querySelector("h1");

let ul = document.querySelector(".list-area")


addBtn.addEventListener("click", function () {

    if (text.value == "") {
        alert("Bosolmaz");
        return;
    }

    let li = document.createElement("li");

    let icon = document.createElement("i");

       icon.classList.add("fa-solid");
       icon.classList.add("fa-circle-xmark");

      li.classList.add("list-group-item");
      li.classList.add("w-100");
      li.style.border = "2px solid red";
      li.style.backgroundColor = "yellow";

      li.innerText = text.value
      ul.append(li)

      
      icon.classList.add("icon")


      li.append(icon)

      icon.onclick = function(){
        li.remove();

      }
   

      // icon.onclick = function(){
      //   li.innerText = "";
        
      // }
  
    // ul.innerHTML += `<li class="list-group-item">${text.value}</li>`

  


    text.value = ""
})