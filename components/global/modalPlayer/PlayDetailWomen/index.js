import {
    StylePlayCard,
    TitleTablePlayerContent,
    TitleTablePlayerScroll,
    StylesHeaderStatistics,
    StylesDetailPlayerInner,
    StylesDetailPlayerHeader,
    StylesDetailPlayerInnerContent,
    StyleAvata,
    StylesDetailPlayerInnerHeading,
    StatisticsText
} from "./style";
import { TitlePlayer } from "../style"
import Table from "@Component/commons/Table";
import ImageComp from "@Component/commons/Image";
import useTranslation from "next-translate/useTranslation";

const PlayDetailWomen = ({ data }) => {
    const { events, avatar, player_name, results, rookie_year, age, race_to_cme_points } = data;
    const { t } = useTranslation();
    return <>
        <StylesDetailPlayerHeader>
            <StyleAvata>
                <ImageComp img={avatar} alt="avatar" objectFit="cover" />
            </StyleAvata>
            <StylesDetailPlayerInner>
                <StylesDetailPlayerInnerHeading>
                    <TitlePlayer>{player_name}</TitlePlayer>
                </StylesDetailPlayerInnerHeading>
                <StylesDetailPlayerInnerContent>
                    <StylesHeaderStatistics>
                        <StatisticsText>ROOKIE YEAR: <span>{rookie_year}</span></StatisticsText>
                        <StatisticsText>Age: <span>{age}</span></StatisticsText>
                        <StatisticsText>RACE TO CME POINTS: <span>{race_to_cme_points}</span></StatisticsText>
                    </StylesHeaderStatistics>
                </StylesDetailPlayerInnerContent>
            </StylesDetailPlayerInner>
        </StylesDetailPlayerHeader>
        {results?.length ? <StylePlayCard>
            <TitleTablePlayerScroll>
                <TitleTablePlayerContent>
                    <Table list={results} mode={false} />
                </TitleTablePlayerContent>
            </TitleTablePlayerScroll>
        </StylePlayCard> : ""}
    </>
}

export default PlayDetailWomen
