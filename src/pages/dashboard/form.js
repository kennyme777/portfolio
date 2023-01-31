import React, { useContext, useState } from 'react'
import { GlobalContext } from './../../context/GlobalContext';

const Form = () => {

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
    handleSearch
  } = handleFunction
 

  return (
    <div className='container mx-auto lg:w-1/2 md:w-2/3'>
      <div className='font-bold text-2xl uppercase'>Form <span className='text-blue-500'>Data</span></div>

      <form onSubmit={ handleSubmit }>
        {/* vacancy section */ }
        <div className='text-sm mt-12 mb-1 border-b-slate-300'>Vacancy Data</div>
        <hr className='mb-5 ' />

        <div className='mb-6'>
          <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Job Title :</label>
          <input type='text' id='title' name='title' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' onChange={ handleInput } value={ input.title } required />
        </div>

        <div className='mb-6'>
          <label htmlFor='job_description' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Job Description :</label>
          <textarea type='text' id='job_description' name='job_description' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' onChange={ handleInput } value={ input.job_description } required></textarea>
        </div>

        <div className='mb-6'>
          <label htmlFor='job_qualification' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Job Qualification :</label>
          <textarea type='text' id='job_qualification' name='job_qualification' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' onChange={ handleInput } value={ input.job_qualification } required></textarea>
        </div>

        <div className=' grid grid-cols-2 gap-10'>
          <div className='mb-6'>
            <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Job Type :</label>
            <select id="job_type" name='job_type' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={ handleInput } required>
              <option value="Work from home">Work from home</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className='mb-6'>
            <label htmlFor='job_tenure' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Job Tenure :</label>
            <input type='text' id='job_tenure' name='job_tenure' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' onChange={ handleInput } value={ input.job_tenure } placeholder='ex: contract, full-time...' required />
          </div>
        </div>

        <div className='mb-6'>
          <label htmlFor='rating' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Job Status :</label>
          <select id="job_status" name='job_status' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={ handleInput }>
            <option value="1">Open</option>
            <option value="0">Close</option>
          </select>
        </div>

        <label htmlFor='salary_min' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Min Salary :</label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sm">
            Rp
          </div>
          <input type="number" name='salary_min' id="salary_min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" onChange={ handleInput } value={ input.salary_min } required />
        </div>

        <label htmlFor='salary_max' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Max Salary :</label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-sm">
            Rp
          </div>
          <input type="number" name='salary_max' id="salary_max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" onChange={ handleInput } value={ input.salary_max } required />
        </div>


        {/* company section */ }
        <div className='text-sm mt-12 mb-1 border-b-slate-300'>Company Data</div>
        <hr className='mb-5 ' />

        <div className=' grid grid-cols-2 gap-10'>
          <div className='mb-6'>
            <label htmlFor='company_name' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Name :</label>
            <input type='text' id='company_name' name='company_name' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' onChange={ handleInput } value={ input.company_name } min='2007' required />
          </div>

          <div className='mb-6'>
            <label htmlFor='company_city' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>City :</label>
            <input type='text' id='company_city' name='company_city' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' onChange={ handleInput } value={ input.company_city } required />
          </div>
        </div>

        <div className='mb-6'>
          <label htmlFor='company_image_url' className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'>Image :</label>
          <input type='text' id='company_image_url' name='company_image_url' className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full px-2.5 py-2' onChange={ handleInput } value={ input.company_image_url } placeholder='Image URL' required />
        </div>



        <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5'>
          Submit
        </button>
      </form>

    </div>
  )
}

export default Form