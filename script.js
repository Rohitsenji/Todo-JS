var popup2 = document.getElementById("$secondPopup");
var blur = document.getElementById("$blurBackground");
var logo = document.getElementsByClassName("logo")[0];
var backButton = document.getElementById("$back");
var showCard = document.getElementById("$showCard");
var cardContainer = document.getElementById("$cardContainer"); 
var showCardAdd = document.getElementById('$showCardAdd');
var popup1 = document.getElementById("popup");
var blur = document.getElementById("$blurBackground");


// add Item Button
function addItemButton() {
  blur.classList.remove("hide");


  popup1.classList.remove("hide");
  popup1.classList.add("show");
}

function newTaskAdd() {
  var blur = document.getElementById("$blurBackground");
  blur.classList.add("hide");

  var popup1 = document.getElementById("popup");
  popup1.classList.remove("show");
  popup1.classList.add("hide");

  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "cardBody");
  cardBody.setAttribute("id", "$cardBody");
  cardContainer.appendChild(cardBody);

  var cardHeading = document.getElementById("$input").value;

  if (cardHeading === "" || cardHeading === " ") {
    alert("Please Enter Task");
    cardBody.classList.add("hide");
  }

  var cardTitle = document.createElement("h2");
  cardTitle.setAttribute("class", "cardTitle");
  cardTitle.innerHTML = cardHeading;
  cardBody.appendChild(cardTitle);

  cardTitle.addEventListener("click", () => {
    showCard.classList.remove("hide");
    cardBody.classList.add("cardBody2");
    cardBody.classList.remove("cardBody");
    showCard.appendChild(cardBody);
  });

  var innerDiv = document.createElement("div");
  innerDiv.setAttribute("class", "cardInnerDiv");
  cardBody.appendChild(innerDiv);

  var cardButtonDiv = document.createElement("div");
  cardButtonDiv.setAttribute("class", "cardDuttonDiv");
  cardBody.appendChild(cardButtonDiv);

  var cardDeleteButton = document.createElement("div");
  cardDeleteButton.setAttribute("class", "cardDeleteButton");
  cardDeleteButton.setAttribute("id", "$cardDeleteButton");
  cardDeleteButton.innerText = "Delete Task";
  cardButtonDiv.appendChild(cardDeleteButton);

  cardDeleteButton.addEventListener("click", () => {
    cardDeleteButton.parentNode.parentNode.setAttribute("class", "hide");
    var showCard = document.getElementById("$showCard");
    showCard.classList.add("hide");
  });

  var cardAddButton = document.createElement("div");
  cardAddButton.setAttribute("class", "cardAddButton");
  cardAddButton.setAttribute("id", "$cardAddButton");
  cardAddButton.innerText = "Add Item";
  cardButtonDiv.appendChild(cardAddButton);

  cardAddButton.addEventListener("click", () => {
    // popup2Blur
    var popup2Blur = document.createElement("div");
    popup2Blur.setAttribute("class", "popup2blur");
    var mainContainer = document.getElementById("$maincontainer");
    mainContainer.appendChild(popup2Blur);

    // popup2Container
    var popup2Div = document.createElement("div");
    popup2Div.setAttribute("class", "popup2Div");
    popup2Blur.appendChild(popup2Div);

    // popup2Title
    var popup2Title = document.createElement("h2");
    popup2Title.setAttribute("class", "popup2Title");
    popup2Title.innerText = "Add New Task";
    popup2Div.appendChild(popup2Title);

    // secondPopupImg
    var secondPopupImg = document.createElement("img");
    secondPopupImg.setAttribute("class", "secondPopupImg");
    // secondPopupImg.src = "./assets/avengers-40995.png";
    popup2Div.appendChild(secondPopupImg);

    // popup2Input
    var popup2Input = document.createElement("input");
    popup2Input.setAttribute("class", "popup2Input");
    popup2Input.setAttribute("id", "$popup2Input");
    popup2Div.appendChild(popup2Input);

    // popup2ButtonDiv
    var popup2ButtonDiv = document.createElement("div");
    popup2ButtonDiv.setAttribute("class", "popup2ButtonDiv");
    popup2Div.appendChild(popup2ButtonDiv);

    // popup2AddButton
    var popup2DeleteButton = document.createElement("div");
    popup2DeleteButton.setAttribute("class", "popup2DeleteButton");
    popup2DeleteButton.innerText = "Delete Item";
    popup2ButtonDiv.appendChild(popup2DeleteButton);

    popup2DeleteButton.addEventListener("click", () => {
      popup2Div.remove();
      popup2Blur.remove();
    });

    // popup2AddButton
    var popup2AddButton = document.createElement("div");
    popup2AddButton.setAttribute("class", "popup2AddButton");
    popup2AddButton.innerText = "Add Item";
    popup2ButtonDiv.appendChild(popup2AddButton);

    popup2AddButton.addEventListener("click", function () {
      var addTaskListItem = document.createElement("div");
      addTaskListItem.setAttribute("class", "addTaskListItem");
      var input2 = document.getElementById("$popup2Input");

      var TaskListp = document.createElement("p");
      TaskListp.setAttribute("class", "TaskListp");
      TaskListp.innerHTML = input2.value;
      addTaskListItem.appendChild(TaskListp);

      var TaskListpCancel = document.createElement("p");
      TaskListpCancel.setAttribute("class", "TaskListpCancel");
      TaskListpCancel.innerHTML = 'Done';
      addTaskListItem.appendChild(TaskListpCancel);

      TaskListpCancel.addEventListener("click", function () {
        addTaskListItem.remove();
      });
      innerDiv.appendChild(addTaskListItem);
      popup2Div.remove();
      popup2Blur.remove();
    });
  });

  backButton.addEventListener("click", () => {
    showCardBack();
  });

  function showCardBack() {
    showCard.classList.add("hide");
    cardBody.classList.add("cardBody");
    cardBody.classList.remove("cardBody2");
    cardContainer.appendChild(cardBody);
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
    cardContainer.appendChild(cardBody);
  }

}

function newTaskClose() {
  var blur = document.getElementById("$blurBackground");
  blur.classList.add("hide");

  var popup1 = document.getElementById("popup");
  popup1.classList.remove("show");
  popup1.classList.add("hide");
}
