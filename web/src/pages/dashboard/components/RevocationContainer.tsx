import type { RevocationInfoItem, RevocationRecord } from '../../../slices/types'

import { motion } from 'framer-motion'
import { startCase } from 'lodash'
import React, { useState } from 'react'

import { dashboardTitle, rowContainer } from '../../../FramerAnimations'
import { revokeCredential } from '../../../api/RevocationApi'
import { localizationBC } from '../../../assets/localizationBC'

import { RevocationItem } from './RevocationItem'

export interface Props {
  revocationRecord: RevocationRecord[]
  revocationInfo: RevocationInfoItem[]
}

export const RevocationContainer: React.FC<Props> = ({ revocationRecord, revocationInfo }) => {
  const [completedRevocations, setCompletedRevocations] = useState<string[]>([])
  const [loadingRevocations, setLoadingRevocations] = useState<string[]>([])
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false)
  const renderUseCases = revocationRecord.map((item) => {
    const revocationKey = item.revocationRegId.split(':')[6]
    const revocationDescription = revocationInfo.find(
      (infoItem) => startCase(infoItem.credentialName) === startCase(revocationKey)
    )
    return (
      <RevocationItem
        title={revocationDescription?.title}
        description={revocationDescription?.description}
        credentialName={revocationDescription?.credentialName}
        credentialIcon={revocationDescription?.credentialIcon}
        key={item.revocationRegId}
        revocationRecord={item}
        callback={() => {
          const revocations = completedRevocations.filter((rev) => rev !== item.revocationRegId)
          setCompletedRevocations(revocations)

          const loadingList = loadingRevocations
          loadingList.push(item.revocationRegId)
          setLoadingRevocations(loadingList)

          revokeCredential(item).then((result) => {
            if (result.status === 200) {
              revocations.push(item.revocationRegId)
              setCompletedRevocations(revocations)
            }
            setLoadingRevocations(loadingRevocations.filter((rev) => rev !== item.revocationRegId))
          })
        }}
        isCompleted={completedRevocations.includes(item.revocationRegId)}
        isLoading={loadingRevocations.includes(item.revocationRegId)}
      />
    )
  })

  return (
    <div className="flex flex-col mx-4 lg:mx-4 my-2 p-4 md:p-6 lg:p-8 bg-inset dark:bg-dark-inset text-insetText dark:text-dark-insetText rounded-lg shadow-sm">
      <motion.h1 variants={dashboardTitle} className="text-3xl md:text-4xl font-bold mb-2">
        {localizationBC.pages.dashboard.components.revocationContainer.revokingYourCred}
      </motion.h1>
      <p className="font-bold">{localizationBC.pages.dashboard.components.revocationContainer.ensuringTheSafety}</p>
      {menuExpanded && (
        <motion.div variants={rowContainer} className="flex flex-col w-auto overflow-x-hidden md:overflow-x-visible">
          {renderUseCases}
        </motion.div>
      )}
      <motion.div
        className="mx-0 lg:mx-0 my-2 p-4 md:p-4 lg:p-8"
        style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold' }}
      >
        <motion.button
          className="font-bold"
          onClick={() => {
            setMenuExpanded(!menuExpanded)
          }}
        >
          {menuExpanded
            ? localizationBC.pages.dashboard.components.revocationContainer.readLess
            : localizationBC.pages.dashboard.components.revocationContainer.readMore}
        </motion.button>
      </motion.div>
    </div>
  )
}
