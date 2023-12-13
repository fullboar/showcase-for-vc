import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { fadeDelay, fadeExit } from '../../../FramerAnimations'
import { BackButton } from '../../../components/BackButton'
import { Button } from '../../../components/Button'

export interface Props {
  onboardingStep: string
  addOnboardingStep(): void
  removeOnboardingStep(): void
  removeTwoOnboardingStep(): void
  forwardDisabled: boolean
  backDisabled: boolean
  onboardingCompleted(): void
}

export const OnboardingBottomNav: React.FC<Props> = ({
  onboardingStep,
  addOnboardingStep,
  removeOnboardingStep,
  removeTwoOnboardingStep,
  forwardDisabled,
  backDisabled,
  onboardingCompleted,
}) => {
  const [label, setLabel] = useState('NEXT')
  const isCompleted = onboardingStep === 'SETUP_COMPLETED'

  useEffect(() => {
    if (isCompleted) {
      setLabel('FINISH')
    } else if (onboardingStep === 'CHOOSE_WALLET') {
      setLabel('SKIP')
    } else {
      setLabel('NEXT')
    }
  }, [isCompleted, onboardingStep])

  return (
    <motion.div
      variants={fadeDelay}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex w-full justify-between mb-4 h-8 self-end select-none"
    >
      <div className="flex self-center">
        {/* If isCompleted, back button goes back 2 slides, skipping the 'Credential received' verification */}
        <BackButton
          onClick={isCompleted ? removeTwoOnboardingStep : removeOnboardingStep}
          disabled={backDisabled}
          data-cy="prev-onboarding-step"
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div variants={fadeExit} initial="hidden" animate="show" exit="exit" data-cy="next-onboarding-step">
          <Button
            onClick={isCompleted ? onboardingCompleted : addOnboardingStep}
            text={label}
            disabled={forwardDisabled}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
