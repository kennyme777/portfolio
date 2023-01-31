import React, { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Cookies from "js-cookie"

export const GlobalContext = createContext()


export const GlobalProvider = (props) => {

    // initial state
    let navigate = useNavigate()

    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)
    const [dataJob, setDataJob] = useState(null)
    const [input, setInput] = useState(
        { title: "", job_description: "", job_qualification: "", job_type: "", job_tenure: "", job_status: 1, company_name: "", company_city: "", company_image_url: "", salary_min: 0, salary_max: 0 }
    )
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState({
        job_type: "",
        job_tenure: "",
        company_city: ""
    })
    const [jobHidden, setJobHidden] = useState(false)



    // General function
    const formatRupiah = (angka, prefix) => {
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }


    const handleText = (text, max) => {
        if (text !== null && text !== undefined) {
            if (text.length > max) {
                return (text.slice(0, max)) + "..."
            } else {
                return text
            }
        } else {
            return text
        }
    }


    const handleJobStatus = ($param) => {
        if ($param === 1) {
            return (
            <div className="w-fit px-3 pt-[0.15rem] pb-[0.28rem] font-semibold text-xs text-teal-700 bg-teal-50 rounded-full">
                open
            </div>
            )
        }
        else {
            return (
                <div className="w-fit px-3 pt-[0.15rem] pb-[0.28rem] font-semibold text-xs text-rose-700 bg-rose-50 rounded-full">
                    close
                </div>
                )
        }
    }



    // CRUD Function
    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInput({ ...input, [name]: value })
    }


    const handleEdit = (e) => {
        let id = e.target.value
        setCurrentId(id)

        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            .then((res) => {
                let data = res.data

                setInput(
                    {
                        title: data.title,
                        job_description: data.job_description,
                        job_qualification: data.job_qualification,
                        job_type: data.job_type,
                        job_tenure: data.job_tenure,
                        job_status: data.job_status,
                        company_name: data.company_name,
                        company_city: data.company_city,
                        company_image_url: data.company_image_url,
                        salary_min: data.salary_min,
                        salary_max: data.salary_max
                    }
                )
                navigate(`/dashboard/list-job-vacancy/edit/${id}`)
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, company_image_url, salary_min, salary_max } = input

        if (currentId === -1) {
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy',
                { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, company_image_url, salary_min, salary_max },
                { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then((res) => {
                    setFetchStatus(true)
                })
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
                { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, company_image_url, salary_min, salary_max },
                { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then((res) => {
                    setFetchStatus(true)
                    setCurrentId(-1)
                })
        }
        navigate('/dashboard/list-job-vacancy')

        setInput(
            { title: "", job_description: "", job_qualification: "", job_type: "", job_tenure: "", job_status: 1, company_name: "", company_city: "", company_image_url: "", salary_min: 0, salary_max: 0 }
        )
    }


    const handleDelete = (e) => {
        let idData = parseInt(e.target.value)

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then((res) => {
                setFetchStatus(true)
            })

    }


    // Search
    const handleChangeSearch = (event) => setSearch(event.target.value)

    const handleSearch = (e) => {
        e.preventDefault()
        let fetchData = async () => {
            let { data } = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let listData = data.data

            let searchData = listData.filter((res) => {
                return Object.values(res).join(' ').toLowerCase().includes(search.toLowerCase())
            })
            console.log(searchData)
            setDataJob([...searchData])
        }
        fetchData()
    }


    // Filter
    const handleChangeFilter = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value })
    }

    const handleFilter = (e) => {
        e.preventDefault()
        let fetchData = async () => {
            let { data } = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let listData = data.data

            if (filter.job_type === '' && filter.job_tenure === '' && filter.company_city === '') {
                setDataJob([...listData])
            } else {
                let filterData = listData.filter((res) => {
                    return res.job_type.toLowerCase().indexOf(filter.job_type.toLowerCase()) >= 0 && res.job_tenure.toLowerCase().indexOf(filter.job_tenure.toLowerCase()) >= 0 && res.company_city.toLowerCase().indexOf(filter.company_city.toLowerCase()) >= 0
                })
                setDataJob([...filterData])
            }
        }

        fetchData()
    }

    // Reset Search & Filter
    const handleReset = () =>{
        setFetchStatus(true)

        setSearch("")

        setFilter({
            job_type: "",
            job_tenure: "",
            company_city: ""
        })
    }


    // Filter Visibility
    const handleVisibility = () => {
        if (jobHidden) {
            setJobHidden(false)
        } else {
            setJobHidden(true)
        }
    }



    let state = {
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        dataJob, setDataJob,
        input, setInput,
        filter, setFilter,
        search, setSearch,
        jobHidden,setJobHidden
    }

    let handleFunction = {
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
    }

    return (
        <GlobalContext.Provider value={
            {
                state,
                handleFunction
            }
        }>
            { props.children }
        </GlobalContext.Provider>
    )
}