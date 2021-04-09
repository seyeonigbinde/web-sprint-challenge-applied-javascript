
import axios from "axios";
import { topics } from "../mocks/data";
const tabDetails = document.querySelector(".tabs-container");
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const tabDiv = document.createElement("div");
  const javaDiv = document.createElement("div");
  const bootDiv = document.createElement("div");
  const techDiv = document.createElement("div");

    tabDiv.appendChild(javaDiv);
    tabDiv.appendChild(bootDiv);
    tabDiv.appendChild(techDiv);

      tabDiv.classList.add("topics");
      javaDiv.classList.add("tab");
      bootDiv.classList.add("tab");
      techDiv.classList.add("tab");

        javaDiv.textContent = topics[0]
        bootDiv.textContent= topics[1]
        techDiv.textContent = topics[2]
        console.log (tabDiv)

        return tabDiv;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    console.log(`Response Tab:`, res.data.topics);
    const tabCard = Tabs(res.data.topics);
      console.log(tabCard);
      tabDetails.appendChild(tabCard);
    })
  .catch((err) => {
   
  });
}


export { Tabs, tabsAppender }
