
import './App.css';
import navbar from './resources/images/Navbar.png'


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)-20
function App() {
  return (
    <div id="container">
      <img src={navbar} height="79px" width={`${vw}px`}/>
    </div>
  );
}

export default App;
