import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Dashboard = () => {
  let navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('token')
    navigate('/login')
  }

  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 text-slate-700 px-5'>
        <Link to={ `/` } className="flex items-center gap-4 w-full max-w-sm p-6 bg-white shadow-lg rounded-xl transition ease-in-out duration-300 hover:scale-110 border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>

          <div className='font-semibold'>Home</div>
        </Link>
        <Link to={ `/dashboard/list-job-vacancy` } className="flex items-center gap-4 w-full max-w-sm p-6 bg-white shadow-lg rounded-xl transition ease-in-out duration-300 hover:scale-110 border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-briefcase-fill w-5 h-6" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
          </svg>
          <div className='font-semibold'>Job List</div>
        </Link>
        <Link to={ `/profile` } className="flex items-center gap-4 w-full max-w-sm p-6 bg-white shadow-lg rounded-xl transition ease-in-out duration-300 hover:scale-110 border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill w-6 h-6" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
          <div className='font-semibold'>Profile</div>
        </Link>
        <button onClick={ handleLogout } className="flex items-center gap-4 w-full max-w-sm p-6 bg-white shadow-lg rounded-xl transition ease-in-out duration-300 hover:scale-110 border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-square-fill w-6 h-6" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
          </svg>
          <div className='font-semibold'>Logout</div>
        </button>
      </div>

    </>
  )
}

export default Dashboard