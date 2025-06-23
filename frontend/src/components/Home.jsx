import React from 'react'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import { useState } from 'react';
import Posts from './Posts';
import Navbar from './Navbar';

const Home = () => {
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

export default Home