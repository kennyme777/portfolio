import axios from 'axios';
import { Accordion } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from './../../context/GlobalContext';

const JobVacancy = () => {

    // initial state
    const { state, handleFunction } = useContext(GlobalContext)

    const {
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        dataJob, setDataJob,
        input, setInput,
        filter, setFilter,
        search, setSearch,
        jobHidden, setJobHidden
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
        handleReset,
        handleVisibility
    } = handleFunction


    useEffect(() => {
        if (fetchStatus === true) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
                .then((res) => {
                    setDataJob(res.data.data)
                })
        }
        setFetchStatus(false)
    }, [fetchStatus, setFetchStatus])

    return (
        <>
            {/* SEARCH */ }
            <div className='flex flex-col justify-center items-center'>
                <div className='flex text-end lg:w-1/2 md:w-1/2 sm:w-2/3 xs:w-full items-center'>
                    <form onSubmit={ handleSearch } className='w-full rounded-lg shadow-lg'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>

                            <input onChange={ handleChangeSearch } type="search" id="default-search" className="block w-full p-3.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Job, Company..." value={ search } required />

                            <div className='flex justify-end gap-3 mt-2 absolute right-2.5 bottom-[9px]'>
                                {/* search */ }
                                <button type="submit" className=" text-white bg-slate-700 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-3 py-1.5">
                                    Search
                                </button>
                                {/* reset */ }
                                <button onClick={ handleReset } type="button" className="text-white bg-slate-700 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-2 py-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            {/* FILTER */ }
            <div className='flex justify-center my-5'>
                <div className='lg:w-1/2 md:w-1/2 sm:w-2/3 xs:w-full text-end'>
                    {/* button */ }
                    <button onClick={ handleVisibility } className='group flex flex-nowrap h-[2.4rem] text-slate-800 text-sm font-medium bg-white py-2 px-2.5 rounded-lg border border-slate-500 transition ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 transition ease-in-out duration-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        <div className='ml-1'>
                            { jobHidden ? 'Close Filter' : 'Open Filter' }
                        </div>
                    </button>
                </div>
            </div>

            {/* collapse */ }
            {
                jobHidden &&
                <div className='flex justify-center items-center'>
                    <div className='text-start lg:w-1/2 md:w-1/2 sm:w-2/3 xs:w-full'>
                        <form onSubmit={ handleFilter } className='border p-6 shadow-lg rounded-lg'>
                            <div className='flex justify-between'>
                                <div className='mb-6'>
                                    <input onChange={ handleChangeFilter } value={ filter.job_type } name='job_type' type="text" id="small-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder='Job Type' />
                                </div>
                                <div className='mb-6'>
                                    <input onChange={ handleChangeFilter } value={ filter.job_tenure } name='job_tenure' type="text" id="small-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder='Job Tenure' />
                                </div>
                                <div className='mb-6'>
                                    <input onChange={ handleChangeFilter } value={ filter.company_city } name='company_city' type="text" id="small-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder='City' />
                                </div>
                            </div>
                            <div className='flex justify-end gap-3'>
                                {/* button submit */ }
                                <button type="submit" className="h-[2rem] text-slate-800 text-sm font-medium bg-whites px-2.5 rounded-lg border border-slate-500 hover:shadow">Submit</button>
                                <button onClick={ handleReset } type="button" className="h-[2rem] text-slate-800 text-sm font-medium bg-whites px-2.5 rounded-lg border border-slate-500 hover:shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }


            {/* data */ }
            <div className='flex justify-center mt-10'>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 mx-16'>
                    {
                        dataJob !== null &&
                        dataJob
                            .map((res) => {
                                return (
                                    <Link to={ `/job-vacancy/${res.id}` } key={ res.id } className="w-full max-w-sm p-6 overflow-hidden bg-white shadow-lg rounded-xl transition ease-in-out duration-300 hover:scale-110 hover:border border-[1px] hover:border-violet-700">
                                        {/* header */ }
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

export default JobVacancy