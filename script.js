let addtaskpopup = document.getElementById("popupbox");
const cardcontainer = document.querySelector(".cardcontainer");
const newcardname = document.getElementById("cardname");
let ID = 0;
let additempopup = document.querySelector(".popupbox2");
let addinglist= document.getElementById("additems2")
const blurdiv = document.querySelector(".blur")
// creating popup



let eventplus = document.querySelector(".plus");
let blurpage = document.querySelector(".blur")



eventplus.addEventListener("click", function showAddTask() {
  document.getElementById("cardname").value = "";
  addtaskpopup.classList.remove("hide");
  addtaskpopup.classList.add("show");
  blurdiv.style.filter = 'blur(5px)';
});




// addtaskpopup.addEventListener("click",showAddTask)
let eventadditems = document.querySelector(".additems");
eventadditems.addEventListener("click", function showAddTask() {
  document.getElementById("cardname").value = "";
  addtaskpopup.classList.remove("hide");
  addtaskpopup.classList.add("show");
  blurdiv.style.filter = 'blur(5px)';
});

function hideAddTask() {
  addtaskpopup.classList.add("hide");
  blurdiv.style.filter = 'blur(0px)';
}
// card container

// adding of card

// let del = document.querySelector(".")

function addcard() {
  ID++;
  let hidenotask=document.querySelector(".notask");
  hidenotask.classList.add("hide");
  var newcard = document.createElement("div");
  var cardtitle = document.createElement("h2");
  var hline = document.createElement("hr");
  var itemlist = document.createElement("div");
  var additem = document.createElement("span");
  var deletebutton = document.createElement("span");

  newcard.setAttribute("id", ID);
  newcard.appendChild(cardtitle);
  newcard.appendChild(hline);
  newcard.appendChild(itemlist);
  newcard.appendChild(additem);
  newcard.appendChild(deletebutton);

  // styling of card
  hline.classList.add("horizontal-line");
  cardtitle.classList.add("center");
  itemlist.classList.add("center");
  itemlist.classList.add("listing");
  deletebutton.classList.add("center");
  deletebutton.classList.add("del-image");
  additem.classList.add("center");
  additem.classList.add("add-icon");
  // adding class to new card
  newcard.classList.add("card");
  // adding card to container
  cardcontainer.appendChild(newcard);
  // giving title to the card
  cardtitle.innerText = newcardname.value;
  deletebutton.innerText = "";
  additem.innerText = "+";

  deletebutton.addEventListener("click", function () {
    newcard.remove();
  });

  // removing of popup when card is made
  hideAddTask();

// showing of popup box 2
let additemnew = document.querySelector(".add-icon");
additemnew.addEventListener("click", function additem() {
  additempopup.classList.remove("hide");
  // addtaskpopup.classList.add("show");
});

// adding values in item list


  }

// itemadd.addEventListener("click",function addingitems(){
  
//   let input2value= document.querySelector(".input2").value;
//   let itemin= document.createElement("p");
//   itemin.setAttribute("id",ID2
//   itemlist.appendChild(itemin)
//   )

// })

// closing of second popupbox
// let closebutton = document.getElementById("closebutton2");
 function hideAdditem() {
  additempopup.classList.add("hide");
}

//....................second card ...................

function addcard2(){
  let newcardcontainer=document.createElement("div")

}

// moving to next page

let cardclick = document.getelement