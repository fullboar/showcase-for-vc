import { motion } from 'framer-motion'

import { constants } from '../utils/constants'

import { NotVerified } from './NotVerified'
import { Verified } from './Verified'

export interface Props {
  verifiedShow: boolean
  verified: boolean
  idPicture?: string
}

export const RenderLandscape: React.FC<Props> = ({ verifiedShow, verified, idPicture }) => {
  return (
    <motion.div className="relative flex justify-center justify-items-center items-end h-full flex-grow bg-[#F1F6FA]">
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
        className="absolute inset-y-1/2 !translate-y-[-200px]"
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
        className="absolute flex flex-col h-100 items-center inset-y-1/2 !translate-y-[90px]"
      >
        {verified ? <Verified /> : <NotVerified />}
      </motion.div>
    </motion.div>
  )
}
