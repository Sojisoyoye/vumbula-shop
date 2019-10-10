import React, {Component} from 'react';
import image from '../img/vumbulaitem.png';
import {ItemCard} from "./ItemCard";
import {Footer} from "./Footer";
import {Nav} from "./Nav";
import {Jumbtron} from "./Jumbtron";
import {AddItem} from "./AddItem";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Noodles",
        price: "15"
      },
      {
        id: 2,
        name: "Mangoes",
        price: "10"
      },
      {
        id: 3,
        name: "Oranges",
        price: "20"
      },
      {
        id: 4,
        name: "Passion Fruits",
        price: "14"
      }
    ],
    name: '',
    price: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addItem = event => {
    event.preventDefault();
    const { name, price } = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {id, name, price}),
      ],
      name: '',
      price: '',
    })
  }

  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            isEditing: !item.isEditing
          }
        }

        return item;
      })
    });
  };

  handleItemUpdate = (event, index) => {
   const name = event.target.name;
   const value = event.target.value;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            [name]: value
          }
        }
        return item;
      })
    })
  }

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    })
  }

  render() {
    const { name, price } = this.state;
  
    return (
    <div>
      <Nav/>

      <Jumbtron/>

      <div className="container pt-4">

        <AddItem
          name={name}
          price={price}
          onChange={this.handleInputChange}
          onSubmit={this.addItem}
        />

        <h1 className="display-4 my-4 text-center text-muted">Items</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <ItemCard
                    key={item.id}
                    index={index}
                    image={image}
                    item={item}
                    toggleEdit={() => this.toggleItemEditing(index)}
                    toggleUpdate={(event) => this.handleItemUpdate(event, index)}
                    toggleDelete={() => this.onDelete(index)}
                />
            )
          }
        </div>

        <hr/>

        <Footer/>
      </div>
    </div>
    );
  }
}

export default App;