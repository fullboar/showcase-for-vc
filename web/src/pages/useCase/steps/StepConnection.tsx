import type { ConnectionState } from '../../../slices/connection/connectionSlice'
import type { UseCaseScreen } from '../../../slices/types'

import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { FiExternalLink } from 'react-icons/fi'

import { fade, fadeX } from '../../../FramerAnimations'
import { localization } from '../../../assets/localization'
import { QRCode } from '../../../components/QRCode'
import { useAppDispatch } from '../../../hooks/hooks'
import { useInterval } from '../../../hooks/useInterval'
import { setDeepLink } from '../../../slices/connection/connectionSlice'
import { createInvitation, fetchConnectionById } from '../../../slices/connection/connectionThunks'
import { nextStep } from '../../../slices/useCases/useCasesSlice'
import { isConnected } from '../../../utils/Helpers'
import { prependApiUrl } from '../../../utils/Url'
import { StepInfo } from '../components/StepInfo'

export interface Props {
  step: UseCaseScreen
  connection: ConnectionState
  newConnection?: boolean
}

export const StepConnection: React.FC<Props> = ({ step, connection, newConnection }) => {
  const dispatch = useAppDispatch()
  const { id, state, invitationUrl } = connection
  const isCompleted = isConnected(state as string)
  const deepLink = `bcwallet://aries_connection_invitation?${invitationUrl?.split('?')[1]}`

  useEffect(() => {
    if (!isCompleted || newConnection) dispatch(createInvitation(step.verifier?.name ?? 'Unknown'))
  }, [])

  useInterval(
    () => {
      if (id && document.visibilityState === 'visible') dispatch(fetchConnectionById(id))
    },
    !isCompleted ? 1000 : null
  )

  const handleDeepLink = () => {
    if (connection.id) {
      dispatch(setDeepLink())
      dispatch(nextStep())
      setTimeout(() => {
        window.location.href = deepLink
      }, 500)
    }
  }

  const renderQRCode = (overlay?: boolean) => {
    return invitationUrl ? <QRCode invitationUrl={invitationUrl} connectionState={state} overlay={overlay} /> : null
  }

  const renderCTA = !isCompleted ? (
    <motion.div variants={fade} key="openWallet">
      <p>
        {localization.pages.useCase.steps.stepConnection.scanQRCode +
          isMobile +
          localization.pages.useCase.steps.stepConnection.or}
        {isMobile && (
          <a onClick={handleDeepLink} className="underline underline-offset-2 mt-2">
            {localization.pages.useCase.steps.stepConnection.openInYourWallet}
            <FiExternalLink className="inline pb-1" />
          </a>
        )}{' '}
        {localization.pages.useCase.steps.stepConnection.toProveThings}
      </p>
    </motion.div>
  ) : (
    <motion.div variants={fade} key="ctaCompleted">
      <p>{localization.pages.useCase.steps.stepConnection.success}</p>
    </motion.div>
  )

  return (
    <motion.div variants={fadeX} initial="hidden" animate="show" exit="exit" className="flex flex-col h-full">
      <StepInfo title={step.title} description={step.text} />
      {step.image && !isMobile ? (
        <div
          className="bg-contain bg-center bg-no-repeat h-full flex justify-end"
          title={step.title}
          style={{ backgroundImage: `url(${prependApiUrl(step.image)})` }}
        >
          <div className="max-w-xs flex flex-col self-center items-center bg-white dark:text-black rounded-lg p-4 mr-8 shadow-lg">
            {/* {step?.overlay?.header && <p className="w-3/4 text-center font-semibold mb-2">{step.overlay.header}</p>} */}
            {renderQRCode(true)}
            {/* {step?.overlay?.footer && <p className="w-3/4 text-center mt-2">{step.overlay.footer}</p>} */}
          </div>
        </div>
      ) : (
        <>
          {renderQRCode()}
          <div className="flex flex-col my-4 text-center font-semibold">{renderCTA}</div>
        </>
      )}
    </motion.div>
  )
}
