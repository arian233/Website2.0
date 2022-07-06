import React from 'react'
import Sidebar from '../components/Sidebar/index.js'
import NavBar from '../components/Navbar/index.js'
import { useState } from 'react'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <NavBar toggle={toggle} />
        </>
    )
}

export default Home