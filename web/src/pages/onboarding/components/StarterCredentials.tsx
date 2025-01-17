import type { Credential } from '../../../slices/types'

import { motion } from 'framer-motion'
import { startCase } from 'lodash'
import React from 'react'

import { fadeX } from '../../../FramerAnimations'
import { localization } from '../../../assets/localization'
import { StateIndicator } from '../../../components/StateIndicator'
import { useCredentials } from '../../../slices/credentials/credentialsSelectors'
import { prependApiUrl } from '../../../utils/Url'

export interface Props {
  credentials: Credential[]
}

export const StarterCredentials: React.FC<Props> = ({ credentials }) => {
  const { issuedCredentials } = useCredentials()
  const issuedCredentialsStartCase = issuedCredentials.map((name) => startCase(name))
  return (
    <motion.div
      variants={fadeX}
      animate="show"
      exit="exit"
      className="flex flex-col bg-background dark:bg-dark-background m-4 px-4 py-2 w-auto md:w-96 h-auto rounded-lg shadow"
    >
      <div className="flex-1-1 title mb-2">
        <h1 className="font-semibold"> {localization.pages.onboarding.components.starterCredentials.title}</h1>
        <hr className="text-separator dark:text-dark-separator" />
      </div>
      {credentials.map((item) => {
        const completed = issuedCredentials.includes(item.name) || issuedCredentialsStartCase.includes(item.name)

        return (
          <div key={item.name} className="flex-1 flex flex-row items-center justify-between my-2">
            <div className="bg-icon dark:bg-dark-icon rounded-lg p-2 w-12">
              <img className="h-8 m-auto" src={prependApiUrl(item.icon)} alt="icon" />
            </div>
            <div className="flex-1 px-4 justify-self-start text-sm sm:text-base">
              <p>{startCase(item.name)}</p>
            </div>
            <StateIndicator completed={completed} />
          </div>
        )
      })}
    </motion.div>
  )
}
