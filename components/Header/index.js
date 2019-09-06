// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    
    const container = document.createElement("div");
    const date = document.createElement("span");
    const title = document.createElement("h1");
    const temp = document.createElement("span");


    date.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";
  
    container.appendChild(date);
    container.appendChild(title);
    container.appendChild(temp);
  
    container.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");
  
  
    return container;
  }
  
  const newheader = Header();
  const container = document.querySelector(".header-container");
  container.appendChild(newheader);