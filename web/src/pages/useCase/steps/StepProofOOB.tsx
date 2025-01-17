import type { CredentialRequest, UseCaseScreen } from '../../../slices/types'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { isMobile, isBrowser } from 'react-device-detect'
import { FiExternalLink } from 'react-icons/fi'

import { fade, fadeExit, fadeX } from '../../../FramerAnimations'
import { localization } from '../../../assets/localization'
import { useAppDispatch } from '../../../hooks/hooks'
import { useEffectOnce } from '../../../hooks/useEffectOnce'
import { useInterval } from '../../../hooks/useInterval'
import { createProofOOB, fetchProofById } from '../../../slices/proof/proofThunks'
import { ProofAttributesCard } from '../components/ProofAttributesCard'
import { StepInfo } from '../components/StepInfo'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const QR = require('qrcode.react')

export interface Props {
  proof?: any
  proofUrl?: string
  step: UseCaseScreen
  requestedCredentials: CredentialRequest[]
  entityName: string
}

export const StepProofOOB: React.FC<Props> = ({ proof, proofUrl, step, requestedCredentials, entityName }) => {
  const dispatch = useAppDispatch()
  const proofReceived = (proof?.state as string) === 'presentation_received' || (proof?.state as string) === 'verified'

  const createProofRequest = () => {
    const proofs: any = []
    const predicates: any = []

    requestedCredentials?.forEach((item) => {
      if (item.properties) {
        proofs[item.name] = {
          restrictions: [
            {
              schema_name: item.name,
            },
          ],
          names: item.properties,
        }
      }
      if (item.predicates) {
        predicates[item.name] = {
          restrictions: [
            {
              schema_name: item.name,
            },
          ],
          name: item.predicates?.name,
          p_value: item.predicates?.value,
          p_type: item.predicates?.type,
        }
      }
    })

    dispatch(
      createProofOOB({
        connectionId: '',
        attributes: proofs,
        predicates: predicates,
        requestOptions: { name: step.requestOptions?.title, comment: step.requestOptions?.text },
      }),
    )
  }

  useEffectOnce(() => {
    if (!proof) createProofRequest()
  })

  useInterval(
    () => {
      if (!proofReceived && proof && document.visibilityState === 'visible') {
        dispatch(fetchProofById(proof.id))
      }
    },
    !proofReceived ? 1000 : null,
  )

  const deepLink = `bcwallet://aries_connection_invitation?${proofUrl?.split('?')[1]}`

  const renderCTA = !proofReceived ? (
    <motion.div variants={fade} key="openWallet">
      <p>
        {localization.pages.useCase.steps.stepProofOOB.scanOOBQR}
        <a href={deepLink}>
          {isMobile
            ? localization.pages.useCase.steps.stepProofOOB.isMobile
            : localization.pages.useCase.steps.stepProofOOB.isNotMobile}
        </a>
      </p>
      {isMobile && (
        <a href={deepLink} className="underline underline-offset-2 mt-2">
          {localization.pages.useCase.steps.stepProofOOB.openInWallet}
          <FiExternalLink className="inline pb-1" />
        </a>
      )}
    </motion.div>
  ) : (
    <motion.div variants={fade} key="ctaCompleted">
      <p>{localization.pages.useCase.steps.stepProofOOB.success}</p>
    </motion.div>
  )

  return (
    <motion.div variants={fadeX} initial="hidden" animate="show" exit="exit" className="flex flex-col h-full">
      <StepInfo title={step.title} description={step.text} />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {!proofReceived ? (
          <motion.div
            variants={fadeExit}
            key="renderProofQR"
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-row m-auto p-4 bg-background rounded-lg"
          >
            {proofUrl && proof && (
              <QR value={`${JSON.stringify(proofUrl)}`} size={isMobile ? 192 : isBrowser ? 212 : 256} />
            )}

            {/* <div id="qr-target" /> */}
          </motion.div>
        ) : (
          <motion.div variants={fadeExit} key="renderProofAttributes" className="flex flex-row m-auto w-full">
            <div className="w-full lg:w-2/3 m-auto">
              <ProofAttributesCard
                entityName={entityName}
                requestedCredentials={requestedCredentials}
                proof={proof}
                proofReceived={proofReceived}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col mt-4 text-center font-semibold">{renderCTA}</div>
    </motion.div>
  )
}
