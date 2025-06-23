import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Rooms from './components/Rooms';
import Settings from './components/Settings';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    )
}

export default App;
