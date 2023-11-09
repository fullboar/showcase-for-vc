import React from 'react'

import { localizationBC } from '../assets/localizationBC'

export const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center content-center mt-2 select-none">
        <a href={`mailto:${localizationBC.components.footer.mailTo}`}>{localizationBC.components.footer.mailTo}</a>
      </div>
      <div className="flex justify-center content-center select-none">
        <p className="self-center mr-2 text-sm">{localizationBC.components.footer.copyright}</p>
      </div>
    </div>
  )
}
