import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState(
        {
            email: '',
            password: ''
        }
    )

    const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()

        let { email, password } = input
        axios.post('https://dev-example.sanbercloud.com/api/login', { email, password })
            .then((res) => {
                let { data } = res
                let { token, user } = data

                Cookies.set('token', token, { expires: 1 })
                Cookies.set('user_data', JSON.stringify(user), { expires: 1 })
                navigate('/dashboard')
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className='h-screen flex justify-center items-center w-full mx-auto'>
            <form onSubmit={ handleSubmit } className='w-80 border p-8 rounded-lg shadow-lg'>
                <div className='font-bold text-2xl text-center uppercase mb-8 text-slate-500'>Form <span className='text-blue-500'>Login</span></div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Email</label>
                    <input onChange={ handleChange } name={ 'email' } type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Email" value={ input.email } required />
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Password</label>
                    <input onChange={ handleChange } name={ 'password' } type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Input Password' value={ input.password } required />
                </div>
                <div className='text-end'>
                    <Link to={'/register'} className='text-sm text-blue-600 hover:text-blue-700'>Don't have account?</Link>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default Login