import { motion } from 'framer-motion'
import React from 'react'

import { fadeX } from '../../../FramerAnimations'
import { localization } from '../../../assets/localization'

export interface Props {
  title: string
  text: string
  characterName: string
}

export const SetupCompleted: React.FC<Props> = ({ title, text }) => {
  const lastIndex = title.lastIndexOf(' ')
  const lastWord = <p className="inline text-accent dark:text-dark-accent">{title.substring(lastIndex + 1)}</p>
  const newTitle = title.substring(0, lastIndex)

  return (
    <motion.div className="h-full" variants={fadeX} initial="hidden" animate="show" exit="exit">
      <div className="flex flex-col leading-loose">
        <div className="flex-1 my-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {newTitle}&nbsp;
            {lastWord}
          </h2>
        </div>
        <div className="pt-4 flex-1 mb-6">
          <div>
            <p>{text}</p>
            <div className="bg-background dark:bg-dark-background py-4 px-8">
              <ul className="list-disc">
                <li>{localization.pages.onboarding.steps.setupCompleted.listDisc[0]}</li>
                <li>{localization.pages.onboarding.steps.setupCompleted.listDisc[1]}</li>
                <li>{localization.pages.onboarding.steps.setupCompleted.listDisc[2]}</li>
                <li>{localization.pages.onboarding.steps.setupCompleted.listDisc[3]}</li>
                <li>{localization.pages.onboarding.steps.setupCompleted.listDisc[4]}</li>
              </ul>
            </div>
            <p>{localization.pages.onboarding.steps.setupCompleted.wereDoneWithStep}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
