
const newsHeader = document.querySelector(".header-container");

const paperData = (['Lambda Time', 'April 9, 2021', '29\u00B0']);

const Header = (title, date, temp) => {
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
      const headerDiv = document.createElement("div");
      const dateSpan = document.createElement("span");
      const titleHeader = document.createElement("h1");
      const tempSpan = document.createElement("span");

        headerDiv.appendChild(dateSpan);
        headerDiv.appendChild(titleHeader);
        headerDiv.appendChild(tempSpan);
        
          headerDiv.classList.add("header");
          dateSpan.classList.add("date");
          tempSpan.classList.add("temp");

            titleHeader.textContent = paperData[0];
            dateSpan.textContent = paperData[1];
            tempSpan.textContent = paperData[2];
            console.log (headerDiv)
return headerDiv;
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  paperData.forEach((titles) => {
    const headerDiv = Header(titles);
    return newsHeader.appendChild(headerDiv);
  });

}


export { Header, headerAppender }
