import type { MouseEventHandler } from 'react'

import { motion } from 'framer-motion'
import React from 'react'

import { buttonHover } from '../FramerAnimations'

import { Loader } from './Loader'

export interface Props {
  text: string
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  loading?: boolean
}

export const SmallButton: React.FC<Props> = ({ text, onClick, disabled, loading }) => {
  return (
    <motion.button
      whileHover={buttonHover}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      disabled={disabled ?? false}
      className={`text-sm bg-primaryBtn dark:bg-dark-primaryBtn text-primaryBtnText dark:text-dark-primaryBtnText font-semibold py-1.5 px-6 rounded transition duration-300 ease-in-out transform shadow-sm ${
        disabled ? 'bg-opacity-20 dark:bg-opacity-60 cursor-not-allowed' : 'opacity-100 hover:opacity-80'
      }`}
      data-cy="small-button"
    >
      {loading ? <Loader /> : text}
    </motion.button>
  )
}
