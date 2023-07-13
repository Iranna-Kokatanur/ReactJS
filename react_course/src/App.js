
import './App.css';
import {Footer} from './components/Header';
import Header from './components/Header';

function App() {

  let sirName = "Kokatanur";

  return (
    <div className="App">
        <h2 style={{color:'purple',backgroundColor:'pink'}}>Hello World</h2>
        <Header name = {sirName}/>
        <Footer val = "I am existing in Last of the page."/>
        <Header/>
    </div>
    
  );
}

export default App;
