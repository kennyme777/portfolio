import axios from 'axios'
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


  // refresh data
  useEffect(() => {
    if (fetchStatus === true) {
      axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res) => {
          setDataJob(res.data.data)
        })
      setFetchStatus(false)
    }
  }, [fetchStatus, setFetchStatus])


  return (
    <div className='px-5'>
      <div className='font-bold text-2xl text-center text-gray-700 uppercase mb-10'>
        Job <span className='text-blue-500'> Vacancy</span>
      </div>

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
        <div className='flex justify-center items-center mb-8'>
          <div className='text-start lg:w-1/2 md:w-1/2 sm:w-2/3 xs:w-full'>
            <form onSubmit={ handleFilter } className='border p-6 shadow-lg rounded-lg'>
              <div className='flex flex-wrap justify-between'>
                <div className='w-full mb-6'>
                  <input onChange={ handleChangeFilter } value={ filter.job_type } name='job_type' type="text" id="small-input" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder='Job Type' />
                </div>
                <div className='w-full mb-6'>
                  <input onChange={ handleChangeFilter } value={ filter.job_tenure } name='job_tenure' type="text" id="small-input" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder='Job Tenure' />
                </div>
                <div className='w-full mb-6'>
                  <input onChange={ handleChangeFilter } value={ filter.company_city } name='company_city' type="text" id="small-input" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" placeholder='City' />
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

      {/* table */ }
      <div className='overflow-x-auto shadow-sm mt-7'>
        <table className="w-full">
          <thead className="bg-gray-50 uppercase text-gray-700">
            <tr>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                #
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                Job Title
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                Job Type
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                Job Description
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                Qualification
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                Company
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                City
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                Salary
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
                Status
              </th>
              <th scope="col" className="text-xs font-bold px-6 py-3 text-left">
              </th>
            </tr>
          </thead>
          <tbody>
            {
              dataJob !== null &&
              dataJob.map((res, index) => {
                return (
                  <tr key={ res.id } className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ index + 1 }</td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap capitalize">
                      { handleText(res.title, 15) }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                      { res.job_type }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                      { handleText(res.job_description, 15) }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                      { handleText(res.job_qualification, 15) }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                      { handleText(res.company_name, 15) }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                      { handleText(res.company_city, 12) }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                      { formatRupiah(res.salary_min + '', 1) } - { formatRupiah(res.salary_max + '') }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                      { handleJobStatus(res.job_status) }
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap space-x-2">
                      <button onClick={ handleEdit } className='bg-yellow-300 hover:bg-yellow-400 text-white rounded-md px-2 py-1' value={ res.id }>Edit</button>
                      <button onClick={ handleDelete } className='bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1' value={ res.id }>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobVacancy