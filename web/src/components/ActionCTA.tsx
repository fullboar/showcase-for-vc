/* eslint-disable */
import { motion } from 'framer-motion'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { FiExternalLink } from 'react-icons/fi'

import { fade, fadeDelay } from '../FramerAnimations'
import { localizationBC } from '../assets/localizationBC'

interface Props {
  isCompleted: boolean
  onFail(): void
}

export const ActionCTA: React.FC<Props> = ({ isCompleted, onFail }) => {
  const renderCTA = !isCompleted ? (
    <motion.div variants={fade} key="openWallet">
      <p>
        {localizationBC.components.actionCTA.acceptRequest}<a href="bcwallet://">{localizationBC.components.actionCTA.wallet + isMobile && localizationBC.components.actionCTA.or}</a>
      </p>
      {isMobile && (
        <a href="bcwallet://" className="underline underline-offset-2 mt-2">
          {localizationBC.components.actionCTA.openInWallet}
          <FiExternalLink className="inline pb-1" />
        </a>
      )}
    </motion.div>
  ) : (
    <motion.div variants={fade} key="ctaCompleted">
      <p>{localizationBC.components.actionCTA.success}</p>
    </motion.div>
  )

  return (
    <div className="flex flex-col my-4 text-center font-semibold">
      {renderCTA}
      <motion.p variants={fadeDelay} className={`text-sm mt-2  ${!isCompleted ? 'visible' : 'invisible'}`}>
        <u className="m-auto cursor-pointer" onClick={onFail}>
          {localizationBC.components.actionCTA.didntReceieveAnything}
        </u>
      </motion.p>
    </div>
  )
}
