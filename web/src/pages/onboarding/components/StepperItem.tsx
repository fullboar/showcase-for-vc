import type { CustomCharacter, ProgressBarStep } from '../../../slices/types'

import React from 'react'

import { useDarkMode } from '../../../hooks/useDarkMode'
import { prependApiUrl } from '../../../utils/Url'

export interface Props {
  currentCharacter: CustomCharacter
  item: ProgressBarStep
  currentStep: string
}

export const StepperItem: React.FC<Props> = ({ item, currentStep, currentCharacter }) => {
  const darkMode = useDarkMode()
  const stepNames = currentCharacter.onboarding.map((item) => item.screenId)
  const currentStepIsEqual = item.onboardingStep === currentStep
  const currentStepIsNotEqual = item.onboardingStep !== currentStep
  const currentStepIsHigher = stepNames.indexOf(currentStep) > stepNames.indexOf(item.onboardingStep)
  const currentStepIsLower = stepNames.indexOf(currentStep) < stepNames.indexOf(item.onboardingStep)
  return (
    <>
      <div className="flex text-progress dark:text-dark-progress relative">
        <div
          className={`rounded-full transition duration-1000 ease-in-out py-3 h-12 w-12 border-2 ${
            currentStepIsEqual
              ? 'bg-inset dark:bg-dark-inset border-2 border-accent dark:border-dark-accent '
              : `${currentStepIsLower && currentStepIsNotEqual ? 'grayscale' : ''}`
          } ${
            currentStepIsHigher && currentStepIsNotEqual
              ? ' border-2 border-accent dark:border-dark-accent bg-background dark:bg-dark-background'
              : ''
          } `}
        >
          <img
            alt={item.name}
            src={darkMode ? prependApiUrl(item.iconDark) : prependApiUrl(item.iconLight)}
            className="m-auto h-5"
          />
        </div>
      </div>
      {item.onboardingStep !== 'SETUP_COMPLETED' && (
        <div
          className={`flex-auto transition duration-300 ease-in-out  ${
            currentStepIsHigher && currentStepIsNotEqual
              ? ' border-t-4 border-accent dark:border-dark-accent'
              : ' border-t-2 border-progress dark:border-dark-progress'
          }`}
        />
      )}
    </>
  )
}
