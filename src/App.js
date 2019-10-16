import "./App.css";
import "./Page2.js";
import image1 from "./Peanut-Butter-Banana-Smoothie.jpg";
import React, { Component } from "react";

// Declare our two recipes in JSON format.
const recipes = [
  {
    image: image1,
    title: "Banana Peanut Smoothie",
    summary: "Yummy, easy, and smooth!",
    steps: "1. Hello 2. World",
    ingredients:
      "1 ripe banana, 1 Tbs of peanut butter, 3/4 cup of milk, 1 ice cube"
  },
  {
    image: image1,
    title: "Healthy Cookies",
    summary: "Hearty & healthy",
    steps: "1. Get peanut butter. 2. Whole wheat flour. 3. Eggs.",
    ingredients:
      "2 cups whole oats, 1.5 cups whole wheat flour, 2 Tbs of peanut butter, 2 eggs"
  }
];

/*
const imageClick = () => {
  console.log("clicked : "); // works
};
*/

/*
// imageClick: called when a recipe picture, title, or summary is clicked
// This function first removes all elements on the homepage, then it displays the details of the recipe
// that was clicked.
function imageClick(index) {
  console.log("OUTSIDE 'MAIN'. index selected = " + index);
  const myNode = document.getElementById("page");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes };

    this.imageClick = this.imageClick.bind(this);
  }

  // imageClick: called when a recipe picture, title, or summary is clicked
  // Will take user to page that displays the details of the recipe.
  imageClick = index => {
    console.log("INSIDE 'MAIN'. index selected = " + index);
    const myNode = document.getElementById("page");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  };

  render() {
    return (
      <div id="page">
        <ul>
          {recipes.map((item, index) => (
            <div key={item.title}>
              <a
                type="button"
                className="card-link"
                onClick={() => this.imageClick(index)}
              >
                <span>
                  <img src={item.image} />
                </span>
                <span>
                  <h2 id={item.title}>{item.title}</h2>
                </span>
                <span>
                  <h4>{item.summary}</h4>
                </span>
                <br />
                <br />
              </a>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
