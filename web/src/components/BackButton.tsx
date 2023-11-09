import type { MouseEventHandler } from 'react'

import { motion } from 'framer-motion'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { localizationBC } from '../assets/localizationBC'

export interface Props {
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const BackButton: React.FC<Props> = ({ onClick, disabled }) => {
  return (
    <motion.button
      whileHover={{ opacity: 0.8 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className={`cursor-pointer text-text dark:text-dark-text ${disabled ? 'invisible' : ''}`}
    >
      <p className="inline text-sm">
        <u></u>
        <FiArrowLeft className="inline h-4 w-6 mb-1" />
        {localizationBC.components.backButton.back}
      </p>
    </motion.button>
  )
}
