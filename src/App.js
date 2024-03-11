import React from "react";
// import { Component } from "react";
import List from "./components/List";
import "./App.css";

const initialUserDetailsList = [];

class App extends React.Component {
  state = {
    addInput: "",
    usersDetailsList: initialUserDetailsList,
  };

  submitForm = (event) => {
    event.preventDefault();
    const { addInput, usersDetailsList } = this.state;
    if (addInput === "") {
      alert("Please Enter the details");
      return;
    }

    const newTodo = {
      text: addInput,
      uniqueNo: usersDetailsList.length + 1,
    };

    this.setState((prevState) => ({
      usersDetailsList: [...prevState.usersDetailsList, newTodo],
      addInput: "",
    }));
  };

  addInputEle = (event) => {
    const inputValue = event.target.value;
    this.setState({ addInput: inputValue });
  };

  OndeleteUniq = (uniqueNo) => {
    const { usersDetailsList } = this.state;

    //  const filtetList = usersDetailsList.filter((comment)=>comment.uniqueNo !== uniqueNo)
    //     usersDetailsList
    const filterList = usersDetailsList.filter(
      (eachone) => eachone.uniqueNo !== uniqueNo
    );
    this.setState({ usersDetailsList: filterList });
  };

  render() {
    const { addInput, usersDetailsList } = this.state;

    return (
      <div className="main_bg">
        <form onSubmit={this.submitForm}>
          <h1 className="todos-heading">DayGoals!</h1>
          <input
            type="text"
            onChange={this.addInputEle}
            className="todo-user-input"
            placeholder="Write Code 3"
            value={addInput}
          />

          <div>
            <button className="add_button">Add</button>
          </div>

          <div>
            <ul className="todo-items-container">
              {usersDetailsList.map((each) => (
                <List
                  inputDate={each}
                  key={each.uniqueNo}
                  OndeleteUniq={this.OndeleteUniq}
                />
              ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
