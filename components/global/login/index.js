import {
    StyleModalLogin,
    StyleModalLoginWapper,
    StyleOverlay,
    StylesLoginModalBox
} from "./style";
import {setOverflowState, useGlobalState} from "@Dto/states";
import {AnimatePresence, motion} from "framer-motion"
import usePreventScrolling from "../../../store/usePreventScrolling";
import LogIn from "@Component/global/login/LogIn";
import SignUp from "@Component/global/login/SignUp";
import Success from "./Success";
import ForcePassword from "./ForcePassword";
import ForgetPassword from "./ForgetPassword";
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";
const Login = ({data}) => {
    const { t } = useTranslation();
    const router = useRouter()

    const [active] = useGlobalState('login')
    usePreventScrolling({active})

    const variants = {
        open: {y: 0, opacity: 1,zIndex: 2 },
        closed: { y: 10, opacity: 0,zIndex: 2 },
    }
    return <>
        <StyleModalLogin $active={active} key={router.asPath}>
            <StyleModalLoginWapper>
                <StyleOverlay/>
                <AnimatePresence>
                    <motion.div
                        animate={active ? "open" : "closed"}
                        transition={{ duration: 0.5 }}
                        variants={variants}
                    >
                        <StylesLoginModalBox>
                            {{
                                'login': <LogIn data={data['login']} />,
                                'signup': <SignUp data={data['signup']} />,
                                'force_password': <ForcePassword />,
                                'login-success': <Success />,
                                'sendmail-success': <Success title={`${t("common:sentMailSuccess")}!`} text={`${t("common:textSendMail")}`} textButton="Continue" />,
                                'signup-success': <Success text="Your account has been created successfully. " onClick={() =>{ setOverflowState('login') }}/>,
                                'change-password_success': <Success text="Change Password Success" onClick={() =>{ router.push("/"), setOverflowState('login')}} />,
                                'forget_password': <ForgetPassword />,
                            }[active]}
                        </StylesLoginModalBox>
                    </motion.div>
                </AnimatePresence>
            </StyleModalLoginWapper>
        </StyleModalLogin>
    </>
}

export default Login
