import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Hero from '../../components/hero'
import Footer from './../../components/footer';
import { GlobalContext } from './../../context/GlobalContext';

const Home = () => {

    // initial state
    const { state, handleFunction } = useContext(GlobalContext)

    const {
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        dataJob, setDataJob,
        input, setInput,
        filter, setFilter,
        search, setSearch
    } = state

    const {
        formatRupiah,
        handleText,
        handleJobStatus,
        handleInput,
        handleEdit,
        handleDelete,
        handleSubmit,
        handleChangeFilter,
        handleFilter,
        handleChangeSearch,
        handleSearch,
        handleReset
    } = handleFunction


    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            .then((res) => {
                setDataJob(res.data.data)
            })
    }, [])


    return (
        <>
            <Hero />

            {/* Card */ }
            <div className='w-full text-center font-bold text-slate-800 text-3xl mb-3 uppercase'>Available <span className='text-blue-600'>Job</span></div>
            <div className='text-center text-slate-500'>
                There are { dataJob ? dataJob.length : 0 } jobs available, Find more <Link to={ '/job-vacancy' } className='text-blue-600'>here...</Link> 
            </div>
            <div className='flex justify-center mt-12'>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 mx-16'>
                    {
                        dataJob !== null &&
                        dataJob
                            .filter((res, index) => {
                                return index < 3
                            })
                            .map((res) => {
                                return (

                                    <Link to={ `/job-vacancy/${res.id}` } key={ res.id } className="w-full max-w-sm p-6 bg-white shadow-lg rounded-xl transition ease-in-out duration-300 hover:scale-110 hover:border border-[1px] hover:border-violet-700">
                                        {/* header */ }
                                        {/* <div className='px-3 py-1 text-sm absolute bg-blue-200 -right-3 bottom-4 rounded-lg'>Close</div> */ }

                                        <div className="flex flex-col items-center justify-between mb-4">
                                            <div className="flex items-center justify-start flex-grow w-full">
                                                <div href="#" className="relative block">
                                                    <img alt="profil" src={ res.company_image_url } className="mx-auto object-cover rounded h-10 w-10 " />
                                                </div>
                                                <div className="flex flex-col items-start ml-4 font-bold">
                                                    <span className="text-gray-800">
                                                        { res.title }
                                                    </span>
                                                    <span className="text-sm font-normal text-gray-600">
                                                        { res.company_name }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* body */ }
                                        <p className="flex items-center gap-2 mb-1 text-lg text-slate-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={ 14 } height={ 14 } fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            <span className='text-sm'>
                                                { res.company_city }
                                            </span>
                                        </p>
                                        <p className="flex items-center gap-2 mb-1 text-lg text-slate-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                            </svg>
                                            <span className='text-sm'>
                                                { res.job_tenure }
                                            </span>
                                        </p>
                                        <p className="flex items-center gap-2 mb-1 text-lg text-slate-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                            </svg>
                                            <span className='text-sm'>
                                                { formatRupiah(res.salary_min + '', 1) } - { formatRupiah(res.salary_max + '') }
                                            </span>
                                        </p>

                                        {/* footer */ }
                                        <div className='flex gap-3 mt-5'>
                                            <div className="w-fit px-3 pt-[0.15rem] pb-[0.28rem] font-semibold text-xs text-violet-700 lowercase bg-violet-50  rounded-full">
                                                { res.job_type }
                                            </div>
                                            { handleJobStatus(res.job_status) }
                                        </div>
                                    </Link>
                                )
                            })
                    }
                </div>
            </div>
                

        </>
    )
}

export default Home