import React from 'react'
import Sidebar from '../components/sidebar'
import Header from './../components/header';

const LayoutDashboard = (props) => {
    return (
        <>

            <main className="">
                <div className="flex">
                    <div className='h-screen'>
                        <Sidebar />
                    </div>
                    <div className="w-full h-screen px-10 pb-24 overflow-y-scroll">
                        <Header />

                        {/* Content */ }
                        { props.children }
                    </div>

                </div>
            </main>
        </>
    )
}

export default LayoutDashboard