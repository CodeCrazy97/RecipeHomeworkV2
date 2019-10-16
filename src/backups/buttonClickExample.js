import React from 'react';
import ReactDOM from "react-dom";


class Input extends React.Component {
    render() {
        return (
            <input placeholder="Your input here" />
        );
    }
}


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputList: []};
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    onAddBtnClick(event) {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(<Input key={inputList.length} />)
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onAddBtnClick}>Add input</button>
                {this.state.inputList.map(function(input, index) {
                    return {input}   
                })}
            </div>
        );
    }
}


ReactDOM.render(
    <Form />,
    document.getElementById("form")
);