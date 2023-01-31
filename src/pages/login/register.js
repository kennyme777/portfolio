import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState(
        {
            name: '',
            email: '',
            password: '',
            image_url: ''
        }
    )

    const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value })

    const handleRegister = (e) => {
        e.preventDefault()

        let { name, email, password, image_url } = input
        axios.post('https://dev-example.sanbercloud.com/api/register', { name, email, password, image_url })
            .then((res) => {
                navigate('/login')
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className='h-screen flex justify-center items-center w-full mx-auto'>
            <form onSubmit={ handleRegister } className='w-96 border p-9 py-7 rounded-lg shadow-lg'>
                <div className='font-bold text-2xl text-center uppercase mb-8 text-slate-500'>Form <span className='text-rose-500'>Register</span></div>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Name</label>
                    <input onChange={ handleChange } name={ 'name' } type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Name" value={ input.name } required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>
                    <input onChange={ handleChange } name={ 'email' } type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Email" value={ input.email } required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Password</label>
                    <input onChange={ handleChange } name={ 'password' } type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Input Password' value={ input.password } minLength={ 8 } required />
                </div>
                <div className="mb-6">
                    <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Image URL</label>
                    <input onChange={ handleChange } name={ 'image_url' } type="text" id="image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Image URL" value={ input.image_url } required />
                </div>
                <button type="submit" className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Submit</button>
           
                    <Link to={ '/login' } className='flex justify-end items-center gap-2 text-sm text-rose-600 hover:text-rose-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        <div>
                            Back to Login
                        </div>
                    </Link>
            </form>
        </div>
    )
}

export default Register