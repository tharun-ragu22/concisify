
import './App.css';
import navbar from './resources/images/Navbar.png'
import clock from './resources/images/Clock_Lines.png'
import Note from './resources/components/Note'
import apiData from './apiData'

const vw = window.innerWidth - 20
function App() {
  const my_notes = apiData.response.map(data => <Note text={data.note} />)
  // <div>
  //   {my_notes}
  // </div>

  return (
    <div id="container">
      <img src={navbar} height="79px" width={`${vw}px`} style={{ paddingBottom: 140 }} />
      <div id="body">
        <p id="header">Concisify</p>
        <img src={clock} height="101px" width="101px" style={{ paddingTop: 69, paddingLeft: 14 }} />
      </div>
      <div id="body" style={{ paddingTop: 1, paddingBottom: 100 }}>
        <p id="desc">The notes that take you hours, printed in seconds with AI!</p>
      </div>
      <div id="notes">
        {my_notes}
      </div>
    </div>
  );
}

export default App;
