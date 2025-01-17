import { motion } from 'framer-motion'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

import { listHover, rowFadeX } from '../../../FramerAnimations'
import { localization } from '../../../assets/localization'
import { prependApiUrl } from '../../../utils/Url'

export interface Props {
  icon: string
  name: string
  organization: string
  recommended: boolean
}

export const WalletItem: React.FC<Props> = ({ icon, name, organization, recommended }) => {
  return (
    <motion.button
      whileHover={listHover}
      className="flex rounded-lg lg:m-2 p-2 items-center cursor-pointer border border-1 sm:w-full lg:w-4/5 border-background dark:border-dark-background dark:bg-dark-background m-auto mt-4 shadow "
      variants={rowFadeX}
    >
      <div className="flex h-12 w-12 my-2 mx-2 md:mx-8 p-1">
        <img className="rounded-lg" src={prependApiUrl(icon)} alt="wallet icon" />
      </div>
      <div className="flex flex-1 flex-col text-lg">
        <div className="flex flex-1 font-medium	 text-lg">
          {name} {recommended && <AiFillStar style={{ color: '#FFC107' }} className="m-1" />}
        </div>
        <p className="text-sm pr-2">{localization.pages.onboarding.components.walletItem.by + organization}</p>
      </div>
      <div className="flex flex-1-1 justify-end mr-8 md:mr-16 font-semibold rounded-lg" data-cy="use-wallet">
        {localization.pages.onboarding.components.walletItem.use}
      </div>
    </motion.button>
  )
}
