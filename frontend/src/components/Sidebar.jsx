import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaHome, FaVideo } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { IoSettingsSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? " hidden " : " block "} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to='/' className='px-3'>
              <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
              Home
          </Link>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to='/Profile' className='px-3'>
              <CgProfile className='inline-block w-6 h-6 mr-2 -mt-2'></CgProfile>
              Profile
          </Link>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to='/Rooms' className='px-3'>
              <FaVideo className='inline-block w-6 h-5 mr-2 -mt-2'></FaVideo>
              Create Room
          </Link>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to='/Settings' className='px-3'>
              <IoSettingsSharp className='inline-block w-6 h-6 mr-2 -mt-2'></IoSettingsSharp>
              Setting
          </Link>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to='/' className='px-3'>
              <FiLogOut className='inline-block w-6 h-6 mr-2 -mt-2'></FiLogOut>
              Log Out
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar