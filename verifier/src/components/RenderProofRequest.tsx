import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'

import { constants } from '../utils/constants'

export interface Props {
  invitationUrl: string
  landscape?: boolean
}

const TITLE = constants.proofRequestTitle
const DESCRIPTION = constants.proofRequestDesc

export const RenderProofRequest: React.FC<Props> = ({ invitationUrl, landscape }) => {
  return (
    <motion.div
      className={`flex flex-col text-center ${
        landscape ? ' h-full justify-center  m-auto mb-40' : 'mb-5'
      } items-center font-semibold`}
    >
      <div className="overflow-hidden py-1 leading-tight text-2xl lg:text-3xl xl:text-4xl">
        <motion.h1>{TITLE}</motion.h1>
      </div>
      <div className="overflow-hidden text-center">
        <motion.h2 className="text-base lg:text-lg xl:text-xl font-normal mt-6">{DESCRIPTION}</motion.h2>
      </div>
      <motion.div className={`${invitationUrl ? 'opacity-1' : 'opacity-0'} border-dashed border-2 p-4 mt-10`}>
        {<QRCodeSVG value={invitationUrl} size={180} />}
      </motion.div>
    </motion.div>
  )
}
