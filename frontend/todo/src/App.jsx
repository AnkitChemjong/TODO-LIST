import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './compo/Home.jsx';
import './compo/css/home.css';

function App() {
  

  return (
   <Router>
    <Routes>
      <Route>
         <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
   </Router>
  )
}

export default App
