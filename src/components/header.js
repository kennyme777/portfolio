import React, { useState } from 'react'
import { Dropdown } from 'flowbite-react'
import Cookies from 'js-cookie';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate()

    const [user, setUser] = useState(JSON.parse(Cookies.get('user_data')))

    const handleLogout = () => {
        Cookies.remove('token')
        navigate('/login')
    }

    return (
        <>
            <div className='flex justify-end items-center gap-4 h-20'>
                <div className='flex flex-wrap items-center'>

                    <div className="rounded-lg bg-gray-200 w-1 h-8 mr-5"></div>
                    <Dropdown label={ user.name } placement='bottom' inline={ true }>
                        <Dropdown.Item className='w-32'>
                            <Link to={ "/profile" } className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg>
                                Profile
                            </Link>
                        </Dropdown.Item>
                        <div className='xs:hidden' >

                        <Dropdown.Divider />
                        </div>
                        <Dropdown.Item>
                            <Link to={ "/" } className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                </svg>
                                Home
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <button onClick={ handleLogout } className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={ 16 } height={ 16 } fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                                Logout
                            </button>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Header