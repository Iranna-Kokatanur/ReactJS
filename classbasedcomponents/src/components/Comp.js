import { Component } from 'react';

export default class Comp extends Component {
  state = {
    name: 'Victor',
    age: '20',
    count: 0,
  };

  //state change
  inc = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount() {
    console.log('Component Created');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }
  render() {
    return (
      <div>
        <h1>Comp {this.props.name}</h1>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.inc}>Inc</button>
      </div>
    );
  }
}
