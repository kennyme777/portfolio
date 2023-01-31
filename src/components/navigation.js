import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Navigation = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('token')
        navigate('/login')
    }

    return (
        <Navbar fluid={ true } rounded={ true } className="bg-opacity-50">
            <div className="container p-5 flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap">JobSeeker.id</span>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link to="/" className="block text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/job-vacancy" className="block text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Job Vacancy</Link>
                        </li>
                        {
                            Cookies.get('token') === undefined &&
                            (
                                <>
                                    <div className="rounded-lg bg-gray-100 w-1 h-6"></div>
                                    <li>
                                        <Link to="/login" className="block text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Login</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            Cookies.get('token') &&
                            (
                                <>
                                    <li>
                                        <Link to="/dashboard" className="block text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 underline" aria-current="page">Dashboard</Link>
                                    </li>
                                    <div className="rounded-lg bg-gray-100 w-1 h-6"></div>
                                    <li>
                                        <span onClick={ handleLogout } className="block pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Logout</span>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation