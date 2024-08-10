import Link from 'next/link'
import React from 'react'

    const Navbar = () => {
    return (
        <header className="text-gray-400  body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"#"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="/shopping.svg" className='w-9' alt="" />
        <span className="ml-3 text-xl">JoeMart</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 hover:text-white ">Home</Link>
        <Link href={"/about"} className="mr-5 hover:text-white ">About</Link>
        <Link href={"/products"} className="mr-5 hover:text-white ">Products</Link>
        <Link href={"/contact"} className="mr-5 hover:text-white ">Contact Us</Link>
        </nav>
        <button className="inline-flex text-white items-center bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded mt-4 md:mt-0">Login
        
        </button>
    </div>
    </header>
    )
    }

    export default Navbar