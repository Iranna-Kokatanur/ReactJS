import { Component } from 'react';
import './App.css';
import Comp from './components/Comp';

// function App() {
//   return <div className='App'>class based components</div>;
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
        class based components
        <Comp name={'Iranna'} />
      </div>
    );
  }
}

export default App;
