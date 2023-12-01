import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { fade } from '../FramerAnimations'
import logo from '../assets/logo.png'
import { useAppDispatch } from '../hooks/hooks'
import { useInterval } from '../hooks/useInterval'
import { useConnection } from '../slices/connection/connectionSelectors'
import { clearConnection } from '../slices/connection/connectionSlice'
import { createInvitation, fetchConnectionById } from '../slices/connection/connectionThunks'
import { clearCredentials } from '../slices/credentials/credentialsSlice'
import { useProof } from '../slices/proof/proofSelectors'
import { clearProof } from '../slices/proof/proofSlice'
import { createProof, fetchProofById, deleteProofById } from '../slices/proof/proofThunks'
import { isConnected, getDateInt } from '../utils/Helpers'
import { constants } from '../utils/constants'

import { RenderLandscape } from './RenderLandscape'
import { RenderPortrait } from './RenderPortrait'
import { RenderProofRequest } from './RenderProofRequest'

export const MainSection: React.FC = () => {
  const { id, state, invitationUrl } = useConnection()
  const { proof } = useProof()
  const [verified, setVerified] = useState(false)
  const [verifiedShow, setVerifiedShow] = useState(false)
  const proofReqPictureSrc = proof?.presentation?.requested_proof.revealed_attr_groups[0].values.picture.raw

  const isLandscape = window.innerWidth / window.innerHeight > 1
  const dispatch = useAppDispatch()
  const connectionComplete = isConnected(state as string)
  // Proof info we send to wallet
  const proofReceived = (proof?.state as string) === 'verified' || proof?.state === 'done'
  const proofData = {
    connectionId: id ? id : '',
    attributes: [
      {
        restrictions: [
          {
            schema_name: 'Person',
          },
        ],
        names: ['picture'],
        non_revoked: { to: Math.floor(new Date().getTime() / 1000) },
      },
    ],
    predicates: [
      {
        restrictions: [
          {
            schema_name: 'Person',
          },
        ],
        name: 'birthdate_dateint',
        p_type: '<=',
        p_value: getDateInt(-19),
        non_revoked: { to: Math.floor(new Date().getTime() / 1000) },
      },
    ],

    requestOptions: { name: 'Bell Island Beer & Wine', comment: 'TEMP Expiry date check' },
  }

  // Update state
  useEffect(() => {}, [id])

  // Check for new connection every 1s
  useInterval(
    () => {
      if (id) {
        dispatch(fetchConnectionById(id))
        proof ? dispatch(fetchProofById(proof?.id)) : null
      }
    },
    !connectionComplete ? 1000 : null,
  )

  // Logic to decide if the received proof is allowed or not
  useEffect(() => {
    if (proof?.verified === 'true') {
      setVerified(true)
    } else {
      setVerified(false)
    }
  }, [proofReceived])

  // Send the proof and reset the QR code when QR is scanned by someone
  useEffect(() => {
    if (connectionComplete === true) {
      dispatch(clearConnection())
      dispatch(createInvitation('QR Verifier Demo'))
      dispatch(createProof(proofData))
      dispatch(clearCredentials())
      dispatch(clearProof())
    }
  }, [connectionComplete])

  // Remove proof record after we're done with it, set verification message to show for 5 sec
  useEffect(() => {
    if (proofReceived) {
      dispatch(deleteProofById(proof?.id))
      setVerifiedShow(true)
      setTimeout(() => {
        setVerifiedShow(false)
      }, constants.animationDisplayTimer)
    }
  }, [proofReceived])

  return (
    <AnimatePresence exitBeforeEnter>
      {isLandscape ? (
        <motion.div variants={fade} className="flex h-full flex-row">
          <div className="flex items-start w-1/2 flex-col">
            <img className="mb-10" width={150} src={logo} alt="Govlogo" />
            <RenderProofRequest landscape={isLandscape} invitationUrl={invitationUrl as string} />
          </div>
          <RenderLandscape verifiedShow={verifiedShow} verified={verified} idPicture={proofReqPictureSrc} />
        </motion.div>
      ) : (
        <motion.div variants={fade} className="flex h-full flex-col">
          <div className="flex justify-left">
            <img className="" width={150} src={logo} alt="Govlogo" />
          </div>
          <RenderProofRequest landscape={isLandscape} invitationUrl={invitationUrl as string} />
          <RenderPortrait verifiedShow={verifiedShow} verified={verified} idPicture={proofReqPictureSrc} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
