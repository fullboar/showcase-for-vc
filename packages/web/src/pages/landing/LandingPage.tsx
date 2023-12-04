import { motion } from 'framer-motion'
import React from 'react'

import { page } from '../../FramerAnimations'
import { localization } from '../../assets/localization'
import { Footer } from '../../components/Footer'
import { NavBar } from '../../components/Navbar'
import { useTitle } from '../../hooks/useTitle'

import { MainSection } from './components/MainSection'

export const LandingPage: React.FC = () => {
  useTitle(localization.pages.landingPage.title)
  return (
    <motion.div
      className="container p-4 flex flex-col h-screen"
      variants={page}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <NavBar />
      <MainSection />
      <Footer />
    </motion.div>
  )
}
