import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './compo/Home.jsx';
import NavBar from './compo/NavBar.jsx';
import './compo/css/home.css';
import Signin from './compo/Signin.jsx';
import Login from './compo/Login.jsx';

function App() {
  

  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route>
         <Route path='/' element={<Home/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
   </Router>
  )
}

export default App
