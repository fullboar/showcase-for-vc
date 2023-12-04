import React from 'react'

import { localization } from '../assets/localization'

export const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center content-center mt-2 select-none">
        <a href={`mailto:${localization.components.footer.mailTo}`}>{localization.components.footer.mailTo}</a>
      </div>
      <div className="flex justify-center content-center select-none">
        <p className="self-center mr-2 text-sm">{localization.components.footer.copyright}</p>
      </div>
    </div>
  )
}
