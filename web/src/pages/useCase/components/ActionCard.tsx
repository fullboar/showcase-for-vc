import { startCase } from 'lodash'
import React from 'react'

import { prependApiUrl } from '../../../utils/Url'

export interface Item {
  icon: string
  name: string
}

export interface Props {
  title: string
  items: { name: string; icon?: string }[]
}

export const ActionCard: React.FC<Props> = ({ items, title }) => {
  return items.length > 0 ? (
    <div className="flex flex-col bg-inset dark:bg-dark-inset m-4 px-4 py-2 w-72 md:w-96 rounded-lg shadow border border-1 border-separator dark:border-dark-separator">
      <div className="flex-1-1 title my-2 ">
        <h1 className="font-semibold">{title}</h1>
        <hr className="text-separator dark:text-dark-separator" />
      </div>
      {items.map((item) => {
        return (
          <div className="flex-1 flex flex-row items-center justify-between my-2" key={item.name}>
            {item.icon && (
              <div className="bg-icon dark:bg-dark-icon rounded-lg p-2 w-12">
                <img className="h-8 m-auto" src={prependApiUrl(item.icon)} alt="icon" />
              </div>
            )}
            <div className="flex-1 px-4 justify-self-start">
              <p>{startCase(item.name)}</p>
            </div>
          </div>
        )
      })}
    </div>
  ) : null
}
