import {
    StylePlayCard,
    TitleTablePlayerContent,
    TitleTablePlayerScroll,
    StyleListColor,
    StyleItemColor,
    StyleColor,
} from "./style";
import { TitleTablePlayer } from "../style"
import Table from "@Component/commons/Table";
import Heading from "@Component/commons/Heading";
import RoundComp from "../RoundComp";
import useTranslation from 'next-translate/useTranslation'

const PlayCardContent = ({ data }) => {
    const { score, round } = data
    const { t } = useTranslation()
    const colors = [
        {
            name: t("common:modal.symbols.doubleEagle"),
            background: "#91BD12"
        },
        {
            name: t("common:modal.symbols.eagle"),
            background: "#AEE217"
        },
        {
            name: t("common:modal.symbols.birdie"),
            background: "#DEE217"
        },
        {
            name: t("common:modal.symbols.par"),
            background: "#D9D9D9"
        },
        {
            name: t("common:modal.symbols.bogey"),
            background: "#E2A917"
        },
        {
            name: t("common:modal.symbols.doubleBogey"),
            background: "#E25417"
        },
        {
            name: t("common:modal.symbols.bogey3+"),
            background: "#FF2243"
        }
    ]
    return <>
        <StylePlayCard>
            <TitleTablePlayer>{t("common:modal.playCard")}</TitleTablePlayer>
            <TitleTablePlayerScroll>
                <TitleTablePlayerContent>
                    {score &&
                        <Table list={score}/>}
                    {round &&
                        <RoundComp round={round} data={data} />}
                </TitleTablePlayerContent>
                <StyleListColor>
                    {colors.map((item, index) => {
                        return <StyleItemColor key={`backgroud-${index}`}>
                            <StyleColor $color={item.background} />
                            {item.name}
                        </StyleItemColor>
                    })}
                </StyleListColor>
            </TitleTablePlayerScroll>
        </StylePlayCard>
    </>
}

export default PlayCardContent
