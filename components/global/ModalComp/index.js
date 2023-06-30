import {
    StyleModalComp,
    StyleModalCompWapper,
    StyleOverlay,
    StylesLoginModalBox
} from "./style";
import { setOverflowModalComp, useGlobalState } from "@Dto/states";
import { AnimatePresence, motion } from "framer-motion"
import usePreventScrolling from "../../../store/usePreventScrolling";
import imgGaming from "../../../public/images/gamingPdf-1.jpg"
import ImageComp from "@Component/commons/Image";

const ModalComp = ({ }) => {
    const [active] = useGlobalState('modalComp')
    usePreventScrolling({ active })

    const variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 10, opacity: 0 },
    }
    return <>
        <StyleModalComp $active={active}>
            <StyleModalCompWapper>
                <StyleOverlay onClick={() => {
                    setOverflowModalComp(false)
                }} />
                <AnimatePresence>
                    <motion.div
                        animate={active ? "open" : "closed"}
                        transition={{ duration: 0.5 }}
                        variants={variants}
                    >
                        <StylesLoginModalBox>
                            {{
                                'gaming': <ImageComp img={imgGaming} width={"700px"} height="700px" />
                            }[active]}
                        </StylesLoginModalBox>
                    </motion.div>
                </AnimatePresence>
            </StyleModalCompWapper>
        </StyleModalComp>
    </>
}

export default ModalComp
