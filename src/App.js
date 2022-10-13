import './App.css';

// json
import json from './json/db.json'

// Components
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'
import Games from './components/Games/Games'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar txt={json.navbar}/>
      <div className='main'>
        <AboutUs txt={json.about} />
        <Games txt={json.games} />
      </div>
      <Footer txt={json.footer} nav={json.navbar}/>
    </div>
  );
}

export default App;
