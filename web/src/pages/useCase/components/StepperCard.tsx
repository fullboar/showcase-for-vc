import type { UseCaseScreen } from '../../../slices/types'

import { motion } from 'framer-motion'
import React from 'react'

export interface Props {
  steps: UseCaseScreen[]
  currentStep: string
}

export const StepperCard: React.FC<Props> = ({ steps, currentStep }) => {
  const progress = steps.filter((step) => !step.screenId.startsWith('START'))

  const stepViewItems = progress.map((item, idx) => {
    const currentStepIsEqual = item.screenId === currentStep
    const currentStepIsNotEqual = item.screenId !== currentStep

    return (
      <div className="flex flex-row" key={item.screenId}>
        <div className="flex flex-col">
          <div
            className="rounded-full h-7 w-7 p-3.5 ring-2 border-2 border-inset dark:border-dark-inset ring-separator dark:ring-dark-separator mx-2 transition transition-all duration-300 "
            style={{ background: currentStepIsEqual ? 'rgb(146, 227, 169)' : 'rgb(201, 237, 211)' }}
          />
          {idx !== progress.length - 1 && (
            <div className="border-l-2 border-separator dark:border-dark-separator border-rounded h-full m-auto" />
          )}
        </div>
        <div className={`flex flex-col mx-2 ${currentStepIsNotEqual && 'opacity-40'}`}>
          <h1 className="font-medium">{item.title}</h1>
          <div className="my-2 mb-6 text-xs md:text-sm"></div>
        </div>
      </div>
    )
  })

  return (
    <motion.div className="flex flex-col bg-inset dark:bg-dark-inset text-insetText dark:text-dark-insetText rounded-lg p-4 h-auto shadow mb-4">
      <div className="flex-1-1 title mb-2">
        <h1 className="font-semibold">Follow this path</h1>
        <hr className="text-separator dark:text-dark-separator" />
      </div>
      <div className="my-4">{stepViewItems}</div>
    </motion.div>
  )
}
