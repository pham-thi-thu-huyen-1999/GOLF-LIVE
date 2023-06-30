import {
    StyleModalPlayer,
    StyleModalPlayerWapper,
    StyleOverlay,
    StylesPlayerModalBox,
    StylesIconClose,
    StylesDetailInner,
    StyleAvt,
    StylesDetailPlayer,
    TitlePlayer,
    StylesDetailPlayerContent,
    StylesHeaderInfo,
    StylesPlayerModalInner
} from "./style";

import { Close } from "@Component/commons/Icon";
import { setOverflowModalState, useGlobalState } from "@Dto/states";
import { AnimatePresence, motion } from "framer-motion"
import usePreventScrolling from "../../../store/usePreventScrolling";
import PlayDetailRanking from "./PlayDetailRanking";
import PlayCardContent from "./PlayCardContent";
import PlayDetailWomen from "./PlayDetailWomen";

const ModalPlayer = ({data, onCloseModal = () => {}, checkWomen}) => {
    const [active] = useGlobalState('modal')
    usePreventScrolling({ active })
    const variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 10, opacity: 0 },
    }
    const onClickCloseModal = () => {
        setOverflowModalState(false)
        onCloseModal()
    }
    return <>
        <StyleModalPlayer $active={active}>
            <StyleModalPlayerWapper>
                <StyleOverlay onClick={onClickCloseModal} />
                <AnimatePresence mode='wait'>
                    <StylesPlayerModalInner
                        animate={active ? "open" : "closed"}
                        transition={{ duration: 0.5 }}
                        variants={variants}
                    >
                        <StylesPlayerModalBox>
                            {data ?
                                <StylesDetailInner $mode={data[0] ? "player" : ""}>
                                    <StylesIconClose onClick={onClickCloseModal}>
                                        <Close stroke="black" />
                                    </StylesIconClose>
                                    {data.length ? (checkWomen ? <PlayDetailWomen data={data[0]}/> : <PlayDetailRanking data={data[0]}/>)
                                        : (<>
                                            <StylesDetailPlayer>
                                                <StyleAvt $image={data?.avatar} />
                                                <StylesDetailPlayerContent>
                                                    {/* <Breadcrumb /> */}
                                                    <TitlePlayer>{data?.full_name}</TitlePlayer>
                                                    <StylesHeaderInfo>
                                                        <span>{data?.header_info?.info_1}</span>
                                                        <span>{data?.header_info?.info_2}</span>
                                                    </StylesHeaderInfo>
                                                </StylesDetailPlayerContent>
                                            </StylesDetailPlayer>
                                            {data && <PlayCardContent data={data} />}
                                        </>)
                                    }
                                </StylesDetailInner> :
                                    "Data Empty!"
                                }
                        </StylesPlayerModalBox>
                    </StylesPlayerModalInner>
                </AnimatePresence>
            </StyleModalPlayerWapper>
        </StyleModalPlayer>
    </>
}

export default ModalPlayer
