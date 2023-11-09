import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { FiExternalLink } from 'react-icons/fi'

import { fade, fadeX } from '../../../FramerAnimations'
import { localizationBC } from '../../../assets/localizationBC'
import { Button } from '../../../components/Button'
import { QRCode } from '../../../components/QRCode'
import { useAppDispatch } from '../../../hooks/hooks'
import { useInterval } from '../../../hooks/useInterval'
import { clearConnection, setDeepLink } from '../../../slices/connection/connectionSlice'
import { createInvitation, fetchConnectionById } from '../../../slices/connection/connectionThunks'
import { clearCredentials } from '../../../slices/credentials/credentialsSlice'
import { setOnboardingConnectionId } from '../../../slices/onboarding/onboardingSlice'
import { setConnectionDate } from '../../../slices/preferences/preferencesSlice'
import { isConnected } from '../../../utils/Helpers'
import { prependApiUrl } from '../../../utils/Url'
import { StepInformation } from '../components/StepInformation'

export interface Props {
  connectionId?: string
  skipIssuance(): void
  nextSlide(): void
  invitationUrl?: string
  connectionState?: string
  newConnection?: boolean
  disableSkipConnection?: boolean
  issuerName: string
  title: string
  text: string
  backgroundImage?: string
  onConnectionComplete?: () => void
}

export const SetupConnection: React.FC<Props> = ({
  connectionId,
  skipIssuance,
  nextSlide,
  title,
  text,
  invitationUrl,
  connectionState,
  newConnection,
  issuerName,
  disableSkipConnection,
  backgroundImage,
  onConnectionComplete,
}) => {
  const deepLink = `bcwallet://aries_connection_invitation?${invitationUrl?.split('?')[1]}`

  const dispatch = useAppDispatch()

  const isCompleted = isConnected(connectionState as string)

  useEffect(() => {
    if (!isCompleted || newConnection) {
      dispatch(clearConnection())
      dispatch(createInvitation(issuerName))
      dispatch(clearCredentials())
    }
  }, [])

  useEffect(() => {
    if (isCompleted && onConnectionComplete) {
      onConnectionComplete()
    }
  }, [isCompleted])

  useEffect(() => {
    if (connectionId) {
      dispatch(setOnboardingConnectionId(connectionId))
      const date = new Date()
      dispatch(setConnectionDate(date))
    }
  }, [connectionId])

  useInterval(
    () => {
      if (connectionId && document.visibilityState === 'visible') {
        dispatch(fetchConnectionById(connectionId))
      }
    },
    !isCompleted ? 1000 : null
  )

  const renderQRCode = (overlay?: boolean) => {
    return invitationUrl ? (
      <QRCode invitationUrl={invitationUrl} connectionState={connectionState} overlay={overlay} />
    ) : null
  }

  const handleDeepLink = () => {
    if (connectionId) {
      dispatch(setDeepLink())
      nextSlide()
      setTimeout(() => {
        window.location.href = deepLink
      }, 500)
    }
  }
  const renderCTA = !isCompleted ? (
    <motion.div variants={fade} key="openWallet">
      <>
        <p>
          {localizationBC.pages.onboarding.steps.setupConnection.scanQRCode}
          <a href={deepLink}>
            {localizationBC.pages.onboarding.steps.setupConnection.wallet + isMobile &&
              localizationBC.pages.onboarding.steps.setupConnection.or}
          </a>
        </p>
        {isMobile && (
          <a onClick={handleDeepLink} className="underline underline-offset-2 mt-2">
            {localizationBC.pages.onboarding.steps.setupConnection.openInWallet}
            <FiExternalLink className="inline pb-1" />
          </a>
        )}
      </>
      {!disableSkipConnection && (
        <div className="my-5">
          <Button
            text={localizationBC.pages.onboarding.steps.setupConnection.alreadyHaveCredential}
            onClick={skipIssuance}
          ></Button>
        </div>
      )}
    </motion.div>
  ) : (
    <motion.div variants={fade} key="ctaCompleted">
      <p>{localizationBC.pages.onboarding.steps.setupConnection.successContinue}</p>
    </motion.div>
  )

  return !backgroundImage || isMobile ? (
    <motion.div className="flex flex-col h-full " variants={fadeX} initial="hidden" animate="show" exit="exit">
      <StepInformation title={title} text={text} />
      <div className="max-w-xs flex flex-col self-center items-center bg-white text-black rounded-lg p-4">
        {renderQRCode(true)}
      </div>
      <div className="flex flex-col mt-4 text-center text-sm md:text-base font-semibold">{renderCTA}</div>
    </motion.div>
  ) : (
    <motion.div className="flex flex-col h-full " variants={fadeX} initial="hidden" animate="show" exit="exit">
      <StepInformation title={title} text={text} />
      <div
        className="bg-contain position-relative bg-center bg-no-repeat h-full flex justify-center"
        style={{ backgroundImage: `url(${prependApiUrl(backgroundImage as string)})` }}
      >
        <div className="max-w-xs flex flex-col self-center items-center bg-white text-black rounded-lg p-4">
          <p className="text-center mb-2">
            {localizationBC.pages.onboarding.steps.setupConnection.scanQRCodeDigitalWallet}
          </p>
          <div>{renderQRCode(true)}</div>
          <div className="mt-5">
            <Button
              text={localizationBC.pages.onboarding.steps.setupConnection.alreadyHaveCredential}
              onClick={skipIssuance}
            ></Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
