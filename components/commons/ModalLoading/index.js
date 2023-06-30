import {
    StyleModalLoading,
    StyleModalWapper,
    StyleOverlay,
    StylesPlayerModalBox,
    StylesPlayerModalInner
} from "./style";
import { AnimatePresence, motion } from "framer-motion"
import usePreventScrolling from "../../../store/usePreventScrolling";
import ReactLoading from 'react-loading';

const ModalLoading = ({ active, onClose }) => {
    usePreventScrolling({ active })

    const variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 10, opacity: 0 },
    }
    return <>
        <StyleModalLoading $active={active}>
            <StyleModalWapper>
                <StyleOverlay onClick={onClose} />
                <AnimatePresence mode='wait'>
                    <StylesPlayerModalInner
                        animate={active ? "open" : "closed"}
                        transition={{ duration: 0.5 }}
                        variants={variants}
                    > <StylesPlayerModalBox>
                            <ReactLoading type="spin" />
                        </StylesPlayerModalBox>
                    </StylesPlayerModalInner>
                </AnimatePresence>
            </StyleModalWapper>
        </StyleModalLoading>
    </>
}

export default ModalLoading
