import React from 'react'
import {ThemeToggle} from '../components/ThemeToggle.jsx'
import {StarBackground} from '../components/StarBackground.jsx'
import {Navbar} from '@/components/Navbar'
import { HeroSection } from '../components/HeroSection.jsx'
import { About } from '../components/About.jsx'
import { SkillsSection } from '../components/SkillsSection.jsx'
import { ProjectsSection } from '../components/ProjectsSection.jsx'
import { ContactSection } from '../components/ContactSection.jsx'
import { Footer } from '../components/Footer.jsx'


 export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foregroung overflow-x-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle></ThemeToggle>
        {/* Background Effects */}
        <StarBackground></StarBackground>
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Main Content */}
        <main>
          <HeroSection></HeroSection>
          <About></About>
          <SkillsSection></SkillsSection>
          <ProjectsSection></ProjectsSection>
          <ContactSection></ContactSection>
        </main>
        {/* Footer */}
        <Footer></Footer>

        
    </div>
  )
}

