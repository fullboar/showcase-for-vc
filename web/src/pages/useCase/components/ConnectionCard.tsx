import React from 'react'

import { localization } from '../../../assets/localization'
import { prependApiUrl } from '../../../utils/Url'

export interface Props {
  icon?: string
  entity: string
}

export const ConnectionCard: React.FC<Props> = ({ icon, entity }) => {
  return (
    <div className="flex flex-col bg-inset dark:bg-dark-inset text-insetText dark:text-dark-insetText p-4 mb-4 h-auto rounded-lg shadow">
      <div className="flex-1-1 title">
        <h1 className="font-semibold">{localization.pages.useCase.components.connectionCard.title}</h1>
        <hr className="text-separator dark:text-dark-separator" />
      </div>
      <div className="flex-1 flex flex-row items-center justify-between pt-4">
        {icon && (
          <div className="bg-icon dark:bg-dark-icon rounded-lg p-2 w-12">
            <img className="h-8 m-auto" src={prependApiUrl(icon)} alt="icon" />
          </div>
        )}
        <div className="flex-1 px-4 justify-self-start">
          <p>{entity}</p>
        </div>
      </div>
    </div>
  )
}
