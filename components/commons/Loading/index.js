import { StyleButton, StyleText, StyleIcon } from "./style";
import Image from "../Image"
import LoadingOverlay from 'react-loading-overlay'
import ReactLoading from 'react-loading';
import BounceLoader from 'react-spinners/BounceLoader'

const Loading = ({ active, children, onCloseOverload }) => {

  return <LoadingOverlay
    active={active}
    onClick={onCloseOverload}
    styles={{
      wrapper: {},
    }}
    spinner={<ReactLoading type="spin"/>}
  >
    {children}
  </LoadingOverlay>
}
export default Loading
