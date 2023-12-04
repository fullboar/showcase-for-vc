import { motion } from 'framer-motion'

import { constants } from '../utils/constants'

import { NotVerified } from './NotVerified'
import { Verified } from './Verified'

export interface Props {
  verifiedShow: boolean
  verified: boolean
  idPicture?: string
}

export const RenderPortrait: React.FC<Props> = ({ verifiedShow, verified, idPicture }) => {
  return (
    <motion.div className="flex justify-center h-1/2 flex-grow bg-[#F1F6FA]">
      <motion.div
        animate={{
          opacity: verifiedShow ? 0 : 1,
          display: 'flex',
          transition: { ease: 'easeOut', duration: constants.animationFadeDuration },
          transitionEnd: { display: verifiedShow ? 'none' : 'flex' },
        }}
        className={`relative text-slate-300 justify-center justify-items-center items-center h-full flex-grow bg-[#F1F6FA]`}
      >
        {constants.verifyResultsText}
      </motion.div>
      <motion.img
        animate={{
          opacity: verifiedShow ? 1 : 0,
          display: 'flex',
          transition: { ease: 'easeIn', duration: constants.animationFadeDuration },
          transitionEnd: { display: verifiedShow ? 'flex' : 'none' },
        }}
        className="absolute translate-x-[-125px] inset-y-2/3"
        src={idPicture}
        width={150}
        alt="id-person"
      />
      <motion.div
        animate={{
          opacity: verifiedShow ? 1 : 0,
          display: 'flex',
          transition: { ease: 'easeIn', duration: constants.animationFadeDuration },
          transitionEnd: { display: verifiedShow ? 'flex' : 'none' },
        }}
        className="absolute flex !translate-x-[125px] flex-col h-100 items-center inset-y-2/3"
      >
        {verified ? <Verified /> : <NotVerified />}
      </motion.div>
    </motion.div>
  )
}
