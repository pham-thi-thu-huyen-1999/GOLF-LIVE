import { useRouter } from 'next/router';
import {AnimatePresence,motion} from "framer-motion";

const Transition = ({children}) => {
    const { asPath } = useRouter();

    const variants = {
        inactive: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'linear'
            },
        },
        out: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'linear'
            }
        }
    };

    return (
        <div className="effect-1">
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="inactive"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;
