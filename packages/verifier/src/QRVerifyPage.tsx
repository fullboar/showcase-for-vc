import { motion } from 'framer-motion'
import React from 'react'

import { page } from './FramerAnimations'
import { MainSection } from './components/MainSection'

export const QRVerifyPage: React.FC = () => {
  document.title = 'QR Verifier'
  return (
    <motion.div
      className="flex-1 flex-col h-screen justify-center"
      variants={page}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MainSection />
    </motion.div>
  )
}
