import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/navbar.componet';
import Result from './components/home.component';
import Favorites from './components/favorites.component';
import APOD from './components/subComponents/apod.component';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={< Favorites />} />
        <Route path="/apod" element={<APOD />} />
      </Routes>
    </Router>
  );
}

export default App;
