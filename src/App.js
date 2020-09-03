import React from "react";

import "./App.css";
import { Component } from "react";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItems: {
        text: "",
        key: "",
        boolValue: false,
      },
      editChange: {
        value: false,
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  /*const [editchange, setEdit] = useState({
    value: false,
  });*/

  handleUpdate = (i) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === i) {
        this.setState({
          currentItems: {
            boolValue: false,
          },
        });

        item.boolValue = this.state.currentItems.boolValue;
      }
    });
  };

  handleEdit = (i) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === i) {
        this.setState({
          ...this.state,
          currentItems: {
            ...this.state.currentItems,
            boolValue: true,
          },
        });

        item.boolValue = this.state.currentItems.boolValue;
      }
    });
  };
  handleInput(e) {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now(),
        boolValue: false,
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItems;

    console.log("the value fromte the addItem", newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          boolValue: false,

          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
  render() {
    console.log(this.state.items);
    console.log(this.state.currentItems);
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <header>
          <form id="todo_form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Todo list"
              value={this.state.currentItems.text}
              onChange={this.handleInput}
            />
            <button type="submit"> Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          handleEdit={this.handleEdit}
          handleUpdate={this.handleUpdate}
          editChange={this.state.editChange}
        ></ListItems>
      </div>
    );
  }
}
export default App;
