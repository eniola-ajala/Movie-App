import React from 'react'

import Navbar from '../header/index'
import HeroSection from '../herosection/index'
import Card from '../card/index'
// import MovieSection from '../movie/index'
import { NavLink } from 'react-router-dom'

const Index = () => {
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <Card/>
            
            <NavLink to="/signin"> </NavLink>
        </div>
    )
}
export default Index;