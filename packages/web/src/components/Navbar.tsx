import React from 'react'

import { DarkModeContainer } from './DarkModeContainer'

export const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row select-none my-8 md:pt-4 sm:my-4">
      {/* <Logo /> */}
      <div className="flex-1" />
      <DarkModeContainer />
    </div>
  )
}
