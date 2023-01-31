import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardSvg, ListSvg, FormSvg } from './svg'

const Sidebar = () => {
    return (
        <div className='w-60 h-full bg-slate-100 pt-8 shadow-lg'>
            <div className='flex items-center justify-start'>
                <div className=' w-full text-start text-xl text-slate-600 font-bold px-11'>
                    JobSeeker
                </div>
            </div>
            <nav className='mt-6'>
                <div className='w-full text-slate-400 transition-colors duration-200'>
                    <Link to='/dashboard' className='flex justify-start w-full py-2.5 items-center hover:bg-blue-800 font-semibold hover:text-slate-50 transition ease-in-out duration-75 px-11'>
                        <span className='text-left mr-4'><DashboardSvg /></span>
                        <span className='text-sm'>Dashboard</span>
                    </Link>
                </div>

                {/* <div className='pt-3 text-slate-400 text-xs font-semibold underline px-11'>Manage Data</div> */}

                <div className='w-full text-slate-400 transition-colors duration-200'>
                    <Link to='/dashboard/list-job-vacancy' className='flex justify-start w-full py-2.5 items-center hover:bg-blue-800 font-semibold hover:text-slate-50 transition ease-in-out duration-75 px-11'>
                        <span className='text-left mr-4'><ListSvg /></span>
                        <span className='text-sm'>Job List</span>
                    </Link>
                </div>

                <div className='w-full text-slate-400 transition-colors duration-200'>
                    <Link to='/dashboard/list-job-vacancy/form' className='flex justify-start w-full py-2.5 items-center hover:bg-blue-800 font-semibold hover:text-slate-50 transition ease-in-out duration-75 px-11'>
                        <span className='text-left mr-4'><FormSvg /></span>
                        <span className='text-sm'>Job Form</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar