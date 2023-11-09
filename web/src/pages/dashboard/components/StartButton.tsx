import type { MouseEventHandler } from 'react'

import { motion } from 'framer-motion'
import React from 'react'
import { FiCheck, FiLock } from 'react-icons/fi'

import { buttonHover } from '../../../FramerAnimations'
import { localizationBC } from '../../../assets/localizationBC'
import { Loader } from '../../../components/Loader'

export interface Props {
  text: string
  disabled: boolean
  isCompleted: boolean
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const StartButton: React.FC<Props> = ({ text, loading, onClick, disabled, isCompleted }) => {
  return (
    <div className="has-tooltip">
      <motion.button
        whileHover={buttonHover}
        className={`text-sm bg-primaryBtn dark:bg-dark-primaryBtn text-primaryBtnText dark:text-dark-primaryBtnText w-24 h-8 py-1.5 px-4 rounded font-semibold shadow-sm ${
          disabled ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
        }`}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={onClick ?? undefined}
        disabled={disabled || loading}
        data-cy="select-use-case"
      >
        {disabled && (
          <span className="hidden sm:block tooltip rounded shadow-lg p-1 bg-popup dark:bg-dark-popup text-popupText dark:text-dark-popupText w-48 -mt-16">
            {localizationBC.pages.dashboard.components.startButton.haventUnlocked}
          </span>
        )}

        {disabled ? (
          <p>
            <FiLock />
          </p>
        ) : isCompleted ? (
          <FiCheck />
        ) : loading ? (
          <Loader />
        ) : (
          text
        )}
      </motion.button>
    </div>
  )
}
