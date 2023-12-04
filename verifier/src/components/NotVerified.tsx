import verifiedFailure from '../assets/verified-failure.svg'
import { constants } from '../utils/constants'

export const NotVerified: React.FC = () => {
  return (
    <>
      <img src={verifiedFailure}></img>
      <div className="mt-5 mb-2 text-lg font-semibold">{constants.notVerifiedTitle}</div>
      <div>{constants.notVerifiedDesc}</div>
    </>
  )
}
