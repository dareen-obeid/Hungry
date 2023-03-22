import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar';
import Home from './pages/home';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Categoryitems from './pages/categoryitems';
import MealDetailsPage from './pages/mealdet';
import About from './pages/about';
import NotFoundPage from './pages/notFoundPage';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <NavBar/>
    <Routes>
    <Route path='about' element={<About/>} />
    <Route path='/*' element={<NotFoundPage/>} />

    <Route path='/' element={<Home/>} />
    <Route path='/category/:categoryName' element={<div> <Categoryitems/></div>} />
    <Route path='/meal/:id' element={<div> <MealDetailsPage/> </div>} />
    {/* <Route path='*' element={<div> <notfoundpage/></div>} /> */}
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
