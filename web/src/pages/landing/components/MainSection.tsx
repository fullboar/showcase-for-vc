import { motion } from 'framer-motion'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'

import { buttonHover, fade, fadeDelay, landingTitle } from '../../../FramerAnimations'
import landingScreen from '../../../assets/light/landing-screen.svg'
import { localizationBC } from '../../../assets/localizationBC'
import { basePath } from '../../../utils/BasePath'

export const MainSection: React.FC = () => {
  const { slug } = useParams()

  const navigate = useNavigate()

  const handleStart = () => {
    if (slug) {
      navigate(`${basePath}/demo/${slug}`)
    } else {
      navigate(`${basePath}/demo`)
    }
  }

  const renderMobileTitle = (
    <motion.div className="flex-1 text-left text-4xl font-semibold my-8 leading-snug ">
      <div className="overflow-hidden py-1">
        <motion.h1 variants={landingTitle}>{localizationBC.pages.landingPage.title}</motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h2 variants={fade} className="text-lg font-normal mt-6">
          {localizationBC.pages.landingPage.description}
        </motion.h2>
      </div>
      <div className="flex flex-col justify-center text-base sxl:text-lg font-normal mt-6 m-auto">
        <motion.button
          variants={fade}
          whileHover={buttonHover}
          className="bg-primaryBtn dark:bg-dark-primaryBtn text-primaryBtnText dark:text-dark-primaryBtnText  py-3 px-5 mx-8 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
          onClick={handleStart}
        >
          {localizationBC.pages.landingPage.buttons.tryDemo}
          <FiArrowRight className="inline h-6 pb-1" />
        </motion.button>
        <motion.button
          variants={fade}
          whileHover={buttonHover}
          className="bg-secondaryBtn dark:bg-dark-secondaryBtn text-secondaryBtnText dark:text-dark-secondaryBtnText py-3 px-5 mx-8 mt-4 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
          onClick={() => null}
        >
          {localizationBC.pages.landingPage.buttons.getToKnowUs} &nbsp;
          <FiExternalLink className="inline h-6 pb-1" />
        </motion.button>
      </div>
    </motion.div>
  )

  const renderDesktopTitle = (
    <motion.div className="flex-1 text-left font-semibold text-4xl lg:text-5xl xl:text-6xl m-auto">
      <div className="overflow-hidden py-1 leading-tight">
        <motion.h1 variants={landingTitle}>{localizationBC.pages.landingPage.title}</motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h2 variants={fadeDelay} className="text-base lg:text-lg font-normal mt-6">
          {localizationBC.pages.landingPage.description}
        </motion.h2>
      </div>
      <div className="flex flex-row justify-start text-base sxl:text-lg  font-normal mt-6">
        <motion.button
          variants={fadeDelay}
          whileHover={buttonHover}
          className="bg-primaryBtn dark:bg-dark-primaryBtn text-primaryBtnText dark:text-dark-primaryBtnText py-3 px-5 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
          onClick={handleStart}
        >
          {localizationBC.pages.landingPage.buttons.getStarted} &nbsp;
          <FiArrowRight className="inline h-6 pb-1" />
        </motion.button>
        <a href={localizationBC.pages.landingPage.digitalTrustURL} target="_blank">
          <motion.button
            variants={fadeDelay}
            whileHover={buttonHover}
            className="bg-secondaryBtn dark:bg-dark-secondaryBtn text-secondaryBtnText dark:text-dark-secondaryBtnText py-3 px-5 ml-4 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
          >
            <p className="inline">{localizationBC.pages.landingPage.buttons.getToKnowUs} &nbsp;</p>
            <FiExternalLink className="inline h-6 pb-1" />
          </motion.button>
        </a>
      </div>
    </motion.div>
  )

  return (
    <motion.div className="flex flex-col md:flex-row flex-grow" initial="hidden" animate="show" exit="exit">
      {isMobile ? renderMobileTitle : renderDesktopTitle}
      <div className="flex justify-center flex-grow">
        <img className="m-5 max-w-lg" src={landingScreen} alt="bcgov-phone-light" />
      </div>
    </motion.div>
  )
}
