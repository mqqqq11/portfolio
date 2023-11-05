
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import {Navigation} from './componets/Navigation'
import {Home} from './pages/Home'
import {Projects} from './pages/Projects'
import {Contact} from './pages/Contact'; 

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
