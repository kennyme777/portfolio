import React from 'react'
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const Profile = () => {

    const [user, setUser] = useState(JSON.parse(Cookies.get('user_data')))

    const [input, setInput] = useState(
        {
            current_password: '',
            new_password: '',
            new_confirm_password: ''
        }
    )

    const handleInput = (e) => setInput({ ...input, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()

        let { current_password, new_password, new_confirm_password } = input
        console.log(input)
        axios.post('https://dev-example.sanbercloud.com/api/change-password',
            { current_password, new_password, new_confirm_password },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then((res) => {
                alert('Success')
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className='grid grid-cols-1 mx-auto lg:w-1/2 md:w-full'>
            <div className="mb-5">
                <img alt="profil" src={ user.image_url } className="mx-auto object-cover rounded-full w-2/3" />
            </div>

            <div className='container'>
                <div className='font-bold text-2xl uppercase mb-3'>Form <span className='text-blue-500'>Profile</span></div>
                <form onSubmit={ handleSubmit }>
                    <div className='mb-6'>
                        <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Name :</label>
                        <input type='text' id='name' name='name' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' value={ user.name } required disabled />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Email :</label>
                        <input type='email' id='name' name='name' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' value={ user.email } required disabled />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='current_password' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Current Password :</label>
                        <input onChange={ handleInput } type='password' id='current_password' name='current_password' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' minLength={ 8 } required />
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='mb-6'>
                            <label htmlFor='new_password' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>New Password :</label>
                            <input onChange={ handleInput } type='password' id='new_password' name='new_password' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' minLength={ 8 } required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor='new_confirm_password' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Confirm Password :</label>
                            <input onChange={ handleInput } type='password' id='new_confirm_password' name='new_confirm_password' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' minLength={ 8 } required />
                        </div>
                    </div>
                    <div className='w-full text-end'>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile