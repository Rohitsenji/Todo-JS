let addtaskpopup = document.getElementById("popupbox");
const cardcontainer = document.querySelector(".cardcontainer");
const newcardname = document.getElementById("cardname");
let ID = 0;
var addinglist= document.getElementById("additems2")
var backButton = document.getElementById("$back");
var showCard = document.getElementById("$showCard");
var cardContainer2 = document.getElementById("$cardContainer2"); 
var showCardAdd = document.getElementById('$showCardAdd');
var popup1 = document.getElementById("popup");
var blur = document.getElementById("$blurBackground");
// const blurdiv = document.querySelector(".blur")

// creating popup
let eventplus = document.querySelector(".plus");
let blurpage = document.querySelector(".blur")



eventplus.addEventListener("click", function showAddTask() {
  document.getElementById("cardname").value = "";
  addtaskpopup.classList.remove("hide");
  addtaskpopup.classList.add("show");
  // blurdiv.style.filter = 'blur(5px)';
});


// addtaskpopup.addEventListener("click",showAddTask)
let eventadditems = document.querySelector(".additems");
eventadditems.addEventListener("click", function showAddTask() {
  document.getElementById("cardname").value = "";
  addtaskpopup.classList.remove("hide");
  addtaskpopup.classList.add("show");
  // blurdiv.style.filter = 'blur(5px)';
});

function hideAddTask() {
  addtaskpopup.classList.add("hide");
  // blurdiv.style.filter = 'blur(0px)';
}


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


  // itemlist.classList.add("center");
  itemlist.setAttribute("id","listingid")
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



    //  removing of new card 
    deletebutton.addEventListener("click", function () {
    newcard.remove();
    
    });

    // removing of popup when card is made
    hideAddTask();



    // showing of popup box 2 when clicked on plus symbol
    let addnewitem = document.querySelector(".add-icon");

    addnewitem.addEventListener("click", ()=>{

    var popup2Blur = document.createElement('div')
    popup2Blur.setAttribute("class","popup2blur")
    var mainContainer = document.getElementById('maincontainerid');
    mainContainer.appendChild(popup2Blur)

    //creating popup2Container jo pop up ko  rakhega
    var popup2Div = document.createElement('div')
    popup2Div.setAttribute('class',"popup2Div")
    popup2Blur.appendChild(popup2Div)

    // creating popup2Title jo title hoga popup ka
    var popup2Title = document.createElement('h2')
    popup2Title.setAttribute('class',"popup2Title")
    popup2Title.innerText = "Add New Task";
    popup2Div.appendChild(popup2Title)

    // popup2Input 
    var popup2Input  = document.createElement('input')
    popup2Input.setAttribute('class',"popup2Input")
    popup2Input.setAttribute('id','$popup2Input')
    popup2Div.appendChild(popup2Input)


    // popup2ButtonDiv
    var popup2ButtonDiv = document.createElement('div')
    popup2ButtonDiv.setAttribute('class','popup2ButtonDiv')
    popup2Div.appendChild(popup2ButtonDiv)


    // popup2AddButton
    var popup2DeleteButton = document.createElement('div')
    popup2DeleteButton.setAttribute('class','popup2DeleteButton')
    popup2DeleteButton.innerText = "Delete Item";
    popup2ButtonDiv.appendChild(popup2DeleteButton)

    popup2DeleteButton.addEventListener('click', ()=>{
      popup2Div.remove();
      popup2Blur.remove();
    })

    // popup2AddButton
    var popup2AddButton = document.createElement('div')
    popup2AddButton.setAttribute('class',"popup2AddButton")
    popup2AddButton.innerText = "Add Item"
    popup2ButtonDiv.appendChild(popup2AddButton)

    popup2AddButton.addEventListener('click', function () {
      var addTaskListItem = document.createElement("div");
      addTaskListItem.setAttribute("class", "addTaskListItem");
      var input2 = document.getElementById("$popup2Input");   

      var joaddhua = document.createElement('p')
      joaddhua.setAttribute('class',"joaddhua")
      joaddhua.innerHTML = input2.value;
      addTaskListItem.appendChild(joaddhua);

      var itemhatao = document.createElement('p')
      itemhatao.setAttribute('class',"itemhatao")
      itemhatao.innerHTML = 'Done'
      addTaskListItem.appendChild(itemhatao);

      itemhatao.addEventListener('click',function(){
        // let text=input2.value;
        // let result = text.strike();
        // input2.value.innerHTML= result;
        addTaskListItem.remove();
      })
      itemlist
      .appendChild(addTaskListItem);
      popup2Div.remove();
      popup2Blur.remove();
    })
    
});

cardtitle.addEventListener("click", () => {
  showCard.classList.remove("hide");
  newcard.classList.add("cardBody2");
  newcard.classList.remove("cardBody");
  showCard.appendChild(newcard);
});

backButton.addEventListener("click", () => {
  showCardBack();
});

function showCardBack() {
  showCard.classList.add("hide");
  cardBody.classList.add("cardBody");
  cardBody.classList.remove("cardBody2");
  cardContainer2.appendChild(newcard);
}

showCardAdd.addEventListener('click',()=>{
  showCardAddMain()
})

function showCardAddMain(){
  blur.classList.remove("hide");
  popup1.classList.remove("hide");
  popup1.classList.add("show");

  showCard.classList.add("hide");
  cardBody.classList.add("cardBody");
  cardBody.classList.remove("cardBody2");
  cardContainer2.appendChild(newcard);
}

}

  function newTaskClose() {
    var blur = document.getElementById("$blurBackground");
    blur.classList.add("hide");
  
    var popup1 = document.getElementById("popup");
    popup1.classList.remove("show");
    popup1.classList.add("hide");
  }

  
// closing of second popupbox
// let closebutton = document.getElementById("closebutton2");
 function hideAdditem() {
  additempopup.classList.add("hide");
}

