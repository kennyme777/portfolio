import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import { GlobalContext } from './../../context/GlobalContext';

const JobVacancyDetail = () => {

    // initial state
    const { state, handleFunction } = useContext(GlobalContext)

    const {
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        dataJob, setDataJob,
        input, setInput
    } = state

    const {
        formatRupiah,
        handleText,
        handleJobStatus,
        handleInput,
        handleEdit,
        handleDelete,
        handleSubmit
    } = handleFunction

    const { Id } = useParams()

    const [jobDetail, setJobDetail] = useState(null)

    useEffect(() => {
        if (Id !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
                .then((res) => {
                    setJobDetail(res.data)
                })
        }
    }, [])

    return (
        <div className='flex flex-wrap justify-center items-center mt-4'>
            <div className='md:w-[38rem] sm:w-2/3 xs:w-full text-justify pr-20 rounded-lg py-6 pb-8 relative'>
                <Link to={ '/job-vacancy' } className='absolute -top-10 flex justify-start items-center w-fit py-1.5 gap-2 text-sm text-slate-600 rounded-lg hover:scale-110 transition ease-in-out duration-200 delay-[10ms] hover:rotate-[360deg] hover:text-teal-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={ 14 } height={ 14 } fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                    <div>
                        Back to List
                    </div>
                </Link>
                {/* job title */ }
                <div className="flex flex-col items-center justify-between mb-4">
                    <div className="flex items-center justify-start flex-grow w-full">

                        <div className="flex flex-col items-start font-bold">
                            <span className="text-slate-700 text-3xl">
                                { jobDetail?.title }
                            </span>
                            <span className="font-normal text-slate-700 capitalize mt-2">
                                { handleJobStatus(jobDetail?.job_status) }
                            </span>
                        </div>
                    </div>
                </div>

                {/* job description */ }
                <div className='text-sm text-slate-700'>
                    <div className='font-bold mt-5 mb-1'>Job Description </div>
                    <div className='text-slate-600'>
                        { handleText(jobDetail?.job_description, 1000) }
                    </div>

                    <div className='font-bold mt-4 mb-1'>Requirement </div>
                    <div className='text-slate-600'>
                        { jobDetail?.job_qualification }
                    </div>
                </div>
            </div>


            {/* job information */ }
            <div className='md:w-[16rem] sm:w-full text-xs text-slate-700 p-8 rounded-lg shadow-lg'>
                <div className='flex flex-col justify-center items-center mb-5'>
                    <div href="#" className="relative block">
                        <img alt="profil" src={ jobDetail?.company_image_url } className="object-cover rounded h-12 w-12" />
                    </div>
                    <div className='font-semibold text-lg'>
                        { jobDetail?.company_name }</div>
                </div>

                <div>
                    <div className='font-semibold mt-3.5 mb-0.5'>Job Type: </div>
                    <div className='text-slate-600 '>
                        { jobDetail?.job_type }
                    </div>
                </div>
                <div>
                    <div className='font-semibold mt-3.5 mb-0.5'>Job Tenure: </div>
                    <div className='text-slate-600 '>
                        { jobDetail?.job_tenure }
                    </div>
                </div>
                <div>
                    <div className='font-semibold mt-3.5 mb-0.5'>City: </div>
                    <div className='text-slate-600 '>
                        { jobDetail?.company_city }
                    </div>
                </div>
                <div>
                    <div className='font-semibold mt-3.5 mb-0.5'>Salary: </div>
                    <div className='text-slate-600 '>
                        { formatRupiah(jobDetail?.salary_min + '', 1) } - { formatRupiah(jobDetail?.salary_max + '') }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default JobVacancyDetail