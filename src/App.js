import React, { Component} from 'react';
import Products from "./components/products";
import logo from './logo.svg';
import './App.css';

class App extends  Component {

  state = {
    products: []
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/jubs16/Products/Products')
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data })
      })
      .catch(console.log)
  }

  render() {
    return (
        <Products products={this.state.products} />
    )
  }
}

export default App;
