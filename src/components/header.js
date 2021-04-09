
const newsHeader = document.querySelector(".header-container");
//Creating the array
const headerData = (['Lambda Times', 'April 9, 2021', '29\u00B0']);

const Header = ([title, date, temp]) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
//Creating the Elements
      const headerDiv = document.createElement("div");
      const dateSpan = document.createElement("span");
      const titleHeader = document.createElement("h1");
      const tempSpan = document.createElement("span");

// Appending the Elements
        headerDiv.appendChild(dateSpan);
        headerDiv.appendChild(titleHeader);
        headerDiv.appendChild(tempSpan);

 //Attaching the Classes to the Elements       
          headerDiv.classList.add("header");
          dateSpan.classList.add("date");
          tempSpan.classList.add("temp");
          
//Attaching the contents to the Elements
            titleHeader.textContent = headerData[0];
            dateSpan.textContent = headerData[1];
            tempSpan.textContent = headerData[2];
            

return headerDiv;
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
    const headers = Header(headerData);
    console.log(headers);
    newsHeader.appendChild(headers);
  
}


export { Header, headerAppender }
