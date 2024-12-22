import React from 'react'
import Home from './components/Home'
import Feature from './components/Feature'
import About from './components/About'
import Banner from './components/Banner'
import TeacherAbout from './components/TeacherAbout'
import Courses from './components/Courses'
import Team from './components/Team'
import Features from './components/Features'
import SpaceOrganizationSlider1 from './components/OrganizationSlider'
import Organization from './components/OrginazationContainer'
import Faq from './components/Faq'
import News from './components/News'

const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
     
        <Banner/>
        <Feature/>
        <About/>
        <Courses/>
        <Organization/>
        <TeacherAbout/>
        <Features/>
        <Team/>
        <Faq/>
        <News/>
       
    </div>
  )
}

export default LandingPage


