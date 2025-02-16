import React from 'react'
import Header from '../components/Header'
import SpecialitySection from '../components/SpecialitySection'
import TopPrograms from '../components/TopPrograms'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
       <Header/>
       <SpecialitySection/>
       <TopPrograms/>
       <Banner/>
    </div>
  )
}

export default Home