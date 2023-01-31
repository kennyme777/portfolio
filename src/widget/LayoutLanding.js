import React from 'react'
import Navigation from '../components/navigation'
import Footer from './../components/footer';

const LayoutLanding = (props) => {
    return (
        <>
            <Navigation />
            <div className='container mx-auto justify-center'>
                { props.children }
            </div>
            <Footer />
        </>
    )
}

export default LayoutLanding