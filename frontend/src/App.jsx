import { Routes, Route } from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

const movieList = {
  movie1: {
    title: "Kung-Fu Panda",
    release_date: 2008,
    rating: 4.75,
  }, 
  movie2: {
    title: "Tenet",
    release_date: 2021,
    rating: 5,
  },
};

function App() {
  const movieNumber = 1;

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
