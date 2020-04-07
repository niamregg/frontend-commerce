import React, { Component} from 'react';
import Body from './components/body';
import logo from './sneakers.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      logo: logo
    };
  }

  componentDidMount() {
    fetch('http://my-json-server.typicode.com/niamregg/json-placeholder/data')
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Body
        logo={this.state.logo}
        products={this.state.products}
      />
    )
  }
}

export default App;
