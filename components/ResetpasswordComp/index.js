import {
    StyleModalLogin,
    StyleModalLoginWapper,
    StyleOverlay,
    StylesLoginModalBox
} from "./style";
import { setOverflowState, useGlobalState } from "@Dto/states";
import { AnimatePresence, motion } from "framer-motion"
import usePreventScrolling from "store/usePreventScrolling";
import ResetpasswordModal from "./ResetpasswordModal";
import { useRouter } from "next/router";
const ResetpasswordComp = ({ slug }) => {
    const [active] = useGlobalState('login')
    const router = useRouter()
    usePreventScrolling({ active })
    const variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 10, opacity: 0 },
    }
    return <>
        <StyleModalLogin $active={true}>
            <StyleModalLoginWapper>
                <StyleOverlay onClick={() => {
                    router.push("/")
                }} />
                <AnimatePresence>
                    <motion.div
                        animate={"open"}
                        transition={{ duration: 0.5 }}
                        variants={variants}
                    >
                        <StylesLoginModalBox>
                            <ResetpasswordModal slug={slug}/>
                        </StylesLoginModalBox>
                    </motion.div>
                </AnimatePresence>
            </StyleModalLoginWapper>
        </StyleModalLogin>
    </>
}

export default ResetpasswordComp
