import type { TextWithImage } from '../../../slices/types'

import { motion } from 'framer-motion'
import React from 'react'

import { fadeExit } from '../../../FramerAnimations'

export interface Props {
  title: string
  text: string
  textWithImage?: TextWithImage[]
}

export const StepInformation: React.FC<Props> = ({ title, text, textWithImage }) => {
  const lastIndex = title.lastIndexOf(' ')
  const lastWord = <span className="inline text-theme-blue dark:text-theme-gold">{title.substring(lastIndex + 1)}</span>
  const newTitle = title.substring(0, lastIndex)

  return (
    <div className="flex flex-col leading-loose">
      <div className="flex-1 my-4">
        <h2 className="text-3xl md:text-4xl font-semibold dark:text-white">
          {newTitle}&nbsp;
          {lastWord}
        </h2>
      </div>
      <div className="pt-4 flex-1 mb-6 dark:text-white">
        {textWithImage ? (
          textWithImage.map((item) => (
            <>
              {item.text && <p>{item.text}</p>}
              {item.image && (
                <div className="bg-theme-white dark:bg-theme-black hidden lg:flex lg:w-1/3 rounded-lg flex-col justify-center select-none">
                  <motion.img
                    variants={fadeExit}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="p-4"
                    src={item.image}
                  />
                </div>
              )}
            </>
          ))
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  )
}
