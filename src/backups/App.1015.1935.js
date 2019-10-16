import "./App.css";
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

function imageClick(title, index) {
  console.log("title : " + title);
  return (
    <div key={index}>
      <h4>Ingredients: {recipes[index].ingredients}</h4>
    </div>
  );
}

class Recipe extends React.Component {
  render() {
    return (
      <div className="table">
        <img src={recipes.image} onClick={this.imageClick} />
        <h3> {recipes.title} </h3>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes };
  }

  /*
  // imageClick: called when a recipe picture, title, or summary is clicked
  // Will take user to page that displays the details of the recipe.
  imageClick = (title, index) => {
    console.log("title : " + title);
    return (
      <div key={index}>
        <h4>Ingredients: {recipes[index].ingredients}</h4>
      </div>
    );
  };
  */

  render() {
    return (
      <div>
        <ul>
          {this.state.recipes.map((item, index) => (
            <div key={item.title}>
              <a
                type="button"
                className="card-link"
                onClick={() => imageClick(item.title, index)}
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

/*
 this.state = {
      list: [42, 33, 68],
    };
  }
  onUpdateItem = i => {
    ...
  };


<ul>
  {this.state.list.map((item, index) => (
    <li key={item}>
      The person is {item} years old.
      <button
        type="button"
        onClick={() => this.onUpdateItem(index)}
      >
        Make me one year older
      </button>
    </li>
  ))}
</ul>

*/

//React.render(<App url="/Peanut-Butter-Banana-Smoothie.jpg" />, document.body);

export default App;

/*
import React, { Component } from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

function isSearched(searchTerm) {
  return function(item) {
    return function(item) {
      return (
        !searchTerm ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onClick() {
    console.log("Clicked!");
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            {" "}
            Search{" "}
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

const Table = ({ list, pattern, onDismiss }) => (
  <div className="table">
    {" "}
    {list.filter(isSearched(pattern)).map(item => (
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={midColumn}> {item.author} </span>
        <span style={smallColumn}> {item.num_comments} </span>
        <span style={smallColumn}> {item.points} </span>
        <span style={smallColumn}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            {" "}
            Dismiss{" "}
          </Button>
        </span>
      </div>
    ))}
  </div>
);

const Search = ({ value, onChange, children }) => (
  <form>
    {" "}
    {children}
    <input type="text" value={value} onChange={onChange} />
  </form>
);

class Button extends Component {
  render() {
    const { onClick, className = "", children } = this.props;
    return (
      <button onClick={onClick} className={className} type="button">
        {" "}
        {children}
      </button>
    );
  }
}

const largeColumn = { width: "40%" };
const midColumn = { width: "30%" };
const smallColumn = { width: "10%" };

export default App;

*/
