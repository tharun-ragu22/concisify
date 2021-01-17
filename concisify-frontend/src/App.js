
import './App.css';
import navbar from './resources/images/Navbar.png'
import clock from './resources/images/Clock_Lines.png'


const vw = window.innerWidth -20
function App() {
  return (
    <div id="container">
      <img src={navbar} height="79px" width={`${vw}px`} style={{paddingBottom: 140}}/>
      <div id="body">
        <p id="header">Concisify</p>
        <img src={clock} height="101px" width="101px" style={{paddingTop:69, paddingLeft:14}}/>
      </div>
      <div id="body" style={{paddingTop: 1}}>
        <p id="desc">The notes that take you hours, printed in seconds with AI!</p>
      </div>
      
    </div>
  );
}

export default App;
