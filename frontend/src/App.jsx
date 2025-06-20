import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import './App.css'
import Posts from './components/Posts';
import Navbar from './components/Navbar'


function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div>
        <Navbar 
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
    <div className='flex'>
      
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
      />
      <Posts />
    </div>
    </div>
  )
}

export default App;
