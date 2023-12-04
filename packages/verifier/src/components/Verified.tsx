import verifiedSuccess from '../assets/verified-success.svg'
import { constants } from '../utils/constants'

export const Verified: React.FC = () => {
  return (
    <>
      <img src={verifiedSuccess}></img>
      <div className="mt-5 mb-2 text-lg font-semibold">{constants.verifiedTitle}</div>
      <div>{constants.verifiedDesc}</div>
    </>
  )
}
