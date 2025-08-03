import React from 'react'

const Header = () => {
    return (
        <header
            className='h-96 bg-cover bg-center flex justify-center items-center m-5 md:m-20 rounded-lg '
            style={{
                backgroundImage: "url('banner.jpg')"
            }}>
            <div className='text-xs md:text-2xl font-semibold bg-black/40 rounded-lg blackdrop-blur-sm p-4 text-white flex flex-col items-center'>
                <h1 >Where design meets desire.
                </h1>
                <p className='text-xs md:text-lg items-center font-light'>Explore the future today.</p>
            </div>
        </header>
    )
}

export default Header