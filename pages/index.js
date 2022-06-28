import React from 'react'

import { Header } from '../components/header/Header'
import { SectionFive } from '../components/sectionFive/SectionFive'
import { SectionFour } from '../components/sectionFour/SectionFour'
import { SectionOne } from '../components/sectionOne/SectionOne'
import { SectionThree } from '../components/sectionThree/SectionThree'
import { SectionTwo } from '../components/sectionTwo/SectionTwo'
import { Footer } from '../components/footer/Footer'

export default function Home () {
  return (
    <>
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Footer />

    </>
  )
}
