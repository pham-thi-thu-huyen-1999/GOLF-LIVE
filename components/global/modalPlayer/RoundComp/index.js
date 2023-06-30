import {
    StyleRounds,
    StyleRoundItem,
    StyleHeadingRound,
    StylePar,
    StyleHole,
    StyleItemNumber,
    StylePars,
    StyleTee
} from "./style";
import Heading from "@Component/commons/Heading";
import ParComponent from "./ParComponent";
import RenderNumber from "./RenderNumber";
import useTranslation from 'next-translate/useTranslation'

const RoundComp = ({data, score, round }) => {
    const holes = Array.from({ length: 18 }, (_, i) => i + 1)
    let unique = Date.now()
    const { t } = useTranslation()
    return <StyleRounds>
        {round.map((roundItem, index) => {
            return <StyleRoundItem key={`round-item-${index}-${unique}`}>
                <StyleHeadingRound>
                    <Heading tagName="h5" mode="heading-h5" color="white">
                        {t("common:modal.round")} {index + 1}
                    </Heading>
                </StyleHeadingRound>
                <StyleHole>
                    <Heading tagName="h4" mode="heading-h4" color="green">
                        {t("common:modal.hole")}
                    </Heading>
                    <StylePar>
                        {holes.map((item, index) => {
                            return <StyleItemNumber key={`number-item-${index}-${unique}`}>
                                {item}
                            </StyleItemNumber>
                        })}
                    </StylePar>
                </StyleHole>
                <StylePars>
                    <Heading tagName="h5" mode="heading-h5" color="gray">
                        {t("common:modal.par")}:
                    </Heading>
                    <ParComponent number={roundItem.par} />
                </StylePars>
                <StyleTee>
                    <Heading tagName="h5" mode="heading-h5">
                        {data.full_name}
                    </Heading>
                    <RenderNumber number={roundItem.tee} />
                </StyleTee>
            </StyleRoundItem>
        })}

    </StyleRounds>
}

export default RoundComp
